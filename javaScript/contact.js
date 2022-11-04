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