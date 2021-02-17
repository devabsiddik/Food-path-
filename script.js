//scroll to top

const scrolltp = document.querySelector('#scrolltp');
scrolltp.addEventListener('click', function () {
    window.scrollTo({
        top:'0',
        left:'0',
        behavior:'smooth'
    })
});

//preloader

var loader = document.getElementById('preloader');

function myloader() {
    loader.style.display = "none";
 }

// responsive nabvar

 document.querySelector('.menu_btn').addEventListener('click', function () {
    document.querySelector('.nav_bar').classList.toggle('change')
})