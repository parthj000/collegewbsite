import makeSections, { createImage, happen, profileCards } from "./scr.js";
var arr = [
  {
    heading: "About <span style='color:blue;'>Us</span>",
    headingText: "About Us",
    content:
      "<p>The department of Electronics & Communication Engineering was established in the year 2003. Department offers four year degree course in B. Tech (Electronics & Communication Engineering). The department is also engaged in providing in- house training to students.<br><br>Department has qualified faculty. Department has arranged various extramural and extension lectures of experts from institutions of national repute like NIT and IIT in preceding academic sessions.</p>",
    id: "About-us",

    shadowColor: "blue",

    brdrRd: "1rem",
  },
  {
    heading: "Vision And <span style='color: #ff6600;'>Mission</span></span>",
    headingText: "Vision and Mission",
    content:
      "<h1 style='align-text:center;'></h1><p>To produce skilled, employable and ethical Electronics & Communication engineers with research focus to meet industrial and socio-economic needs.</p><br><p><strong style='color:red;'>M1:</strong>&nbsp;To provide updated and quality education in Electronics & Communication Engineering to meet industrial needs.</p><br><p><strong style='color:red;'>M2:</strong>&nbsp;To make undergraduates employable, enhance technical skill and research ability.</p><p><br /><strong><span style='color: #ff0000;'>M3</span>:</strong>&nbsp;To provide ethical and value based education by encouraging students to actively participate in societal needs activity.</p>",
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
    name: "Sarita Chouhan",

    position: "Assistant Professor, B. E.",
  },
  {
    name: "Dr. Ritesh Kumar Saraswat",
    position: "Assistant Professor &  M. Tech., PhD",
  },
  {
    name: "Nidhi Sharma",
    position: "Guest Faculty, B.E., M. Tech.",
  },
  {
    name: "Akanksha Ladha",
    position: "Guest Faculty, B.E., M. Tech. PhD. Persuing",
  },
];

console.log("hello content");
profileCards("tec", faculty);

// createImage("./ee.png");
happen(5000);
makeSections(arr);
