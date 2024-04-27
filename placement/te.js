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
  return table;
}

// Example usage:
var content = [
  ["Cell 1", "Cell 2", "Cell 3"],
  ["Cell 4", "Cell 5", "Cell 6"],
  ["Cell 7", "Cell 8", "Cell 9"],
];
var table = createTable(3, 3, content);

// Append the table to a container in the HTML document
document.body.appendChild(table);
