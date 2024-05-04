import makeSections, { createImage, happen, profileCards } from "../scr.js";

function createTable(rows, cols, contentArray) {
  // Create a table element
  var table = document.createElement("table");

  // Loop through each row
  for (var i = 0; i < rows; i++) {
    // Create a table row element
    var row = document.createElement("tr");

    // Loop through each column
    for (var j = 0; j < cols; j++) {
      // Create a table cell element
      var cell = document.createElement("td");

      // Check if contentArray has content for this cell
      if (contentArray[i] && contentArray[i][j]) {
        // Set the content of the cell
        cell.textContent = contentArray[i][j];
      }

      // Append the cell to the row
      row.appendChild(cell);
    }

    // Append the row to the table
    table.appendChild(row);
  }

  // Return the created table
  console.log("ho gy append");
  console.log(table);
  return table;
}


// tables data start here :
var content = [
    
    			
    ["Designation", "Name", "Position", "Contact No."],
    ["Chief Proctor", "Dr. Dinesh Narain Vyas", "Associate Professor", "94131 49522"],
    ["Proctor -UG/PG Admissions","Rajeev Agarwal","Assistant Professor"," 98299 62536"],
    ["Proctor -UG/PG Examinations","Dinesh Kumar Sharma","Assistant Professor","94145 94037"],
    ["Proctor -UG/PG Scholarship Section","D. K. Das, Shyam Sunder","Assistant Professor","87641 22431"],
    ["MS/Degree/TC/CC Section","Virendra Singh Choudhary","Senior Assistant (UDC)","92515 12300"],
    ["Admission Section","Ganesh Lal Koli","Junior Assistant (LDC)","70621 23204"],
    ["Examinations Section","Pyar Chand Koli","Assistant Administrative Officer","94143 71854"],    
    ["Scholarship Section","Anil Kumar Arora","Steno (English)","80057 02858"],
    
];

var content2 = [
    ["S. No.", "Name", "Designation", "Section", "Contact"],
    [1, "Position Vacant", "Registrar", "Head of Office", ""],
    [2, "Dr. Kamal Chand Jain", "Associate Professor (Physics)", "Officer-In-Charge (Estt.)", "9460579544"],
    [3, "Sh. Jugal Kishor Sankhala", "Jr. Assistant (LDC)", "Estt. (Gazetted)", ""],
    [4, "Sh. Kailash Chand Sharma", "Jr. Assistant (LDC)", "Estt. (Non-Gazetted)", ""]
];

var content3 = [
    ["S. No.", "Name", "Designation", "Section"],
    [1, "Sh. Prakash Chandra Birla", "Assistant Professor (Textile Tech.)", "Purchase Officer"],
    [2, "Sh. Gurudutt Sharma", "Jr. Assistant (LDC)", "General Purchase"]
]


var content4 = [
    ["S. No.", "Name", "Designation", "Position"],
    [1, "Sh .D.N. Vyas", "Associate Professor & Head Basic Science", "Chairman"],
    [2, "Head of Department/OIC", "--", "Members"],
    [3, "Sh. Laxmi Narayan Somani", "Accounts Officer (Addl. Charge)", "Member"],
    [4, "Sh. Praksh Chandra Birla", "Assistant Professor (Textile Tech.)", "Member Secretary"]
]


var content5= [
    ["S. No.", "Name", "Designation", "Section"],
    [1, "Sh. Laxmi Narayan Somani", "Accounts Officer", "Head of Accounts"],
    [2, "Sh. Satya Narayan Sharma", "Sr. Assistant (UDC)", "Cashier (NGF/TEQIP/TESTING/CPF)"],
    [3, "Sh. Sanjay Bagarhatta", "Sr. Assistant (UDC)", "Accounts & Audit"],
    [4, "Sh. Dinesh Kumar Sharma", "Jr. Assistant (LDC)", "Cashier (Self Supporting Fund)"]
]


var content6 = [
    ["S. No.", "Name", "Designation", "Position"],
    [1, "Sh. D. N. Vyas", "Associate Professor & Head Basic Science", "Officer-In-Charge (B&W / Estate)"],
    [2, "Sh. Lalit Shankar Sharma", "Demonstrator (Textile Tech.)", "In-Charge (B&W / Estate)"],
    [3, "Sh. Paul Tirki", "Sr. Assistant (UDC)", "Dealing Official"],
    [4, "Sh. Jadish Chandra Singolia", "Plumber cum Fitter", ""],
    [5, "Sh. Jaswant Singh", "Electrician cum Pump Operator", ""]
]

var content7 = [
    ["S. No.", "Name", "Designation", "Position"],
    [1, "Sh. Krishna Gopal Bhadada", "Assistant Professor (Textile Technology)", "Store Officer"],
    [2, "Smt. Deepika Verma", "Junior Assistant (Store)", "Store Keeper"]
]

var content8 = [
    ["S. No.", "Name", "Designation", "Position"],
  [1, "Sh. D. N. Vyas", "Associate Professor & Head Basic Science", "Officer-In-charge"],
  [2, "Sh. Krishan Gopal Bhadada", "Assistant Professor (Textile Technology)", "Member"],
  [3, "Sh. Jitendra Meena", "Assistant Professor (Textile Chemistry)", "Member"],
  [4, "Smt. Reena Ranjan Bhatnagar", "Demonstrator (Textile Technology)", "Member"],
  [5, "Sh. A. Kaniraja", "Demonstrator (Textile Technology)", "Member"],
  [6, "Sh. Pankaj Sharma", "Demonstrator (Textile Technology)", "Member"],
  [7, "Amisha R Patil", "Student", "Secretary (Cultural)"],
  [8, "Abid Raza", "Student", "Secretary (Discipline)"],
  [9, "Jayati Kumawat", "Student", "Secretary (Literal)"],
  [10, "Avish Jain", "Student", "Secretary (Management)"],
  [11, "Vashu Srivastava", "Student", "Secretary (Management)"],
  [12, "Salman Khan", "Student", "Secretary (Games & Sports- Boys)"],
  [13, "Nilakshi Das", "Student", "Secretary (Games & Sports- Girls)"],
  [14, "Abhishek Jangid", "Student", "Secretary (Sports Management)"]
]


//table data end here 







// Create the table
var table = createTable(8, 4, content);
var table2 = createTable(5, 5, content2);
var table3 = createTable(3, 4, content3);
var table4 = createTable(5, 4, content4);
var table5 = createTable(5, 4, content5);
var table6 = createTable(6, 4, content6);
var table7 = createTable(3, 4, content7);
var table8 = createTable(15, 4, content8);


document.getElementById("table-container1").appendChild(table);
document.getElementById("table-container2").appendChild(table2);
document.getElementById("table-container3").appendChild(table3);
document.getElementById("table-container4").appendChild(table4);
document.getElementById("table-container5").appendChild(table5);
document.getElementById("table-container6").appendChild(table6);
document.getElementById("table-container7").appendChild(table7);
document.getElementById("table-container8").appendChild(table8);
