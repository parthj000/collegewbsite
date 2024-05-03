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

// Past Pricipal Content:
var PastPricipalsContent = [
    
    ["S.No.", "Name", "Tenure"],
    [1, "Sh. S. P. Kulshrestha", "23/02/1983 to 29/08/1989"],
    [2, "Sh. S. K. Sharma", "30/08/1989 to 03/09/2001"],
    [3, "Sh. Vinod Kumar Gupta", "04/09/2001 to 17/09/2001"],
    [4, "Dr. S. K. Sharma", "18/09/2001 to 10/10/2001"],
    [5, "Sh. Vinod Kumar Gupta", "11/10/2001 to 28/02/2007"],
    [6, "Dr. S. G. Modani (Additional Charge)", "01/03/2007 to 13/03/2007"],
    [7, "Prof. Dr. G. K. Sharma", "14/03/2007 to 14/07/2009"],
    [8, "Prof. M. C. Govil (Additional charge)", "15/07/2009 to 08/07/2010"],
    [9, "Prof. Dr. G. K. Tyagi", "09/07/2010 to 04/03/2014"],
    [10, "Dr. D. N. Vyas", "05/03/2014 to 07/03/2015"],
    [11, "Dr. A. K. Chaturvedi", "08/03/2015 to 09/03/2019"],
    [12, "Sh. Shallender Sharma", "10/03/2019 to 31/07/2019"],
    [13, "Dr. Rajiv Kumar Chaudhary", "01/08/2019 to 11/06/2020"],
    [14, "Dr. Dhirendra Kumar Sharma", "11/06/2020 to 12/01/2024"],
    [15, "Dr. D. N. Vyas", "12/01/2024 to till date"]
    
    
];


// Create the table
var PastPricipalsTable = createTable(16, 3, PastPricipalsContent);


document.getElementById("Past-Principals-table").appendChild(PastPricipalsTable);








happen('no');

