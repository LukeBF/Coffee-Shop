const toggleBtn = document.getElementsByClassName('toggle-btn')[0];

const nav = document.getElementsByClassName('navbar-links')[0]

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
})


