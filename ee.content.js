import makeSections, { createImage, happen } from "./scr.js";
var arr = [
  {
    heading: "About <span style='color:blue;'>Us</span>",
    headingText: "About Us",
    content:
      "<p>The department of Electronics & Communication Engineering was established in the year 2003. Department offers four year degree course in B. Tech (Electronics & Communication Engineering). The department is also engaged in providing in- house training to students.<br><br>Department has qualified faculty. Department has arranged various extramural and extension lectures of experts from institutions of national repute like NIT and IIT in preceding academic sessions.</p>",
    id: "About-us",
    before: "one",
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
    heading: "Annual-Report",
    headingText: "Annual Report",
    content: "Read <a class='b' href='./TC23.pdf'>Annual Report</a>",
    id: "Annual-report",
    shadowColor: "yellow",
  },
];
console.log("hello content");

createImage("./R.png", "0", "50%");
happen(5000);
makeSections(arr);
