#!/bin/bash

BUNDLE_PATH=/Users/charles/src/creative-networks/magenta-models/polyphony_rnn.mag

polyphony_rnn_generate \
--bundle_file=${BUNDLE_PATH} \
--output_dir=/Users/charles/src/creative-networks/magenta-models/poly \
--num_outputs=10 \
--num_steps=128 \
--primer_pitches="[67,64,60]" \
--condition_on_primer=true \
--inject_primer_during_generation=false
