// open & close sidebar on mobile only

const mySidebar = document.getElementById("mySidebar")
const mainDiv = document.querySelector("main")

function openMenu(){
  mySidebar.classList.toggle("show-nav")
  document.addEventListener("click", (e) => {
    if(mainDiv.contains(e.target)){
      mySidebar.classList.remove("show-nav")
    }
  })
}

//navigate to the selected container

const sidebarLinks = document.querySelectorAll(".sidebar-links")
const header = document.querySelector("header")

sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()

    const selectedId = e.currentTarget.getAttribute("href")
    const selectedContainer = document.querySelector(selectedId)
    const headerHeight = header.getBoundingClientRect().height

    let position = selectedContainer.offsetTop - headerHeight

    window.scrollTo({
      left: 0,
      top: position,
    })
    // close the sidebar on mobile only
    mySidebar.classList.toggle("show-nav")


  })

})
