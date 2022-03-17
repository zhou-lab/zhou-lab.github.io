#!/bin/sh

for f in sesame QC nonhuman modeling inferences KYCG; do
  wzbuild1_vignette.R $f.Rmd
done
