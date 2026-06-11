/* ============================================================
   Lab members. Photos live in images/members/.
   Use IMG_PLACEHOLDER for people without a headshot yet.
   `bio` shows in a hover popover on the dashboard — edit freely.
   ============================================================ */
const IMG_BASE = "images/members/";
const IMG_PLACEHOLDER = "photo-not-available.jpg";

const MEMBERS = [
  { name: "Wanding Zhou", role: "Principal Investigator", meta: "Assistant Professor, Pathology & Lab Medicine", photo: "Wanding_Zhou_SMALL_2.jpg", lead: true,
    bio: "Assistant Professor of Pathology & Laboratory Medicine at CHOP and Penn. PhD in Bioengineering (Rice University); postdoctoral training at MD Anderson and the Van Andel Institute. Builds computational methods for DNA methylation and epigenetics." },
  { name: "Cameron Cloud", role: "Graduate Student", dates: "2023–", meta: "UPenn Bioengineering", photo: "member_Cameron.jpg",
    bio: "Bioengineering PhD student (matriculated 2024) who joined the lab in 2023. Works at the interface of computational and experimental DNA methylation analysis." },
  { name: "Hongxiang Fu", role: "Graduate Student", dates: "2023–", meta: "UPenn Bioengineering", photo: "member_Hongxiang.png",
    bio: "Bioengineering PhD student developing methods for spatial and sparse DNA methylome analysis." },
  { name: "Hao Xu", role: "Graduate Student", dates: "2024–", meta: "UPenn Bioengineering", photo: "member_HaoXu2.png",
    bio: "Bioengineering PhD student working on scalable analysis of sparse single-cell DNA methylomes." },
  { name: "Chang Su", role: "Master Research Intern", dates: "2025–", meta: "University of Pennsylvania", photo: IMG_PLACEHOLDER,
    bio: "Master's research intern contributing to computational epigenetics projects in the lab." },
  { name: "Namju Kim", role: "VMD-PhD Rotation Student", dates: "2026–", meta: "UPenn Genomics & Computational Biology", photo: IMG_PLACEHOLDER,
    bio: "VMD-PhD student rotating in the lab." },
  { name: "Olivia DeShong", role: "Undergraduate Researcher", dates: "2026–", meta: "University of Pennsylvania", photo: IMG_PLACEHOLDER,
    bio: "Undergraduate researcher at the University of Pennsylvania." }
];

/* role = position while in the lab · now = current position (optional)
   Ordered by the year they left the lab (most recent first). */
const ALUMNI = [
  { name: "Jenny Li", dates: "2023–26", role: "Undergraduate Researcher", now: "MD/PhD candidate & Research Associate, Nathanson Lab" },
  { name: "Sol Moe Lee", dates: "2020–25", role: "Postdoctoral Fellow", now: "National Medical Center of Korea" },
  { name: "David Goldberg", dates: "2021–25", role: "PhD Student · Penn NGG", now: "Biomeme, Inc." },
  { name: "Heqiao Zhu", dates: "2022–25", role: "PhD Student · Penn BE" },
  { name: "Ivan Zhao", dates: "2024", role: "Undergraduate Research Intern" },
  { name: "Elliot Kim", dates: "2024", role: "Undergraduate Research Intern" },
  { name: "Zhuoran Xu", dates: "2024", role: "Rotation Student · Penn GCB" },
  { name: "Wubin Ding", dates: "2021–23", role: "Postdoctoral Fellow", now: "Salk Institute" },
  { name: "Diljeet Kaur", dates: "2022–23", role: "PhD Student · Penn CAMB" },
  { name: "Waleed Iqbal", dates: "2021–22", role: "PhD Student · Drexel BME" },
  { name: "Andrew Patterson", dates: "2021", role: "Rotation Student · Penn GCB" },
  { name: "Ethan Moyer", dates: "2020–21", role: "Undergraduate Researcher", now: "Moberg Analytics" },
  { name: "Yang Wan", dates: "2020–21", role: "Master's Intern", now: "University of Pennsylvania" },
  { name: "Borui Xiao", dates: "2020", role: "Master's Intern", now: "Hengrui Medicine Inc." }
];
