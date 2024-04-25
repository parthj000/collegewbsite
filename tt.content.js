import makeSections, { createImage, happen, profileCards } from "./scr.js";
var arr = [
  {
    heading: "About <span style='color:blue;'>Us</span>",
    headingText: "About Us",
    content:
      "<p>The department of Textile Technology was established in the year 1988. Department offers four year degree course in B. Tech (Textile Technology), B.Tech ( Textile Engineering) as well as Post-graduate course M. Tech (Textile Technology). The department is also engaged in Post graduate education and research activities as well. It is also recognized as Research Centre for Doctoral studies. Department has highly qualified faculty and other highly skilled technical staff. Department has arranged various extramural and extension lectures of experts from institutions of national repute like NIT and IIT in preceding academic sessions.<br><br>Being the part of an exclusive college offering degree courses the department produces University toppers every year. The products of it are excelling in their world of work across the globe occupying high positions in organizations of national and international repute.</p>",
    id: "About-us",
    before: "one",
    shadowColor: "blue",

    brdrRd: "1rem",
  },
  {
    heading: "Vision And <span style='color: #ff6600;'>Mission</span></span>",
    headingText: "Vision and Mission",
    content:
      "<h1 style='align-text:center;'></h1><p>“To prepare best quality textile graduates for textile industry and research at national and international level in conventional and frontier areas of Textile Technology”<br><br> <span style= 'color:red;'>“To provide the best quality technical education, so that the students can be transformed into qualified textile professional capable of applying their technical knowledge in textile industry and research for welfare of the society”.</span></p>",
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
happen(5000);
makeSections(arr);

//faculty profile cards

const faculty = [
  {
    name: "Arvind Vashishtha",
    src: "https://mlvti.ac.in/admin/uploads/1724bdad.jpg",

    position: "Assistant Professor cum TPO, M. Tech., PhD (Pursuing)",
  },
  {
    name: "Krishna Gopal Bhadada",
    src: "https://mlvti.ac.in/admin/uploads/249433c2.jpg",

    position: "Assistant Professor cum TPO, M. Tech., PhD (Pursuing)",
  },
  {
    name: "Meenu Munjal",
    src: "https://mlvti.ac.in/admin/uploads/meenu.jpg",

    position: "Assistant Professor cum TPO, M. Tech., PhD (Pursuing)",
  },
  {
    name: "A. Kaniraja",
    src: "https://mlvti.ac.in/admin/uploads/1452f5bc.jpg",

    position: "Assistant Professor cum TPO, M. Tech., PhD (Pursuing)",
  },
  {
    name: "Reena Ranjan Bhatnagar",
    src: "https://mlvti.ac.in/admin/uploads/125aee99.jpg",

    position: "Assistant Professor cum TPO, M. Tech., PhD (Pursuing)",
  },
];

const faculty2 = [
  {
    name: "A. Kaniraja",
    src: "https://mlvti.ac.in/admin/uploads/1452f5bc.jpg",

    position: "Assistant Professor cum TPO, M. Tech., PhD (Pursuing)",
  },
  {
    name: "Reena Ranjan Bhatnagar",
    src: "https://mlvti.ac.in/admin/uploads/125aee99.jpg",

    position: "hiiii",
  },
];

profileCards("tec", faculty);
// createImage("./tt.png");
// profileCards("pic-card-2", faculty2);

// Access all children of the node
