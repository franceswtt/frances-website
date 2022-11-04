const icon = document.querySelector(".dark-mode-icon")


function darkMode(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        $(".dark-mode-icon").fadeToggle().fadeIn()
        icon.src = "icons/light-icon.svg"
        
    }
    else{
        $(".dark-mode-icon").fadeToggle().fadeIn()
        icon.src = "icons/moon-icon.svg"
    }
}