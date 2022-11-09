//contact form

const name = document.getElementById("yourName")
const email = document.getElementById("yourEmail")
const message = document.getElementById("yourMessage")

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "franceswtt@gmail.com",
        Password : "284F20D962ACE4B0539BAF574686BFDBEEBD",
        To : 'franceswtt@gmail.com',
        From : email.value,
        Subject : "New message from my website",
        Body : `Name: ${name} 
        Email: ${email}
        Body: ${message}`
    }).then(
      message => alert("Your message is well received.")
    );
}

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
  }, 1500)
  
})




