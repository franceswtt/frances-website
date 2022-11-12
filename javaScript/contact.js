//contact info tabs

const tabs = document.querySelector(".contact-info-tabs")
const tabBtns = document.querySelectorAll(".tab-btn")
const contactInfo = document.querySelectorAll(".contact-info")

tabs.addEventListener("click", (e) => {
  const selectedId = e.target.dataset.id

  if(selectedId) {
  tabBtns.forEach((btn) => {
    btn.classList.remove("active")
  })
  e.target.classList.add("active")


  contactInfo.forEach((info) => {
    info.classList.remove("active")
  })
  const selectedInfo = document.getElementById(selectedId)

  selectedInfo.classList.add("active")
  }
})


//copy contact info

const copyBtn = document.querySelector(".copy-btn")
const copyAlert = document.querySelector(".copy-alert")
copyBtn.addEventListener("click", () => {
  contactInfo.forEach((i) => {
    if (i.classList.contains("active")){
      navigator.clipboard.writeText(i.textContent)
      copyAlert.classList.toggle("active")
    }
  })
  setTimeout(() => {
    copyAlert.classList.toggle("active")
  }, 800)
  
})
