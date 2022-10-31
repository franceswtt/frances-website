let icon = document.querySelector(".dark-mode-icon")


function darkMode(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src = "icons/light-icon.svg"
    }
    else{
        icon.src = "icons/moon-icon.svg"
    }
}