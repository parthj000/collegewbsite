import makeSections, { createImage, happen, profileCards } from "./scr.js";
var arr = [
  {
    heading: "Undergraduate",
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
  {
    heading: "Phd. Admissions",
    headingText: "Phd. Admissions",
    id: "four",
    content:
      "The admissions in MLVTEC is processed through <a href='https://www.rtu.ac.in/RTU/dat2018' target = '_blank'>DAT -Doctoral Admission Test (Ph.D.)</a><br><br>1. In all Ph.D. programmes, the admission shall be granted as per Rajasthan Technical University ordinance and regulations for degree of Doctor of Philosophy and the subsequent modifications thereof. The RTU-DAT - 2018 shall be conducted at premise of RTU, Kota only.<br><br>2. List of the applicants, eligible for written test will be displayed only on the RTU DAT2018 website and no individual communication will be made. The applicants are advised to visit regularly on the RTU website for the schedule of RTU-DAT examination and other updated information.<br><br>3. The written examination for RTU-DAT shall consist of 100 multiple choice questions of two & half hour duration in which set of 50 questions will be based on Research Methodology and another set of 50 questions for Specialization paper. Candidates are required to fill answer on OMR sheet pattern. The syllabus for Research Methodology and Specialization paper are available on the RTU web site.<br><br>4. The result of written test of the qualified candidates will be displayed on RTU-DAT 2018 website. All the qualified applicants of RTU-DAT examination shall be invited for <br>interview on the notified date. No separate communication in this regard shall be sent to the individual candidate.<br><br>5. On a notified date the DRC shall interview the invited applicants in the order of merit of RTU-DAT. The DRC shall judge the suitability of the applicant for admission on the basis of applicant's research aptitude, knowledge of the subject, clear understanding of the proposed research problem, suitability of proposed research  methodology, research facilities available and availability of the research supervisor in the proposed research area etc.<br><br>6. The applicant shall be allotted the supervisor(s) on the basis of area of interest of supervisor, interest area of the applicant and mutual consent of the both. University reserves the right not to fill all the vacant seats in the absence of suitable applicants as decided by the DRC. Merely qualifying the RTU-DAT examination does not entitle the applicant for admission to PhD programme.<br><br>7. The reservation in Ph.D. programme shall be as per the Rajasthan State Government Reservation Policy. Applicants desirous of taking admission in OBC/SBC category should have valid certificate of non creamy layer as per government of Rajasthan.<br><br>8. If any Scholarship/assistantship is available, it will be provided to a full time (FT.1) Ph.D. applicant as per the prevailing RTU norms at the time of admission. TA/DAwill notbepaidtotheapplicants forappearingin writtentest/ interview. Stay arrangement will not be provide by university for appearing in the examination/interview.<br><br>9. University shall have right to run or not to run the Ph.D. programme in any specialization.<br><br>10. The applicant having any grievance against the question paper may submit the same in writing to the convener, RTU DAT-2018, within one day of the conduct of that examination.",
  },
  {
    heading: "Scholarships",
    headingText: "Scholarships",
    content:
      "<span class='b clr'>TEAM Alumni Scholarship:</span><br>TEAM scholarship program aims to provide financial aid to students of MLVTEC who are intelligent but belong to financially weak families. Details of scholarships are as follows:<br><br><br><ul style='list-style: none;'><li><strong>Late Sh. Sharad Seth Memorial Scholarship (Rs. 25,000/-):</strong> This scholarship is provided in the memory of Late Sh. Sharad Seth by his daughter Priyanka Talreja (1998 batch) and Dheeraj Talreja (1998 batch).</li><br><br><li><strong>Late Dr. SK Sharma Memorial Scholarship (Rs. 25,000/-):</strong> This scholarship is provided in the memory of college's former principal Late Dr. SK Sharma by his daughter Smt. Deepti (Asso. Prof) and Son in Law Sh. Arvind Vashishtha (Astt. Prof. and 1992 Batch alumnus).</li><br><br><li><strong>Sh. Dilip Jain Memorial Scholarship (Rs. 25,000/-):</strong> This scholarship is provided in the memory of 1st batch student Late Sh. Dilip Jain by the entire 1st batch.</li><br><br><li><strong>1998 Batch Scholarship (Two Scholarship, each of Rs. 25,000/-):</strong> This scholarship is provided by alumni of entire 1998 batch to the needy student of MLVTEC.</li><br><br><li><strong>1996 Batch Scholarship (Rs. 25,000/-):</strong> This scholarship is provided by 1996 batch of alumni to the needy and deserving student of MLVTEC.</li></ul>",
  },
];

console.log("hello content");
happen("no");
makeSections(arr);
