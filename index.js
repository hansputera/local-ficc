// Theme Change

const button_ = document.getElementById("thisistext");

function doDark() {
    // Awal will got dark theme.
    
    button_.innerText = `Change Theme (Light)`;

    // Header 01
    document.querySelectorAll("h1")[0].style.color = "#ffffff";
    document.getElementById("judul").style.color = "#ffffff";
    // Paragraph
    button_.style.color = "#ffffff";
    document.querySelectorAll("p")[0].style.color = "#ffffff";
    // Backgroundersize
    document.getElementById("tools").style.backgroundColor = "#000000";
    document.getElementById("awal").style.backgroundColor = "#000000";
    document.getElementById("nav").style.backgroundColor = "grey";

    // Navbar setup

    const head = document.getElementById("head").style;
    head.color = "#ffffff";

    for (let i_li = 0; i_li < document.querySelectorAll("li"); i_li++) {
        document.querySelectorAll("li")[i_li].id = (i_li+1);
        document.getElementById(`${i_li+1}`).style.color = "#ffffff";
    }
};

function doLight() {
    // Awal will got default theme.
    button_.innerText = `Change Theme (Dark)`;
    // Header 01
    document.getElementById("judul").style.color = "#000000";
    document.querySelectorAll("h1")[0].style.color = "#000000";
    // Paragraph
    document.querySelectorAll("p")[0].style.color = "#000000";
    button_.style.color = "#000000";
    // Backgroundersize
    document.getElementById("tools").style.backgroundColor = "whitesmoke";
    document.getElementById("awal").style.backgroundColor = "rgb(13, 185, 134)";
    document.getElementById("nav").style.backgroundColor = "#ffffff";

    // Navbar setup

    const head = document.getElementById("head").style;
    head.color = "#017fb5";

    for (let i_li = 0; i_li < document.querySelectorAll("li"); i_li++) {
        document.querySelectorAll("li")[i_li].id = (i_li+1);
        document.getElementById(`${i_li+1}`).style.color = "#000000";
    }
}

const themeList = ["dark", "light"];

const theme = window.localStorage.getItem("theme");
if (!theme) window.localStorage.setItem("theme", "light");

if (themeList.indexOf(theme.toLowerCase()) === -1) {
    window.localStorage.setItem("theme", "light");
    doLight();
} else if (themeList.indexOf(theme.toLowerCase()) === 0) {
    doDark();
} else if (themeList.indexOf(theme.toLowerCase()) === 1) {
    doLight();
}

function changeTheme() {
const themeList = ["dark", "light"];
const theme = window.localStorage.getItem("theme");

if (themeList.indexOf(theme.toLowerCase()) === -1) {
    window.localStorage.setItem("theme", "light");
    doLight();
} else if (themeList.indexOf(theme.toLowerCase()) === 0) {
    doLight();
    window.localStorage.setItem("theme", "light");
} else if (themeList.indexOf(theme.toLowerCase()) === 1) {
    doDark();
    window.localStorage.setItem("theme", "dark");
}
}

// Listener

function tools() {
    window.scrollTo(361, 662);
}


window.addEventListener("offline", (ev) => {
    ev.preventDefault();
    console.log("[NETWORK]: Offline Mode.");
});

window.addEventListener("online", (ev) => {
    ev.preventDefault();
    console.log("[NETWORK]: Online Mode.");
});

window.addEventListener("mouseup", (ev) => {
    ev.preventDefault();
    console.log(ev.detail)
});