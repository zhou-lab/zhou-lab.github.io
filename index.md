---
layout: titlepage
title: Hi, Welcome!
subtitle: Zhou Lab
bigimg: ["/img/philly3.jpg"]
show-avatar: false
---

<!-- Notice Section -->

{% capture noticesection %}

Students and postdocs who are interested in our research are welcome to send me an [email](mailto:zhouw3@email.chop.edu).

{% endcapture %}


<!-- Research Section -->

{% capture researchsection %}

## Our Research

Our long-standing research interest is to understand tissue heterogeneity, stem cell homeostasis and cellular aging using third-generation sequencing technologies and advanced informatics.

Specifically, we develop **DNA methylation assays**, such as single-molecule, long-read technologies and computational methods, to investigate **tissue heterogeneity** and **stem cell homeostasis**. We also create novel analytics to support technologies that integrate DNA methylation, genetic variation, chromatin accessibility and conformation.

We also integrate multi-omics data to study how cells translate epigenetic information into transcriptional regulation and eventually into phenotypical manifestation.  We focus on leveraging DNA methylation as a robust readout of the chromatin state and cell identity.

The goal of our research is to develop biomarkers and diagnostic methods to aid translational research of human, esp. childhood disease including pediatric malignancies, developmental abnormalities, cognitive deficit and infectious disease. Our mission is to use data science to better patient outcomes and quality of life.

{% endcapture %}


<!-- Publication Section -->

{% capture papersection %}
## Selected Publications

Gao\*, Parker\*, Reynolds\*, Silva\*, Wang\*, **Zhou\*** et al. (co-first authors ordered alphabetically) "Before and After: A Comparison of Legacy and Harmonized TCGA Data at the Genomic Data Commons."
**Cell Systems 2019** <a href="http://zwdzwd.io/papers/2019CellSys.pdf"><i class="fa fa-file-text-o"></i></a>

Carpenter\*, **Zhou\*** et al. "Mother-child transmission of epigenetic information by variable imprinting" **PNAS 2018** <a href="http://zwdzwd.io/papers/2018PNAS.pdf"><i class="fa fa-file-text-o"></i></a>

**Zhou** et al. "SeSAMe: Reducing artifactual detection of DNA methylation by Infinium BeadChips in genomic deletions." **Nucleic Acids Research 2018** <a href="http://zwdzwd.io/papers/2018NAR.pdf"><i class="fa fa-file-text-o"></i></a>

**Zhou\***, Dinh\* et al. "DNA methylation loss in late-replicating domains is linked to mitotic cell division."<br>**Nature Genetics 2018** <a href="http://zwdzwd.io/papers/2018NG.pdf"><i class="fa fa-file-text-o"></i></a>

**Zhou** et al. "Comprehensive characterization, annotation and innovative use of Infinium DNA Methylation BeadChip probes." **Nucleic Acids Research 2017** <a href="http://zwdzwd.io/papers/2017NAR.pdf"><i class="fa fa-file-text-o"></i></a>

Liu\*, Ohtani\*, **Zhou\*** et al. "Vitamin C increases viral mimicry induced by 5-aza-2'-deoxycytidine." **PNAS 2016** <a href="http://zwdzwd.io/papers/2016PNAS.pdf"><i class="fa fa-file-text-o"></i></a>

**Zhou\***, Chen\* et al. "TransVar: a multi-level variant annotator for precision genomics. **Nature Methods 2015** <a href="http://zwdzwd.io/papers/2015NM.pdf"><i class="fa fa-file-text-o"></i></a>

**Zhou** et al. "Bias from removing read duplication in ultra-deep sequencing experiments." **Bioinformatics 2014** <a href="http://zwdzwd.io/papers/2014Bioinf.pdf"><i class="fa fa-file-text-o"></i></a>

More information about our publication:<br>
<a href="http://zwdzwd.io/papers/Publications_latest.pdf" class="btn btn-primary btn-md" role="button">Publications</a>
<a href="http://zwdzwd.io/papers/WandingZhou_CV_latest.pdf" class="btn btn-primary btn-md" role="button">Wanding Zhou's CV</a>


{% endcapture %}


<!-- Team section -->
<!-- see _includes/front.html -->




<!-- News section -->
{% capture newssection %}

<!-- <button style="background-color:#336699; color:white; border:none; border-radius:3px" disabled>11/1/2019</button> -->
<!-- <button style="background-color:#336699; color:white; border:none; border-radius:3px" disabled>6/7/2019</button> -->

- `11/25/2019` - Ethan Moyer joined the lab, welcome!
- `11/01/2019` - The Zhou lab is open at CHOP.
- `06/07/2019` - Wanding officially signed the offer and will start his group at CHOP & Penn around the beginning of 2020.

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
