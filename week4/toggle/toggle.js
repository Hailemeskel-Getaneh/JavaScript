let toggleBtn = document.getElementById('btn')
let text = document.getElementById('text')

toggleBtn.addEventListener('click', () => {

    if(text.style.display === 'none'){
        text.style.display = 'block';
        toggleBtn.innerText = 'Hide'

    }
    else{
        text.style.display = 'none'
        toggleBtn.innerText = 'Show'

    }
})

// The following is used to show how to toggle a class using JS

let ToggleThemeBtn = document.getElementById('toggleThemeBtn')
let box = document.getElementById('box')

ToggleThemeBtn.addEventListener('click', function (){
    box.classList.toggle('dark-theme')
})