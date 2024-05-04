import makeSections, { createImage, happen, profileCards } from "./scr.js";
var arr = [
  {
    heading: "About <span style='color:blue;'>Us</span>",
    headingText: "About Us",
    content:
      "<p>The department of Eleecwas established in the year 2002. Department offers four year degree course in B. Tech (Information Technology). The department is also engaged in providing in-house training to students and other aspirants from private and public sector as well. Department has many qualified faculties. Department has arranged various expert lectures from institutions of national repute like IIT&rsquo;s and NIT&rsquo;s in previous academic sessions.<br />Department is helping the students to enhance their IT Skills in Research &amp; Development through a balance in Theory and Practical. The Department emphasizes on Domain Specific Applications such as &ndash; Networks, Information Security, Software Engineering, Operating Systems and Database Management Systems etc. to facilitate the students in acquiring higher degree of knowledge, global competency and excellence, for the betterment of the society.</p>",
    id: "About-us",
    before: "one",
    shadowColor: "blue",

    brdrRd: "1rem",
  },
  {
    heading: "Vision And <span style='color: #ff6600;'>Mission</span></span>",
    headingText: "Vision and Mission",
    content:
      "<h1 style='align-text:center;'></h1><p>To become good education centre of excellence in Information Technology and make industry ready engineers & professionals with high ethical values prepared for lifelong learning.</p><br><p><strong style='color:red;'>M1:</strong>&nbsp;To impart outcome based education for emerging technologies in the field of Information Technology.</p><br><p><strong style='color:red;'>M2:</strong>&nbsp;To provide opportunities for interaction between academia and industry.</p><p><br /><strong><span style='color: #ff0000;'>M3</span>:</strong>&nbsp;To provide platform for Social Responsibilities by accepting the change in technologies and to develop aptitude of fulfilling social responsibilities.</p>",
    id: "vision-mission",
    shadowColor: "brown",
    before: "one",
  },
  {
    heading: "PSO",
    headingText: "Program Specific Outcomes",
    content:
      "<span class='clr'>PSO1:</span> Provide students with core competence in mathematics, scientific and basic engineering fundamentals to develop mechanical engineering applications.<br><br><span class='clr'>PSO3:</span> To empower the students to apply practical skills, knowledge in major streams such as thermal, design, manufacturing and industrial engineering.<br><br><span class='clr'>PSO3:</span> To enable the student to take-up career in industries or to pursue higher studies in mechanical and interdisciplinary programs with high regard for ethical values, environmental and social issues.",
    id: "Annual-report",
    shadowColor: "yellow",
  },
  {
    heading: "Resources",
    headingText: "Resources",
    content:
      "<a class='clr' href='./TC23.pdf'>Annual Report</a><br><br><a class='clr' href='./TC23.pdf'>Outcome based Education 2024</a><br><br><a class='clr' href='./TC23.pdf'>TIME TABLE 2024</a><br><br><a class='clr' href='./TC23.pdf'>Previous Year Question Papers</a><br><br>",
    id: "Annual-report",
    shadowColor: "yellow",
  },
];

const faculty = [
  {
    name: "Anurag Jagetiya",
    src: "https://mlvti.ac.in/admin/uploads/353f5769.jpg",

    position: "Assistant Professor, B.E., M.E. PhD(Pursuing)",
  },
  {
    name: "Nidhi Surana",
    src: "https://mlvti.ac.in/admin/uploads/nidhi.jpg",

    position: "Assistant Teaching Associates, B.E., M. Tech.",
  },
  {
    name: "Amisha Sharma",
    src: "https://mlvti.ac.in/admin/uploads/amisha.jpg",

    position: "Guest Faculty, B.E., M. Tech.",
  },
];

console.log("hello content");
happen(5000);
makeSections(arr);
// createImage("./cs.png", 2);
profileCards("tec", faculty);
