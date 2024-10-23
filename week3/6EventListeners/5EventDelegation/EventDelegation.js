// Event delegation is a technique where you add a single event listener to a parent element to
//  manage events on multiple child elements.
//  This is useful when you have a lot of elements that need the same event handler, like a list of items.




// Select the parent element (a list)
const list = document.querySelector('ul');

// Add event listener to the parent
list.addEventListener('click', function(event) {
    // Check if the clicked element is an <li> tag
    if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});



// Explanation: Instead of adding a click event listener to each <li>, we add it to the <ul>.
//  The event bubbles up from the clicked <li> to the <ul>, and we can handle it there.