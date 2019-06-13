---
layout: titlepage
title: Hi, Welcome!
subtitle: placeholder
bigimg: ["/img/philly2.jpg"]
show-avatar: false
---

<!-- Notice Section -->

{% capture noticesection %}

## Multiple positions are available starting 2020!
I am looking for lab members at all levels (undergraduates, graduate students, and postdoctoral fellows). 
If interested, please send me an [email](mailto:zhouwanding@gmail.com)! Students are welcome to join our lab through the [Genomics and Computational Biology](https://www.med.upenn.edu/gcb/index.shtml) graduate program.

{% endcapture %}


<!-- Research Section -->

{% capture researchsection %}

## Our Research

_- We develop **computational methods to analyze DNA methylation assay of the next generation** - low-input/single-cell, long-read technology. We also create novel analytics to support technologies that integrate DNA methylation, genetic variation, chromatin accessibility and conformation._

_- We do **integrative data analysis** to understand how cells translate epigenetic information into transcriptional regulation and eventually into phenotypical manifestation.  We focus on leveraging DNA methylation as a robust readout of the chromatin state and cell identity._

_- We develop **biomarkers and diagnostic methods** to aid translational research of human, esp. childhood disease including pediatric malignancies, developmental abnormalities, cognitive deficit and infectious disease. Our mission is to use data science to better patient outcomes and quality of life._

{% endcapture %}


<!-- Publication Section -->

{% capture papersection %}
## Selected Publications

<a href="http://zwdzwd.io/papers/Publications_latest.pdf" class="btn btn-primary btn-md" role="button">Publications</a>
<a href="http://zwdzwd.io/papers/WandingZhou_CV_latest.pdf" class="btn btn-primary btn-md" role="button">Wanding Zhou's CV</a>

"Before and After: A Comparison of Legacy and Harmonized TCGA Data at the Genomic Data Commons."
<br>**Cell Systems 2019**

"Mother-child transmission of epigenetic information by variable imprinting"<br>**PNAS 2018** <a href="http://zwdzwd.io/papers/2018PNAS.pdf"><i class="fa fa-file-text-o"></i></a>

"SeSAMe: Reducing artifactual detection of DNA methylation by Infinium BeadChips in genomic deletions."<br>**Nucleic Acids Research 2018** <a href="http://zwdzwd.io/papers/2018NAR.pdf"><i class="fa fa-file-text-o"></i></a>

"DNA methylation loss in late-replicating domains is linked to mitotic cell division."<br>**Nature Genetics 2018** <a href="http://zwdzwd.io/papers/2018NG.pdf"><i class="fa fa-file-text-o"></i></a>

"Comprehensive characterization, annotation and innovative use of Infinium DNA Methylation BeadChip probes."<br>**Nucleic Acids Research 2017** <a href="http://zwdzwd.io/papers/2017NAR.pdf"><i class="fa fa-file-text-o"></i></a>

"Vitamin C increases viral mimicry induced by 5-aza-2'-deoxycytidine."<br>**PNAS 2016** <a href="http://zwdzwd.io/papers/2016PNAS.pdf"><i class="fa fa-file-text-o"></i></a>

"TransVar: a multi-level variant annotator for precision genomics.<br>**Nature Methods 2015** <a href="http://zwdzwd.io/papers/2015NM.pdf"><i class="fa fa-file-text-o"></i></a>

"Bias from removing read duplication in ultra-deep sequencing experiments."<br>**Bioinformatics 2014** <a href="http://zwdzwd.io/papers/2014Bioinf.pdf"><i class="fa fa-file-text-o"></i></a>

{% endcapture %}


<!-- Team section -->
<!-- see _includes/front.html -->




<!-- News section -->
{% capture newssection %}

### End of The Beginning
<button style="background-color:#336699; color:white; border:none; border-radius:3px" disabled>6/7/2019</button>
Wanding officially signed the offer and will start his group at CHOP & Penn beginning in January 2020. He was waving good bye to decade-long training as a Ph.D student and a postdoc. He is feeling very excited!

{% endcapture %}



<!-- Software section -->
{% capture softwaresection %}

## SeSAMe
<button style="background-color:#336699; color:white; border:none; border-radius:3px" disabled>R/Bioconductor</button>
## BISCUIT
<button style="background-color:#336699; color:white; border:none; border-radius:3px" disabled>C</button>
<button style="background-color:#339933; color:white; border:none; border-radius:3px" disabled>DNA Methylation</button> 

{% endcapture %}



<!-- Contact section -->
<!-- see _includes/front.html -->





<!-- End of all sections -->

{% include front.html %}





<!-- --- -->

<!-- <center> -->
<!-- <a class="twitter-timeline" data-width="366" data-height="555" data-theme="dark" data-link-color="#19CF86" href="https://twitter.com/zhouwanding?ref_src=twsrc%5Etfw">Tweets by Wanding</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
<!-- </center> -->


<script src="js/jquery-1.11.2.min.js"></script>
<!-- <script src="js/typed.2.0.9.js" type="text/javascript"></script> -->
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>

<script>
var typed = new Typed('.typed', {
  strings: ["DNA Methylation.", "Epigenetics.", "Cancer Genomics.", "Machine Learning."],
  typeSpeed: 200,
  backdelay: 2000,
  loop: true
});
</script>
