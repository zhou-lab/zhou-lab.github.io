/* ============================================================
   News / updates feed data (newest first).
   date precision is encoded by the string:
     "2026-05-13" → May 13, 2026   (exact day known)
     "2025-09"    → Sep 2025       (month known)
     "2026"       → 2026           (year only)
   fields: date, tag, title, link (optional)
   ============================================================ */
const NEWS = [
  {
    date: "2026-06-30",
    tag: "Paper",
    title: "Loo, Fowler et al., “A theoretical and experimental framework enables low-coverage sequencing for accurate quantification of genome-wide cytosine modification levels,” accepted at NAR Genomics and Bioinformatics.",
    link: "https://doi.org/10.1093/nargab/lqag082"
  },
  {
    date: "2026-06-01",
    tag: "Lab",
    title: "Welcome to Namju Kim (VMD-PhD rotation student) and Olivia DeShong (undergraduate researcher), who joined the lab.",
    link: ""
  },
  {
    date: "2026-05-13",
    tag: "Award",
    title: "Jenny Li received the Neysa Cristol Adams Prize Award.",
    link: ""
  },
  {
    date: "2026-05-05",
    tag: "Talk",
    title: "Wanding gives the Human Genetics Seminar at Baylor College of Medicine: “From Shadows to Signals: Decoding sparse and hidden cytosine modifications at scale.”",
    link: ""
  },
  {
    date: "2026-02",
    tag: "Paper",
    title: "Loo et al., “Unnatural cytosine analogs potentiate customizable simultaneous epigenetic and four-base genetic sequencing,” is out in JACS.",
    link: "https://pubs.acs.org/doi/10.1021/jacs.5c18450"
  },
  {
    date: "2026-01",
    tag: "Paper",
    title: "Li et al., “DNA Methylation-based Risk Stratification and Classification of Pediatric Thyroid Carcinoma,” accepted at Clinical Cancer Research.",
    link: "https://doi.org/10.1158/1078-0432.CCR-25-2109"
  },
  {
    date: "2025-12",
    tag: "Grant",
    title: "New NIH/NIA R21 (Sheehan, Zhou): “Epigenetic Aging: The Impact of Social and Environmental Realism.”",
    link: ""
  },
  {
    date: "2025-09",
    tag: "Paper",
    title: "Lee, Fu et al., “Spatial joint profiling of DNA methylome and transcriptome in tissues,” published in Nature.",
    link: "https://www.nature.com/articles/s41586-025-09478-x"
  },
  {
    date: "2025-08",
    tag: "Grant",
    title: "Awarded an Alzheimer’s Association Research Grant: “Multi-scale spatial mapping of epigenetic signatures of Alzheimer’s disease.”",
    link: ""
  },
  {
    date: "2025-07",
    tag: "Paper",
    title: "Goldberg, Cloud et al., “Scalable screening of ternary-code DNA methylation dynamics associated with human traits,” in Cell Genomics.",
    link: "https://linkinghub.elsevier.com/retrieve/pii/S2666979X25001855"
  },
  {
    date: "2024-09",
    tag: "Lab",
    title: "Welcome to Hao Xu, who joined the lab as a Bioengineering Ph.D. student.",
    link: ""
  },
  {
    date: "2024-04-17",
    tag: "Award",
    title: "Jenny Li received the Frances Velay Fellowship Award.",
    link: ""
  },
  {
    date: "2022-06-27",
    tag: "Award",
    title: "David Goldberg received an NIH T32 training program award.",
    link: ""
  }
];
