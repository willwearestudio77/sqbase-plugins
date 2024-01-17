document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded and DOM content loaded.');
    // Find all elements with the class slide-down-button
    var slideDownButtons = document.querySelectorAll('.slide-down-button');
    
    // Iterate through each slide-down-button
    slideDownButtons.forEach(function (button) {
        // Get the closest parent element with the class page-section
        var pageSection = button.closest('.page-section');
        
        // Get the next sibling element with the class page-section
        var sectionBelow = pageSection.nextElementSibling;

        // Hide the section below
        if (sectionBelow) {
            sectionBelow.classList.add('close');
          pageSection.classList.add('toggle-section')
        }
    });
});

function toggleSection(button) {
    console.log('button fired');
    // Get the closest parent element with the class page-section
    var pageSection = button.closest('.page-section');

    // Get the next sibling element with the class page-section
    var sectionBelow = pageSection.nextElementSibling;

    // Toggle the display property
    if (sectionBelow){
        sectionBelow.classList.toggle('close');
          sectionBelow.classList.toggle('open');
    } 
}
