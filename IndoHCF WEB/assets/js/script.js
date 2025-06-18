document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Optional: Close nav menu when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });

    // Example for a simple "scroll to top" button (if needed)
    // window.onscroll = function() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         // Show button
    //     } else {
    //         // Hide button
    //     }
    // };
});