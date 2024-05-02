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

//Data for card
var bogMinutesData = [
  { title: "1st BOG Minutes", date: "Saturday, 07/07/1990" },
  { title: "2nd BOG Minutes", date: "Saturday, 2/03/1991" },
  { title: "3rd BOG Minutes", date: "Monday, 22/06/1992" },
  { title: "4th BOG Minutes", date: "Thursday, 16/09/1993" },
  { title: "5th BOG Minutes", date: "Monday, 05/09/1994" },
  { title: "6th BOG Minutes", date: "Friday, 28/07/1995" },
  { title: "7th BOG Minutes", date: "Tuesday, 19/12/1995" },
  { title: "8th BOG Minutes", date: "Tuesday, 23/09/1997" },
  { title: "9th BOG Minutes", date: "Thursday, 16/12/1999" },
  { title: "10th BOG Minutes", date: "Friday, 04/01/2002" },
  { title: "11th BOG Minutes", date: "Wednesday, 29/09/2004" },
  { title: "12th BOG Minutes", date: "Monday, 18/07/2011" },
  { title: "13th BOG Minutes", date: "Friday, 20/07/2012" },
  { title: "14th BOG Minutes", date: "Wednesday, 19/06/2013" },
  { title: "15th BOG Minutes", date: "Friday, 17/07/2015" },
  { title: "16th BOG Minutes", date: "Friday, 09/09/2016" },
  { title: "17th BOG Minutes", date: "Thursday, 10/05/2018" },
  { title: "18th BOG Minutes", date: "Saturday, 2/03/2019" },
  { title: "19th BOG Minutes", date: "Monday, 10/06/2019" },
  { title: "20th BOG Minutes", date: "Thursday, 20/06/2019" },
  { title: "21st BOG Minutes", date: "Sunday, 30/06/2019" },
  { title: "22nd BOG Minutes", date: "Friday, 13/09/2019" },
  { title: "23rd BOG Minutes", date: "Wednesday, 18/12/2019" },
  { title: "24th BOG Minutes", date: "Thursday, 14/05/2020" },
  { title: "25th BOG Minutes", date: "Thursday, 25/06/2020" },
  { title: "26th BOG Minutes", date: "Tuesday, 22/09/2020" },
  { title: "27th BOG Minutes", date: "Monday, 04/01/2021" },
  { title: "28th BOG Minutes", date: "Monday, 25/01/2021" },
  { title: "29th BOG Minutes", date: "Wednesday, 23/06/2021" }
];



// Function to create BOG Minute card
function createBogMinuteCard(title, date) {
  var card = document.createElement('div');
  card.classList.add('card');

  var pdfIcon = document.createElement('div');
  pdfIcon.innerHTML = '<i class="fas fa-file-pdf pdf-icon"></i>';
  card.appendChild(pdfIcon);

  var titleDiv = document.createElement('div');
  titleDiv.classList.add('bold');
  titleDiv.textContent = title;
  card.appendChild(titleDiv);

  var dateDiv = document.createElement('div');
  dateDiv.textContent = date;
  card.appendChild(dateDiv);

  var downloadLink = document.createElement('a');
  downloadLink.href = '#';
  downloadLink.classList.add('button');
  downloadLink.target = '_blank';
  downloadLink.textContent = 'Download';
  card.appendChild(downloadLink);

  return card;
}

// Get the container element
var bogContainer = document.getElementById('bog-minutes-container');

// Loop through the data and create cards
bogMinutesData.forEach(function(item) {
  var card = createBogMinuteCard(item.title, item.date);
  bogContainer.appendChild(card);
});

happen('no');

