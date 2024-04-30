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

// Create the table
var table = createTable(7, 5, content);
var table2 = createTable(7, 5, content2);
document.getElementById("table-container").appendChild(table);
document.getElementById("table-container2").appendChild(table2);
