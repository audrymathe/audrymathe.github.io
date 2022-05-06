const firebaseConfig = {
    apiKey: "AIzaSyDlplORfdpa2q7EU4kd5TNRLOga4fNbeh4",
    authDomain: "stay-free-pestcontrol.firebaseapp.com",
    databaseURL: "https://stay-free-pestcontrol-default-rtdb.firebaseio.com",
    projectId: "stay-free-pestcontrol",
    storageBucket: "stay-free-pestcontrol.appspot.com",
    messagingSenderId: "692536584456",
    appId: "1:692536584456:web:04d855951cc189678064bd"
  };

  firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contact-form");


document.getElementById("contact-form").addEventListener("submit", submitForm);


function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var phone = getElementVal("phone");
    var subject = getElementVal("subject");
    var message = getElementVal("message");
    
    
    saveMessages(name, email, phone ,subject,message);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contact-form").reset();
  }
  
  const saveMessages = (name, email, phone,subject,message) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      email: email,
      phone: phone,
      subject:subject,
      message:message,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };