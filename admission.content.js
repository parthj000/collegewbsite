import makeSections, { createImage, happen, profileCards } from "./scr.js";
var arr = [
  {
    heading: "Admissions Process",
    headingText: "UG Admissions",
    content:
      "<p>Students are admitted to undergraduate courses through an All-India competition known as Joint Entrance Examination (JEE-Mains). Rajasthan Engineering Admission Process (REAP) for admissions to 1st year of B.Tech. Direct admissions are offered at college level to left out candidates and those who do not appear in JEE-Mains. The process for direct admission is same as that of REAP and/or as directed by Government of Rajasthan.<a href = './TC23.pdf' class= 'link'>Read more</a></p>",
    id: "UG",
  },
  {
    heading: "Post Graduate",
    headingText: "PG Admissions",
    content:
      "The admissions in MLVTEC is processed through CAM -Centralized Admission for Master of Technology (M. Tech.).<br><br>The notification for CAM-2018 will be published in the National/State level Newspapers as per the tentative schedule. All candidates (whether having a valid GATE score or not having a valid GATE score but, fulfilling the eligible qualification as givenabove) are required to complete allthe stages of admissionprocess givenbelow.<br><br>The admission process is divided into following stages:<br><span style='color:red;'>Stage:I</span> Online registration and fee payment,<br><span style='color:red;'>Stage:I</span>  Filling of application form,<br><span style='color:red;'>Stage:II</span> Uploading the documents, online choice filling and locking,<br><span style='color:red;'>Stage:III</span> Seatallotment,<br><span style='color:red;'>Stage:IV</span>  Physical reporting and admission in the allotted institutes.<br>",
    id: "PG",
  },
];

console.log("hello content");
happen("no");
makeSections(arr);
