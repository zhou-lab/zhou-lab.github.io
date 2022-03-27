#!/bin/sh

for f in sesame QC nonhuman modeling inferences KYCG; do
  wzbuild1_vignette.R ../../../sesame/vignettes/$f.Rmd
  cp ../../../sesame/vignettes/$f.html .
done

wzbuild1_vignette.R supplemental.Rmd
