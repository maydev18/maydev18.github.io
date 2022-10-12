function changecolor() {
    let container = document.getElementById("mycontainer");
    let mode = document.getElementById("modes");
    let socials = document.getElementsByClassName("social-icon");
    let details = document.getElementsByClassName("details");
    let navbar = document.getElementById("mynavbar");
    let icon = document.getElementById("icon");
    let card = document.querySelectorAll('.mycard');
    if (mode.className == "light-mode") {
        mode.className = "dark-mode";
        mode.innerHTML = "<i class='bx bxs-moon' id = 'icon' onclick='changecolor()' style='color: #0f0c27;' ></i>"
        container.style.backgroundColor = "white";
        navbar.classList.remove("navbar-dark");
        navbar.style.backgroundColor = "#e3f2fd";
        container.style.color = "black";
        for (i = 0; i < 3; i++) {
            socials[i].style.color = "black";
        }
        for (i = 0; i < details.length; i++) {
            details[i].style.backgroundColor = "#ebebf2";
        }
        for(i = 0 ; i<card.length ; i++){
            card[i].style.backgroundColor = "#ebebf2"
            card[i].style.color = "black"
        }
    }
    else {
        mode.className = "light-mode";
        mode.innerHTML = "<i class='bx bx-moon' id = 'icon' onclick='changecolor()' style='color: white;'></i>"
        navbar.style.backgroundColor = "#0f0c27";
        navbar.classList.add("navbar-dark")
        icon.style.color = "pink";
        container.style.backgroundColor = "#0f0c27";
        container.style.color = "white";
        for (i = 0; i < 3; i++) {
            socials[i].style.color = "white";
        }
        for (i = 0; i < details.length; i++) {
            details[i].style.backgroundColor = "white";
        }
        for(i = 0 ; i<card.length ; i++){
            card[i].style.backgroundColor = "#033a80"
            card[i].style.color = "white"
        }
    }
}