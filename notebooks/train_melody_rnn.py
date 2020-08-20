# Imports
#from music21 import converter, instrument, note, chord, stream, midi
import numpy as np
import keras
from sklearn.model_selection import train_test_split
import h5py

print("Loading data and setting up parameters")
# Training Hyperparameters:
VOCABULARY_SIZE = 130  # known 0-127 notes + 128 note_off + 129 no_event
SEQ_LEN = 30
BATCH_SIZE = 256
HIDDEN_UNITS = 256
EPOCHS = 100
SEED = 2345  # 2345 seems to be good.
np.random.seed(SEED)

DATASET_FILE = "maestro_midi_arrays.h5"
with h5py.File(DATASET_FILE, 'r') as data:
    train_set = [data[k][()] for k in list(data.keys())]  # extract all arrays

print("Training melodies:", len(train_set))


# Functions for slicing up data
def slice_sequence_examples(sequence, num_steps, step_size=1):
    """ Slices a sequence into examples of length
        num_steps with step size step_size."""
    xs = []
    for i in range((len(sequence) - num_steps) // step_size + 1):
        example = sequence[(i * step_size): (i * step_size) + num_steps]
        xs.append(example)
    return xs


def seq_to_overlapping_format(examples):
    """Takes sequences of seq_len+1 and returns overlapping
    sequences of seq_len."""
    xs = []
    ys = []
    for ex in examples:
        xs.append(ex[:-1])
        ys.append(ex[1:])
    return (xs, ys)


def seq_to_singleton_format(examples):
    """Return the examples in seq to singleton format.
    """
    xs = []
    ys = []
    for ex in examples:
        xs.append(ex[:-1])
        ys.append(ex[-1])
    return (xs, ys)


# Prepare training data as X and Y.
# This slices the melodies into sequences of length SEQ_LEN+1.
# Then, each sequence is split into an X of length SEQ_LEN and a y of length 1.

# Slice the sequences:
slices = []
for seq in train_set:
    slices += slice_sequence_examples(seq, SEQ_LEN+1, step_size=4)

# Split the sequences into Xs and ys:
X, y = seq_to_overlapping_format(slices)
# Convert into numpy arrays.
X = np.array(X)
y = np.array(y)

# Reduce dataset size for testing versions.
print("Using reduced dataset with 10K values.")
X = X[:10000]
y = y[:10000]

X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.33, random_state=SEED)

y_train = y_train.reshape(-1, SEQ_LEN, 1)
y_val = y_val.reshape(-1, SEQ_LEN, 1)

# Look at the size of the training corpus:
print("Total Training Corpus:")
print("X train:", X_train.shape)
print("y train:", y_train.shape)
print("X val:", X_val.shape)
print("y val:", y_val.shape)
print()


# build the model: 2-layer LSTM network.
# Using Embedding layer and sparse_categorical_crossentropy loss function
# to save some effort in preparing data.
# model_train = keras.models.Sequential()
# model_train.add(keras.layers.embeddings.Embedding(VOCABULARY_SIZE, HIDDEN_UNITS, input_length=SEQ_LEN))
# model_train.add(keras.layers.LSTM(HIDDEN_UNITS, name='lstm1', return_sequences=True))
# model_train.add(keras.layers.LSTM(HIDDEN_UNITS, name='lstm2', return_sequences=True))
# model_train.add(keras.layers.TimeDistributed(keras.layers.Dense(VOCABULARY_SIZE, activation='softmax'), name='td'))
# model_train.compile(loss='sparse_categorical_crossentropy', optimizer='adam')
# model_train.summary()

print('Build model...')
inputs = keras.layers.Input(shape=(SEQ_LEN,), name='inputs')
emb_in = keras.layers.Embedding(VOCABULARY_SIZE, HIDDEN_UNITS, input_length=SEQ_LEN)(inputs)
lstm_in = emb_in  # starter input for lstm
lstm_out = keras.layers.LSTM(HIDDEN_UNITS, name='lstm1', return_sequences=True)(lstm_in)
lstm_out = keras.layers.LSTM(HIDDEN_UNITS, name='lstm2', return_sequences=True)(lstm_out)
proj_layer = keras.layers.Dense(VOCABULARY_SIZE, activation='softmax', name='dense_proj')
td_layer = keras.layers.TimeDistributed(proj_layer, name='td_proj')
rnn_out = td_layer(lstm_out)
model_train = keras.models.Model(inputs=inputs, outputs=rnn_out)

## See if multi GPU will work.
# try:
#     model_train = keras.utils.multi_gpu_model(model_train)
# except:
#     print("multi gpu util failed.")
#     pass

# Compile and get ready to train
model_train.compile(loss='sparse_categorical_crossentropy', optimizer='adam')
model_train.summary()

print("Going to train...")
# Fit the model
filepath = "melody_rnn-E{epoch:02d}-VL{val_loss:.2f}.hdf5"
checkpoint = keras.callbacks.ModelCheckpoint(filepath, save_weights_only=True, verbose=1, save_best_only=True, mode='min')
early_stopping = keras.callbacks.EarlyStopping(monitor='val_loss', mode='min', verbose=1, patience=10)
callbacks = [keras.callbacks.TerminateOnNaN(), checkpoint, early_stopping]
history = model_train.fit(X_train, y_train, verbose=2, batch_size=BATCH_SIZE, epochs=EPOCHS, callbacks=callbacks, validation_data=(X_val, y_val))
model_train.save('melody_rnn_final.h5')
