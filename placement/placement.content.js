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

// Example usage:
var content = [
  [
    "Branch",
    "Enrolled students",
    "Eligible students",
    "Placed students",
    "Percentage Placement",
  ],
  ["Textile Technology", 113, 61, 61, 100],
  ["Textile Chemistry", 30, 15, 15, 100],
  ["Information Technology", 52, 43, 23, 53.48],
  ["Electronics and Comm.", 11, 7, 1, 14.28],
  ["Mechanical Engineering", 29, 14, 6, 42.85],
  ["Total", 235, 140, 106, 75.71],
];

var content2 = [
  [
    "Branch",
    "Enrolled students",
    "Eligible students",
    "Placed students",
    "Percentage Placement",
  ],
  ["Textile Technology", 113, 61, 61, 100],
  ["Textile Chemistry", 30, 15, 15, 100],
  ["Information Technology", 52, 43, 23, 53.48],
  ["Electronics and Comm.", 11, 7, 1, 14.28],
  ["Mechanical Engineering", 29, 14, 6, 42.85],
  ["Total", 235, 140, 106, 75.71],
];

var OurPrideContent =[
    [
      "Name",
      "Designation",
      "Organization",
    ],



  
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
var OurPridetable = createTable(23,3, OurPrideContent);

document.getElementById("table-container").appendChild(table);
document.getElementById("table-container2").appendChild(table2);
document.getElementById("Our-Pride-table").appendChild(OurPridetable);
