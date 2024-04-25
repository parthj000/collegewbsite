import makeSections, { happen, profileCards } from "./scr.js";
var arr = [
  {
    heading: "About <span style='color:blue;'>Us</span>",
    headingText: "About Us",
    content:
      "<p>The mechanical engineering has a major role in automobile, aviation, production, power generation, mining and refineries. The department of Mechanical Engineering was established in the year 2007. Department offers four year degree course in B. Tech (Mechanical Engineering). The department is also engaged in providing in-house training to students. Department has qualified faculty and skilled supporting technical staff.</p>",
    id: "About-us",
    before: "one",

    brdrRd: "1rem",
  },
  {
    heading: "Vision And <span style='color: #ff6600;'>Mission</span></span>",
    headingText: "Vision and Mission",
    content:
      "<h1 style='align-text:center;'></h1><p>To develop innovative, entrepreneurial, industry oriented manpower to accept challenges and successful Mechanical Engineering graduates who will serve as a valuable resource for industry and society.</p><br><p><strong style='color:red;'>M1:</strong>&nbsp;Imparting quality education in Mechanical Engineering discipline by making Smart Teaching-Learning method in conducive environment.</p><br><p><strong style='color:red;'>M2:</strong>&nbsp; Motivating students for higher studies, research-work and to think innovatively for lifelong learning.</p><p><br /><strong><span style='color: #ff0000;'>M3</span>:</strong>&nbsp;Creating awareness about the needs of Mechanical Engineering industries through Alumni and Industry-Institute Interactions.</p>",
    id: "vision-mission",
    shadowColor: "brown",
    before: "one",
  },
  {
    heading: "Annual-Report",
    headingText: "Annual Report",
    content: "Read <a class='b' href='./TC23.pdf'>Annual Report</a>",
    id: "Annual-report",
    shadowColor: "yellow",
  },
];

const faculty = [
  {
    name: "Arun Kumar Goyal",
    position: "Assistant Professor, M. Tech.",
  },
  {
    name: "Atul Sharma",
    position: "Visiting Faculty, M. Tech. PhD(Persuing)",
  },
  {
    name: "Suraj Kumar Gupta",
    position: "Visiting Faculty, M. Tech. IITD",
  },
  {
    name: "Akshay Verma",
    position: "Visiting Faculty M. Tech ",
  },
];

console.log("hello content");
happen(5000);
makeSections(arr);
profileCards("tec", faculty);
