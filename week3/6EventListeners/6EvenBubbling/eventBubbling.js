// Select all elements
const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Add event listeners
grandparent.addEventListener('click', function(event) {
    console.log('Grandparent clicked!');
});

parent.addEventListener('click', function(event) {
    console.log('Parent clicked!');
});

child.addEventListener('click', function(event) {
    console.log('Child clicked!');
});
