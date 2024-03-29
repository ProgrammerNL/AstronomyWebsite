// Function to fetch and display images
function displayImages() {
    // Path to the folder containing the images
    var folderPath = 'img'; // Update with your folder path

    // Fetch the list of image files from the server
    fetch(folderPath)
    .then(response => response.text())
    .then(data => {
        // Parse the HTML content to extract image file names
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(data, 'text/html');
        var imageNames = Array.from(htmlDoc.querySelectorAll('a'))
            .map(a => a.href.split('/').pop())
            .filter(name => name.toLowerCase().endsWith('.jpg'));

        // Display images and add download option
        var imageContainer = document.getElementById('imageContainer');
        imageNames.forEach(name => {
            var imgElement = document.createElement('img');
            imgElement.src = folderPath + '/' + name;
            imgElement.style.maxWidth = '400px'; // Set maximum width
            imgElement.style.maxHeight = '300px'; // Set maximum height

            // Create anchor element for download
            var downloadLink = document.createElement('a');
            downloadLink.href = folderPath + '/' + name;
            downloadLink.download = name;
            downloadLink.textContent = 'Download'; // Text for the download link
            downloadLink.classList.add('download-link'); // Add CSS class for styling

            // Append image and download link to container
            imageContainer.appendChild(imgElement);
            imageContainer.appendChild(downloadLink);
        });
    })
    .catch(error => console.error('Error fetching images:', error));
}

// Call the function to display images when the page loads
window.onload = displayImages;
