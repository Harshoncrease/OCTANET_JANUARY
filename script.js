const searchInput = document.querySelector('.search-input');
const dropdown = document.getElementById('dropdown');

// This function will run when you type in the search box
searchInput.addEventListener('input', fetchAttractions);

// Fetch data from your MongoDB database (replace with your actual API)
function fetchAttractions() {
    // Example fetch URL; adjust according to your setup
    fetch('http://localhost:3000/api/attractions') // Update this URL to your API endpoint
        .then(response => response.json())
        .then(data => {
            dropdown.innerHTML = ''; // Clear existing items
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'dropdown-item';
                div.textContent = item.name; // Name of the attraction
                dropdown.appendChild(div);
            });
            dropdown.style.display = data.length ? 'block' : 'none'; // Show if there are items
        })
        .catch(err => console.error(err));
}

// Handle clicks on dropdown items
dropdown.addEventListener('click', (event) => {
    if (event.target.classList.contains('dropdown-item')) {
        const selectedItem = event.target.textContent; // Get the name clicked
        if (selectedItem === 'Maharashtra') { // If it's Maharashtra
            window.location.href = 'maharashtra.html'; // Go to the Maharashtra page
        } else {
            searchInput.value = selectedItem; // Fill the input with selected name
            dropdown.style.display = 'none'; // Hide dropdown
        }
    }
});

// Hide dropdown on input blur
searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        dropdown.style.display = 'none';
    }, 200);
});
