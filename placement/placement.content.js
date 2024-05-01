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
  ["Branch","Enrolled students","Eligible students","Placed students","Percentage Placement",],
  ["Textile Technology", 113, 61, 61, 100],
  ["Textile Chemistry", 30, 15, 15, 100],
  ["Information Technology", 52, 43, 23, 53.48],
  ["Electronics and Comm.", 11, 7, 1, 14.28],
  ["Mechanical Engineering", 29, 14, 6, 42.85],
  ["Total", 235, 140, 106, 75.71],
];

var content2 = [
  ["Branch","Enrolled students","Eligible students","Placed students","Percentage Placement",
  ],
  ["Textile Technology", 113, 61, 61, 100],
  ["Textile Chemistry", 30, 15, 15, 100],
  ["Information Technology", 52, 43, 23, 53.48],
  ["Electronics and Comm.", 11, 7, 1, 14.28],
  ["Mechanical Engineering", 29, 14, 6, 42.85],
  ["Total", 235, 140, 106, 75.71],
];

var content3 = [
  ["Branch", "Total enrolled students", "Eligible students", "Total placed students", "Percentage Placement"],
  ["Textile Technology", 139, 83, 60, 72.28],
  ["Textile Chemistry", 36, 18, 12, 66.66],
  ["Information Technology", 61, 51, 34, 67],
  ["Electronics and Comm.", 23, 9, 5, 59],
  ["Mechanical Engineering", 57, 7, 3, 42.86],
  ["Total", 317, 168, 114, 67.85]
]


var content4 = [
  ["Branch", "Total Enrolled Students", "Eligible Students", "Placed Students", "Percentage Placement"],
  ["Textile Technology", 125, 88, 68, 77.27],
  ["Textile Chemistry", 33, 22, 22, 100],
  ["Information Technology", 58, 38, 12, 31.57],
  ["Electronics & Communication Engineering", 34, 16, 2, 12.5],
  ["Mechanical Engineering", 54, 184, 7, 28],
  ["Total", 304, 184, 111, 60.32]
]


var content5= [
  ["Branch", "Total Enrolled Students", "Eligible Students", "Placed Students", "Percentage Placement"],
  ["Textile Technology", 135, 97, 97, 100],
  ["Textile Chemistry", 45, 26, 25, 96.15],
  ["Textile Engineering", 9, 4, 4, 100],
  ["Information Technology", 61, 40, 11, 27.5],
  ["Electronics & Communication Engineering", 53, 25, 3, 12],
  ["Mechanical Engineering", 73, 40, 5, 12.50],
  ["Total", 376, 232, 145, 62.50]
]


var content6 = [
  ["Branch", "Total Enrolled Students", "Eligible Students", "Placed Students", "Percentage Placement"],
  ["Textile Technology", 136, 86, 86, 100],
  ["Textile Chemistry", 48, 38, 38, 100],
  ["Textile Engineering", 10, 7, 7, 100],
  ["Information Technology", 40, 28, 8, 28.57],
  ["Electronics & Communication Engineering", 54, 35, 2, 5.71],
  ["Mechanical Engineering", 70, 39, 5, 12.82],
  ["Total", 358, 232, 146, 62.90]
]

var content7 = [
  ["Branch", "Total Enrolled Students", "Eligible Students", "Placed Students", "Percentage Placement"],
  ["Textile Technology", 138, 87, 78, 89.65],
  ["Textile Chemistry", 45, 33, 28, 84.8],
  ["Textile Engineering", 7, 4, 3, 75],
  ["Information Technology", 50, 39, 14, 36],
  ["Electronics & Communication Engineering", 59, 44, 6, 13.6],
  ["Mechanical Engineering", 71, 45, 12, 26.7],
  ["Total", 375, 252, 141, 55.95]
]


//table data end here 



var OurPrideContent =[
    ["Name","Designation","Organization",],  
    ["Mr. Rakesh Srivastava (1992)", "Sales Head", "Tech Mahindra, USA"],
    ["Mr. Sandeep Dangi (1992)", "Managing Director", "Adhunik Polytex P. Ltd., Surat"],
    ["Mr. Madhusudan Nuwal (1992)", "Managing Director", "Swagat Synthetics P. Ltd., Bhilwara"],
    ["Mr. Hemant Kedia (1992)", "Head of Procurement", "Reliance Ind. Ltd. (Recron-Malaysia)"],
    ["Mr. Rahul Srivastava (1992)", "General Manager (Mktg.)", "Reliance Ind. Ltd., Bangalore"],
    ["Mr. S K Jhuriya (1992)", "Vice President", "Vardhman Textiles, Bhopal"],
    ["Mr. Sanjay Soni (1993)", "General Manager", "Cantabil Retail Ind. Ltd., New Delhi"],
    ["Mr. Vivek Sahal (1993)", "General Manager", "RSWM Ltd., New Delhi"],
    ["Mr. Piyush Baheti (1994)", "General Manager", "Reliance Ind. Ltd., Surat"],
    ["Mr. Jagmohan Sharma (1994)", "Sourcing Head", "Clan International Ltd., Canada"],
    ["Mr. Kamlesh Baheti (1994)", "General Manager (Mktg.)", "Reliance Ind. Ltd., Mumbai"],
    ["Mr. Rakesh Kumar Gagrani (1994)", "General Manager", "RSWM Ltd., Banswara"],
    ["Mr. Dheeraj Talreja (1998)", "Director (North East & South East Asia)", "Hunts Man International P. Ltd., Singapore"],
    ["Mr. Shailendra Sharma (1998)", "Joint Commissioner (IRS)", "Income Tax Dept., Jaipur"],
    ["Mr. Amit Pandey (1995)", "General Manager", "Vinayak Textile Ltd., Ludhiana"],
    ["Mr. Manish Sharma (1994)", "General Manager", "JBF Ltd., Silvassa"],
    ["Ms. Prashasti Pareek (2008)", "IAS", "Gujrat Cadre"],
    ["Mr. Shyam Sunder Verma (2005)", "CEO", "Ready Bytes, Bhilwara"],
    ["Mr. Pankaj Dadhich (2006)", "Project Manager", "Robert Bosch (India Division)"],
    ["Mr. Sandeep Kothari (2006)", "Project Manager", "LNT InfoTech (India Division)"],
    ["Mr. Puneet Pareek (2008)", "Sr. Software Engineer", "Wipro, Pune"],
    ["Mr. Gautam Mehta (2007)", "Managing Director", "IMAD, Bhilwara"],
    ["Mr. Abhishek Maloo (2006)", "Sr. Software Engineer", "Facebook, USA"]
]



// Create the table
var table = createTable(7, 5, content);
var table2 = createTable(7, 5, content2);
var table3 = createTable(7, 5, content3);
var table4 = createTable(7, 5, content4);
var table5 = createTable(7, 5, content5);
var table6 = createTable(7, 5, content6);
var table7 = createTable(7, 5, content7);
var OurPridetable = createTable(23,3, OurPrideContent);

document.getElementById("table-container").appendChild(table);
document.getElementById("table-container2").appendChild(table2);
document.getElementById("table-container3").appendChild(table3);
document.getElementById("table-container4").appendChild(table4);
document.getElementById("table-container5").appendChild(table5);
document.getElementById("table-container6").appendChild(table6);
document.getElementById("table-container7").appendChild(table7);
document.getElementById("Our-Pride-table").appendChild(OurPridetable);
