function toggleDropdown(event) {
    const button = event.target;
    const dropdown = button.closest('.dropdown');
    dropdown.classList.toggle('visible');
    
    // Add an event listener to close the dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('visible');
        }
    }, { once: true });
}