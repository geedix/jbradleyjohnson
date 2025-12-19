document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
    console.log("toggled menu "+document.querySelector('.nav-links').classList);
});
