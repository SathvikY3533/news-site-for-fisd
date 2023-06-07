//Search Bar Stuff ---------
// var search = document.getElementById("search");

// search.addEventListener("keypress", function(event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     alert("You searched: " + search.value);
//   }
// });
//Search Bar Stuff ---------

const nav = document.getElementById("NavBar");
const navList = document.querySelectorAll('.nav');
const navButton = document.getElementById('navButton');
const mobileNav = document.getElementById('mobileNav');

const homeLink = document.getElementById('home');
const homeCode = document.getElementById('homePage');

const sponsorsLink = document.getElementById('sponsors');
const sponsorsCode = document.getElementById('sponsorsPage');

const teamLink = document.getElementById('team');
const teamCode = document.getElementById('teamPage');

const contactUsLink = document.getElementById('contact');
const contactUsCode = document.getElementById('contactUsPage');


homeLink.addEventListener("click", () => {
    homeCode.style.display = "block";
    sponsorsCode.style.display = "none";
    contactUsCode.style.display = "none";
    teamCode.style.display = "none";

    // nav.style.display = "block";
});

sponsorsLink.addEventListener("click", () => {
    homeCode.style.display = "none";
    sponsorsCode.style.display = "block";
    contactUsCode.style.display = "none";
    teamCode.style.display = "none";
});

contactUsLink.addEventListener("click", () => {
    homeCode.style.display = "none";
    sponsorsCode.style.display = "none";
    contactUsCode.style.display = "block";
    teamCode.style.display = "none";
});

teamLink.addEventListener("click", () => {
    homeCode.style.display = "none";
    sponsorsCode.style.display = "none";
    contactUsCode.style.display = "none";
    teamCode.style.display = "block";
});

window.addEventListener('resize', () => {
    if(window.innerWidth <= 1190) {
        navButton.style.display = "none";
        mobileNav.style.display = "block";
    } else {
        navButton.style.display = "block";
        mobileNav.style.display = "none";
    }
});

// ----------Nav Funtions ******8------------------------------------------------------------------------------------------

function navBarSwitch(x) {
    x.classList.toggle("change");
}

function openNav() {
    document.getElementById("myNav").style.width = "45vw";
    navList.forEach(navList => {
        navList.style.opacity = '100%';
        navList.style.transition = '.6s';
        navList.style.fontSize = '1.25vw';
    });
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    navList.forEach(navList => {
        navList.style.opacity = '0%';
        navList.style.transition = '.4s';
        navList.style.fontSize = '0vw';
    });
}

// ----------------------------------------------------------------------------------------------------



// ------------Contact Us Form Function *****8----------------------------------------------------------------------------------------

function lineHighlight(x) {
    x.style.border = "none";
    x.style.transition = "none";
    x.style.borderBottom = "solid 2px rgb(0,199,0)";
}

function lineNormal(x) {
    x.style.borderBottom = "solid 2px white";
    x.style.transition = "initial";
}

// ----------------------------------------------------------------------------------------------------\

if(window.innerWidth <= 1190) {
    navButton.style.display = "none";
    mobileNav.style.display = "block";
} else {
    navButton.style.display = "block";
    mobileNav.style.display = "none";
}