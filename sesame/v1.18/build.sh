#!/bin/sh

for f in sesame QC nonhuman modeling inferences KYCG; do
  wzbuild1_vignette.R ../../../sesame_1.18/vignettes/$f.Rmd
  cp ../../../sesame_1.18/vignettes/$f.html .
done

wzbuild1_vignette.R supplemental.Rmd
