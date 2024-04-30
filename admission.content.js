import makeSections, { createImage, happen, profileCards } from "./scr.js";
var arr = [
  {
    heading: "Admissions Process",
    headingText: "About Us",
    content:
      "<p>Students are admitted to undergraduate courses through an All-India competition known as Joint Entrance Examination (JEE-Mains). Rajasthan Engineering Admission Process (REAP) for admissions to 1st year of B.Tech. Direct admissions are offered at college level to left out candidates and those who do not appear in JEE-Mains. The process for direct admission is same as that of REAP and/or as directed by Government of Rajasthan.<a href = './TC23.pdf' class= 'a'>Read more</a></p>",
    id: "About-us",
    before: "one",
    shadowColor: "grey",

    brdrRd: "1rem",
  },
];

console.log("hello content");
happen("no");
makeSections(arr);
