const toggle = document.querySelector("#toggle");
const navbar = document.querySelector("#navbar");
const header = document.querySelector("#header");

document.onclick = function (e) {
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
        console.log(toggle);
        console.log(navbar);
    }
}
toggle.onclick = function () {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}
console.log(toggle);