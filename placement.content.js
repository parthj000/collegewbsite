import makeSections, { createImage, happen, profileCards } from "./scr.js";
var arr = [
  {
    heading: "Placement & Training",
    headingText: "Placement & Training",
    content: "",
    id: "About-us",
    before: "one",
    shadowColor: "blue",

    brdrRd: "1rem",
  },
  {
    heading: "new",
    headingText: "new",
    content: "wwp",
    id: "dsnk",
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
happen(0);

profileCards("tec", faculty); //faculty profile card

makeSections(arr);
