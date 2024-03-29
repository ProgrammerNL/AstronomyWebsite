var currentDateElement = document.getElementById("currentDate");
var currentDate = new Date();

// Get the year, month, and day components
var year = currentDate.getFullYear();
var month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
var day = String(currentDate.getDate()).padStart(2, '0');

// Concatenate the components to form the date string
var formattedDate = year + '-' + month + '-' + day;

// Set the text content of the paragraph element to the formatted date
currentDateElement.textContent = "Today's date is: " + formattedDate;
var imageUrl = 'image' + year + '-' + month + '-' + day + '.jpg'; // Replace example.com with your image server URL

// Set the image source URL
document.getElementById("currentDateImage").src = imageUrl;

// Set the alt attribute to provide alternative text for the image
document.getElementById("currentDateImage").alt = "Image for " + year + '-' + month + '-' + day;

function readFile() {
    // Get the year, month, and day components
    var year = currentDate.getFullYear();
    var month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
    var day = String(currentDate.getDate()).padStart(2, '0');

    // Concatenate the components to form the date string
    var formattedDate = year + '-' + month + '-' + day;

    // Set the text content of the paragraph element to the formatted date
    currentDateElement.textContent = "Today's date is: " + formattedDate;
    var filePath = 'image' + year + '-' + month + '-' + day + '.txt'; // Replace example.com with your image server URL

    // Path to the specific local text file
    //var filePath = 'image.txt'; // Update with your file path
    
    // Fetch the file using XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // File read successfully
            var fileContent = xhr.responseText;
            // Display file content in the container
            document.getElementById('fileContent').textContent = fileContent;
        }
    };
    xhr.send();
}
