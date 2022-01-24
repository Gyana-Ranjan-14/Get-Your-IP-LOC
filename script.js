// we use an api and it return json

// js for get ip adress
const getip = document.querySelector(".btn2");
const ipdisplay = document.querySelector(".showIp");
const versiondisplay = document.querySelector(".showversion");
const timezonedisplay = document.querySelector(".showtimezone");
const orgdisplay = document.querySelector(".showorg");
const currencydisplay = document.querySelector(".currencydisplay");
getip.addEventListener("click", () => {
    axios.get("https://ipapi.co/json/").then(Response => {
        ipdisplay.textContent = `Your Ip : ${Response.data.ip}`;
        versiondisplay.textContent = `version : ${Response.data.version}`;
        timezonedisplay.textContent = `Timezone : ${Response.data.timezone}`;
        orgdisplay.textContent = `Your Org : ${Response.data.org}`;
        currencydisplay.textContent = `Currency : ${Response.data.currency}`;
    })
});


// location btn script
const getloc = document.querySelector(".btn1");
const countrydisplay = document.querySelector(".showcountry");
const capitaldisplay = document.querySelector(".showcapital");
const regiondisplay = document.querySelector(".showregion");
const locdisplay = document.querySelector(".showloc");
const postaldisplay = document.querySelector(".showpostal");
getloc.addEventListener("click", () => {
    axios.get("https://ipapi.co/json/").then(Response => {
        countrydisplay.textContent = `Country : ${Response.data.city}`
        capitaldisplay.textContent = `Capital : ${Response.data.country_capital}`
        regiondisplay.textContent = `State : ${Response.data.region}`
        locdisplay.textContent = `City : ${Response.data.city}`
        postaldisplay.textContent = `Postal : ${Response.data.postal}`
    })
});

// dark mode css
var darkbtn = document.getElementById("dark-btn");

function settingsmenutoggle() {
    settingsmenu.classList.toggle("setting-menu-height");
}

// when we click it become black again click become white
darkbtn.onclick = function() {
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    // when people click update local storage
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// to fix light or dark mode use local storage

// if user make it lightmode 
if (localStorage.getItem("theme") == "light") {
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
// if user make it dark mode
else if (localStorage.getItem("theme") == "dark") {
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
// when people visit first time
else {
    localStorage.setItem("theme", "light");
}