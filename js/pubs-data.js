/* ============================================================
   Featured publications.
   Newest first; grouped by `year` automatically.
   authors: HTML ok — wrap lab members in <u>…</u>, use <sup>†</sup>.
   pdf: filename only (prefixed with the S3 papers/ path by the renderer).
   links: [{type, href}]  type ∈ code | server | doc | link
   Set prelab:true to drop an entry below the "Prior to Zhou lab" divider.
   ============================================================ */
const PUB_PDF_BASE = "https://zwdzwd.s3.amazonaws.com/papers/";

const PUBS = [
  /* ---- 2026 ---- */
  {
    year: 2026,
    authors: "Loo*, Fowler*, <u>Zhu</u>, Krapp, Zhu, Bartolomei, <u>Zhou</u><sup>†</sup>, Kohli<sup>†</sup>",
    title: "A theoretical and experimental framework enables low-coverage sequencing for accurate quantification of genome-wide cytosine modification levels",
    titleLink: "https://doi.org/10.1093/nargab/lqag082",
    journal: "NAR Genomics and Bioinformatics",
    pdf: "Loo2026NARGAB.pdf",
    links: [{ type: "server", href: "https://zhou-lab.github.io/TAE_calculator/" }, { type: "code", href: "https://github.com/zhou-lab/TAE_calculator" }]
  },
  {
    year: 2026,
    authors: "Loo, Parker, Barka, Zhu, Schnell, Cuomo, <u>Zhu</u>, Liu, Chen, Gill, <u>Zhou</u><sup>†</sup>, Kohli<sup>†</sup>",
    title: "Unnatural cytosine analogs potentiate customizable simultaneous epigenetic and four-base genetic sequencing",
    titleLink: "https://pubs.acs.org/doi/10.1021/jacs.5c18450",
    journal: "Journal of the American Chemical Society",
    pdf: "2026JACS.pdf",
    links: [{ type: "code", href: "https://github.com/zhou-lab/epimatcher/tree/main" }]
  },
  {
    year: 2026,
    authors: "<u>Li*</u>, Filho*, Isaza, Hinkle, Xu, Li, Bauer<sup>†</sup>, Franco<sup>†</sup>, <u>Zhou</u><sup>†</sup>",
    title: "DNA Methylation-based Risk Stratification and Classification of Pediatric Thyroid Carcinoma",
    titleLink: "https://doi.org/10.1158/1078-0432.CCR-25-2109",
    journal: "Clinical Cancer Research",
    pdf: "2026CCR.pdf",
    links: [{ type: "code", href: "https://github.com/jennyznli/2025_TC" }]
  },

  /* ---- 2025 ---- */
  {
    year: 2025,
    authors: "<u>Goldberg*</u>, <u>Fu*</u>, Atkins, <u>Moyer</u>, Lee, Deng, <u>Zhou</u><sup>†</sup>",
    title: "KnowYourCG: Facilitating Base-level Sparse Methylome Interpretation",
    titleLink: "https://www.science.org/doi/10.1126/sciadv.adw3027",
    journal: "Science Advances",
    pdf: "2025ScienceAdvances.pdf",
    links: [{ type: "code", href: "https://github.com/zhou-lab/knowYourCG" }]
  },
  {
    year: 2025,
    authors: "<u>Lee</u>, <u>Goldberg</u>, <u>Cloud</u>, Parker, Krapp, Loo, <u>Kim</u>, <u>Zhao</u>, Jin, Porecha, Bartolomei, Kohli<sup>†</sup>, <u>Zhou</u><sup>†</sup>",
    title: "A Ternary-code DNA Methylome Atlas of Mouse Tissues",
    titleLink: "https://doi.org/10.1186/s13059-025-03808-y",
    journal: "Genome Biology",
    pdf: "2025GenomeBiol.pdf"
  },
  {
    year: 2025,
    authors: "Lee*<sup>†</sup>, <u>Fu*</u>, Cardilla, <u>Zhou</u><sup>†</sup>, Deng<sup>†</sup>",
    title: "Spatial joint profiling of DNA methylome and transcriptome in mammalian tissues",
    titleLink: "https://www.nature.com/articles/s41586-025-09478-x",
    journal: "Nature",
    pdf: "2025Nature.pdf",
    press: [
      { label: "CHOP Cornerstone Blog", href: "https://www.research.chop.edu/cornerstone-blog/is-next-level-spatial-analysis-of-dna-process-possible" },
      { label: "PennMedicine Research", href: "https://www.newswise.com/articles/new-tool-provides-next-level-spatial-analysis-of-dna-process" },
      { label: "测序中国", href: "https://mp.weixin.qq.com/s/GSpfQeP2SJBMX5yS6FBB1g" }
    ]
  },
  {
    year: 2025,
    authors: "Yehya<sup>†</sup>, Till, Srivastava, Zhang, Christie, Carpenter, Mangalmurti, <u>Zhou</u><sup>†</sup>",
    title: "Cell-free DNA methylomes identify tissue injury patterns in pediatric ARDS",
    titleLink: "https://insight.jci.org/articles/view/191684",
    journal: "JCI Insight",
    pdf: "2025JCIInsight.pdf"
  },
  {
    year: 2025,
    authors: "<u>Goldberg</u>, <u>Cloud</u>, <u>Lee</u>, Barnes, Gruber, <u>Kim</u>, Pottekat, Westphal, McAuliffe, Majounie, KalayilManian, Tran, Hansen, Stojakovic, Parker, Kohli, Porecha, Renke, <u>Zhou</u><sup>†</sup>",
    title: "Scalable Screening of Ternary-Code DNA Methylation Dynamics Associated with Human Traits",
    titleLink: "https://linkinghub.elsevier.com/retrieve/pii/S2666979X25001855",
    journal: "Cell Genomics",
    pdf: "2025CellGenomics.pdf",
    press: [
      { label: "Preview (Zhou & Huang)", href: "https://www.sciencedirect.com/science/article/pii/S2666979X25002629" },
      { label: "CHOP Cornerstone Blog", href: "https://www.research.chop.edu/cornerstone-blog/can-complex-dna-methylation-be-decoded" }
    ]
  },
  {
    year: 2025,
    authors: "Zipple<sup>†</sup>, <u>Zhao</u>, Kuo, <u>Lee</u>, Sheehan<sup>†</sup>, <u>Zhou</u><sup>†</sup>",
    title: "Ecological Realism Accelerates Epigenetic Aging in Mice",
    titleLink: "http://doi.org/10.1111/acel.70098",
    journal: "Aging Cell",
    pdf: "2025AgingCell.pdf",
    press: [{ label: "Lifespan.io", href: "https://www.lifespan.io/news/common-laboratory-mice-age-faster-in-a-natural-environment/" }]
  },

  /* ---- 2024 ---- */
  {
    year: 2024,
    authors: "<u>Zhou</u><sup>†</sup>, Reizel<sup>†</sup>",
    title: "On correlative and causal links of replicative epimutations",
    titleLink: "https://www.sciencedirect.com/science/article/pii/S0168952524001859",
    journal: "Trends in Genetics",
    note: "Review",
    pdf: "2024ZhouReizel.pdf"
  },
  {
    year: 2024,
    authors: "Chen, <u>Zhou</u><sup>†</sup>",
    title: "mLiftOver: Harmonizing Data Across Infinium DNA Methylation Platforms",
    titleLink: "https://doi.org/10.1093/bioinformatics/btae423",
    journal: "Bioinformatics",
    pdf: "2024ChenBioinfo.pdf"
  },
  {
    year: 2024,
    authors: "<u>Zhou*</u>, Johnson*, Morrison*, Beddows, Eapen, Katsman, Semwal, Abi-Habib, Heo, Laird, Berman, Triche, Shen<sup>†</sup>",
    title: "BISCUIT: an efficient, standards-compliant tool suite for simultaneous genetic and epigenetic inference in bulk and single-cell studies",
    titleLink: "https://doi.org/10.1093/nar/gkae097",
    journal: "Nucleic Acids Research",
    pdf: "Zhou2024NAR.pdf"
  },
  {
    year: 2024,
    authors: "<u>Lee</u>, Loo, Prasasya, Bartolomei, Kohli, <u>Zhou</u><sup>†</sup>",
    title: "Low-input and single-cell methods for Infinium DNA methylation BeadChips",
    titleLink: "https://doi.org/10.1093/nar/gkae127",
    journal: "Nucleic Acids Research",
    pdf: "Lee2024NAR.pdf",
    press: [{ label: "测序中国", href: "https://mp.weixin.qq.com/s/kxyb5P7aFLqvMeNRG0uhnw" }]
  },

  /* ---- 2023 ---- */
  {
    year: 2023,
    authors: "<u>Kaur*</u>, <u>Lee*</u>, <u>Goldberg</u>, Spix, Hinoue, Li, Dwaraka, Smith, Shen, Liang, Renke, Laird, <u>Zhou</u><sup>†</sup>",
    title: "Comprehensive Evaluation of The Infinium Human MethylationEPIC v2 BeadChip",
    titleLink: "https://epicom.biomedcentral.com/articles/10.1186/s43682-023-00021-5",
    journal: "Epigenetics Communications",
    pdf: "Kaur2023.pdf"
  },
  {
    year: 2023,
    authors: "<u>Ding</u><sup>†</sup>, <u>Goldberg</u>, <u>Zhou</u><sup>†</sup>",
    title: "PyComplexHeatmap: a Python package to visualize multimodal genomics data",
    titleLink: "https://onlinelibrary.wiley.com/doi/full/10.1002/imt2.115",
    journal: "iMeta",
    pdf: "2023iMeta.pdf",
    links: [{ type: "code", href: "https://github.com/DingWB/PyComplexHeatmap" }]
  },
  {
    year: 2023,
    authors: "<u>Ding</u>, <u>Kaur</u>, Horvath, <u>Zhou</u><sup>†</sup>",
    title: "Comparative epigenome analysis using Infinium DNA methylation BeadChips",
    titleLink: "https://academic.oup.com/bib/advance-article/doi/10.1093/bib/bbac617/6974838",
    journal: "Briefings in Bioinformatics",
    pdf: "Ding2023BIB.pdf"
  },
  {
    year: 2023,
    authors: "<u>Iqbal</u>, <u>Zhou</u><sup>†</sup>",
    title: "Computational methods for single-cell DNA methylome analysis",
    titleLink: "https://www.sciencedirect.com/science/article/pii/S1672022922000742",
    journal: "Genomics, Proteomics & Bioinformatics",
    note: "Review",
    pdf: "Iqbal2023.pdf"
  },

  /* ---- 2022 ---- */
  {
    year: 2022,
    authors: "<u>Zhou</u><sup>†</sup>, Hinoue, Barnes, Mitchell, <u>Iqbal</u>, <u>Lee</u>, Foy, Lee, <u>Moyer</u>, VanderArk, Koeman, <u>Ding</u>, Kalkat, Spix, Eagleson, Pospisilik, Szabo, Bartolomei, Vander Schaaf, Kang, Wiseman, Jones, Krawczyk, Adams, Porecha, Chen, Shen<sup>†</sup>, Laird<sup>†</sup>",
    title: "DNA Methylation Dynamics and Dysregulation Delineated by High-Throughput Profiling in the Mouse",
    titleLink: "https://www.cell.com/cell-genomics/fulltext/S2666-979X(22)00077-5",
    journal: "Cell Genomics",
    pdf: "Zhou2022CellGenomics.pdf",
    press: [{ label: "Preview by Manel Esteller", href: "https://www.cell.com/cell-genomics/fulltext/S2666-979X" }]
  },

  /* ---- 2021 ---- */
  {
    year: 2021,
    authors: "Robertson, Yau, Carrot-Zhang, Damrauer, Knijnenburg, Chambwe, Hoadley, Kemal, Zenklusen, Cherniack<sup>†</sup>, Beroukhim<sup>†</sup>, <u>Zhou</u><sup>†</sup>",
    title: "Integrative modeling identifies genetic ancestry-associated molecular correlates in human cancer",
    journal: "STAR Protocols",
    pdf: "Robertson2021STARprotocol.pdf"
  },

  /* ---- 2020 ---- */
  {
    year: 2020,
    authors: "<u>Zhou</u><sup>†</sup>, Liang, Molloy, Jones<sup>†</sup>",
    title: "DNA Methylation Enables Transposable Element-Driven Genome Expansion",
    titleLink: "https://www.pnas.org/doi/10.1073/pnas.1921719117",
    journal: "PNAS",
    pdf: "2020PNAS.pdf"
  },
  {
    year: 2020,
    authors: "Carrot-Zhang*, Chambwe*, Damrauer*, Knijnenburg*, Robertson*, Yao*, <u>Zhou*</u>, Berger*, Huang*, et al.",
    title: "Comprehensive Analysis of Genetic Ancestry and Its Molecular Correlates in Cancer",
    titleLink: "https://www.sciencedirect.com/science/article/pii/S1535610820302117",
    journal: "Cancer Cell",
    note: "co-first authors ordered alphabetically",
    pdf: "2020CancerCell.pdf"
  },

  /* ---- Prior to Zhou lab ---- */
  {
    year: 2019, prelab: true,
    authors: "Gao*, Parker*, Reynolds*, Silva*, Wang*, <u>Zhou*</u>, et al.",
    title: "Before and After: A Comparison of Legacy and Harmonized TCGA Data at the Genomic Data Commons",
    journal: "Cell Systems",
    note: "co-first authors ordered alphabetically",
    pdf: "2019CellSys.pdf"
  },
  {
    year: 2018, prelab: true,
    authors: "Carpenter*, <u>Zhou*</u>, et al.",
    title: "Mother-child transmission of epigenetic information by variable imprinting",
    journal: "PNAS",
    pdf: "2018PNAS.pdf"
  },
  {
    year: 2018, prelab: true,
    authors: "<u>Zhou</u><sup>†</sup>, Triche, Laird, Shen<sup>†</sup>",
    title: "SeSAMe: Reducing artifactual detection of DNA methylation by Infinium BeadChips in genomic deletions",
    journal: "Nucleic Acids Research",
    pdf: "2018NAR.pdf"
  },
  {
    year: 2018, prelab: true,
    authors: "<u>Zhou*</u>, Dinh*, Ramjan, Weisenberger, Nicolet, Shen<sup>†</sup>, Laird<sup>†</sup>, Berman<sup>†</sup>",
    title: "DNA methylation loss in late-replicating domains is linked to mitotic cell division",
    titleLink: "https://www.nature.com/articles/s41588-018-0073-4",
    journal: "Nature Genetics",
    pdf: "2018NG.pdf",
    links: [{ type: "doc", href: "http://zwdzwd.github.io/pmd", label: "PMD Annotations" }]
  },
  {
    year: 2017, prelab: true,
    authors: "<u>Zhou</u>, Laird, Shen",
    title: "Comprehensive characterization, annotation and innovative use of Infinium DNA Methylation BeadChip probes",
    journal: "Nucleic Acids Research",
    pdf: "2017NAR.pdf",
    links: [{ type: "doc", href: "http://zwdzwd.github.io/InfiniumAnnotation", label: "Annotation Hub" }]
  },
  {
    year: 2016, prelab: true,
    authors: "Liu*, Ohtani*, <u>Zhou*</u>, Ørskov, Charlet, Zhang, Shen, Baylin, Liang, Grønbæk, Jones",
    title: "Vitamin C increases viral mimicry induced by 5-aza-2'-deoxycytidine",
    titleLink: "https://doi.org/10.1073/pnas.1612262113",
    journal: "PNAS",
    pdf: "2016PNAS.pdf"
  },
  {
    year: 2015, prelab: true,
    authors: "<u>Zhou*</u>, Chen*, Chong, Rohrdanz, Melott, Wakefield, Zeng, Weinstein, Meric-Bernstam, Mills, Chen",
    title: "TransVar: a multi-level variant annotator for precision genomics",
    titleLink: "https://www.nature.com/articles/nmeth.3622",
    journal: "Nature Methods",
    pdf: "2015NM.pdf",
    links: [{ type: "server", href: "https://bioinformatics.mdanderson.org/transvar/" }, { type: "code", href: "https://github.com/zwdzwd/transvar" }]
  },
  {
    year: 2015, prelab: true,
    authors: "<u>Zhou</u>, Zhao, Chong, Mark, Eterovic, Meric-Bernstam, Chen",
    title: "ClinSeK: a targeted variant characterization framework for clinical sequencing",
    journal: "Genome Medicine"
  },
  {
    year: 2014, prelab: true,
    authors: "<u>Zhou</u><sup>†</sup>, Chen, Zhao, Eterovic, Meric-Bernstam, Mills, Chen<sup>†</sup>",
    title: "Bias from removing read duplication in ultra-deep sequencing experiments",
    titleLink: "https://doi.org/10.1093/bioinformatics/btt771",
    journal: "Bioinformatics",
    pdf: "2014Bioinf.pdf",
    links: [{ type: "code", href: "https://github.com/zwdzwd/duprecover" }]
  },
  {
    year: 2012, prelab: true,
    authors: "<u>Zhou</u><sup>†</sup>, Nakhleh<sup>†</sup>",
    title: "Convergent evolution of modularity in metabolic networks through different community structures",
    journal: "BMC Evolutionary Biology",
    pdf: "2012BMCEvo.pdf"
  },
  {
    year: 2012, prelab: true,
    authors: "<u>Zhou</u><sup>†</sup>, Nakhleh<sup>†</sup>",
    title: "Quantifying and assessing the effect of chemical symmetry in metabolic pathways",
    journal: "Journal of Chemical Information and Modeling",
    pdf: "2012JCIM.pdf"
  },
  {
    year: 2011, prelab: true,
    authors: "<u>Zhou</u><sup>†</sup>, Nakhleh<sup>†</sup>",
    title: "The strength of chemical linkage as a criterion for pruning metabolic graphs",
    journal: "Bioinformatics",
    pdf: "2011Bioinfo.pdf"
  },
  {
    year: 2011, prelab: true,
    authors: "<u>Zhou</u><sup>†</sup>, Nakhleh<sup>†</sup>",
    title: "Properties of metabolic graphs: biological organization or representation artifacts?",
    journal: "BMC Bioinformatics",
    pdf: "2011BMCBioinf.pdf"
  }
];
