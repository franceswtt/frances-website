let mySidebar = document.getElementById("mySidebar")


function openMenu() {
  if(mySidebar.style.maxWidth == "0px"){
    mySidebar.style.maxWidth = "130px"
  }
  else{
    mySidebar.style.maxWidth = "0px"
  }
}