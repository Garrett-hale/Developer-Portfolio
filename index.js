function linkedIn() {
  window.location.href = 'https://www.linkedin.com/in/garrett-hale-73a0a384/';
}

function gitHub() {
  window.location.href = 'https://github.com/Garrett-hale';
}

function scrollToProjects() {
  document.getElementById('projects').scrollIntoView();
}


function sendEmail() {
  Email.send({
    Host : "smtp.yahoo.com",
    Username : "garrett.hale@yahoo.com",
    Password : "ujarixgznsfjczar",
    To : 'garrett.hale@yahoo.com',
    From : "garrett.hale@yahoo.com",
    Subject : "New portfolio message!",
    Body : "And this is the body! 3333"
  }).then(
    message => alert(message)
  );
}

//document.querySelector(".contact-form").addEventListener()

//function submitForm() {
  //e.preventDefault();

    //let name = document.querySelector(".name").value;
    //let email = document.querySelector(".email").value;
    //let message = document.querySelector(".message").value;

    //ocument.querySelector(".contact-form").reset();

    //sendEmail(name, email, message);
//}

//function sendEmail(name, email, message) {
  //email.send({
    //Host: "smtp.gmail.com",
    //Username: "Garrett.hale@yahoo.com",
  //  Password: "ujarixgznsfjczar",
  //  To: "Garrett.hale@yahoo.com",
  //  From: "Garrett.hale@yahoo.com",
  //  Subject: `${name} sent you a message`,
  //  Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
  //  Subject: `${name} sent you a message`,
  //  Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,

//  }).then(
  //  message => alert("mail sent successfully")

//);

//}
