#!/bin/bash

BUNDLE_PATH=/Users/charles/src/creative-networks/magenta-models/chord_pitches_improv.mag
CONFIG='chord_pitches_improv'

improv_rnn_generate \
--config=${CONFIG} \
--bundle_file=${BUNDLE_PATH} \
--output_dir=/Users/charles/src/creative-networks/magenta-models/improv \
--num_outputs=10 \
--primer_melody="[60]" \
--backing_chords="C G Am F C G Am F" \
--render_chords
