/* ============================================================
   Lab software (order = display order).
   fields: name, desc, link (docs), github,
           conda (anaconda.org), cran, bioc (Bioconductor),
           mark (two-tone wordmark HTML; the <span> half renders in the
           accent colour, mirroring .s-brand__name "Zhou<span>Lab</span>").
           Defaults to the plain name if omitted.
   Omit a registry field where no package is published — a missing link
   beats one that 404s. Verify by page content, not status code:
   Bioconductor soft-404s to "Removed Packages", and CRAN is
   case-sensitive (/package=MethScope resolves, methscope does not).
   ============================================================ */
const SOFTWARE = [
  {
    name: "InfiniumAnnotation",
    mark: 'Infinium<span>Annotation</span>',
    desc: "Manifests and annotations for Infinium DNA methylation BeadChips — EPICv2, EPIC, HM450, MSA, MM285 and Mammal40.",
    link: "https://zwdzwd.github.io/InfiniumAnnotation",
    github: "https://github.com/zhou-lab/InfiniumAnnotation"
  },
  {
    name: "BISCUIT",
    mark: 'BIS<span>CUIT</span>',
    desc: "BISulfite-seq CUI Toolkit — alignment, methylation and mutation calling, and allele-specific methylation from bisulfite sequencing.",
    link: "https://huishenlab.github.io/biscuit/",
    github: "https://github.com/huishenlab/biscuit",
    conda: "https://anaconda.org/bioconda/biscuit",
    bioc: "https://bioconductor.org/packages/biscuiteer"
  },
  {
    name: "MethScope",
    mark: 'Meth<span>Scope</span>',
    desc: "Ultra-fast analysis of sparse methylomes via recurrent methylation patterns — annotate, deconvolve, impute and embed single-cell and spatial data.",
    link: "https://zhou-lab.github.io/MethScope/",
    github: "https://github.com/zhou-lab/MethScope",
    cran: "https://cran.r-project.org/package=MethScope"
  },
  {
    name: "SeSAMe",
    mark: 'Se<span>SAMe</span>',
    desc: "SEnsible Step-wise Analysis of DNA MEthylation — IDAT to betas, QC, differential methylation and copy number, as a single C binary or the R package.",
    link: "https://zwdzwd.github.io/sesame-cli/",
    github: "https://github.com/zwdzwd/sesame-cli",
    conda: "https://anaconda.org/zhou-lab/sesame-cli",
    bioc: "https://bioconductor.org/packages/sesame"
  },
  {
    name: "cinderplot",
    mark: 'cinder<span>plot</span>',
    desc: "The grammar of graphics in C — turns a CSV into a publication-ready PDF, SVG or PNG with a ggplot2-inspired grammar.",
    link: "https://zhou-lab.github.io/cinderplot/",
    github: "https://github.com/zhou-lab/cinderplot",
    conda: "https://anaconda.org/zhou-lab/cinderplot"
  },
  {
    name: "KnowYourCG",
    mark: 'Know<span>Your</span>CG',
    desc: "Functional analysis and set enrichment of DNA methylation at CpG resolution, from one C binary and one verified knowledgebase store.",
    link: "https://zhou-lab.github.io/kycg/",
    github: "https://github.com/zhou-lab/kycg",
    conda: "https://anaconda.org/zhou-lab/kycg",
    bioc: "https://bioconductor.org/packages/knowYourCG"
  },
  {
    name: "tabl",
    mark: '<span>tabl</span>',
    desc: "dplyr/tidyr verbs for TSV pipelines, in pure C — filter, mutate, summarize and arrange, composable through stdin and stdout.",
    link: "https://zhou-lab.github.io/tabl/",
    github: "https://github.com/zhou-lab/tabl",
    conda: "https://anaconda.org/zhou-lab/tabl"
  },
  {
    name: "YAME",
    mark: 'Y<span>AME</span>',
    desc: "Yet Another Methylation Encoder — compact binary CX formats for storing, manipulating and analyzing methylation data, from bulk to hundreds of thousands of single cells.",
    link: "https://zhou-lab.github.io/YAME/",
    github: "https://github.com/zhou-lab/YAME",
    conda: "https://anaconda.org/bioconda/yame"
  }
];
