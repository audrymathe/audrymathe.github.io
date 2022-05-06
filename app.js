// Firebase Object

const firebaseConfig = {
  apiKey: "AIzaSyA9bDGza7xqjx0xmWWWt3YKuRPxntCOOq4",
  authDomain: "lillydale-d4a6e.firebaseapp.com",
  projectId: "lillydale-d4a6e",
  storageBucket: "lillydale-d4a6e.appspot.com",
  messagingSenderId: "1068025815029",
  appId: "1:1068025815029:web:e7e652707b8c5cb71d0abc"
};


//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("fomData");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let phoneNumber = document.getElementById("phone").value;
  let emailAdress = document.getElementById("email").value;
  let feedback = document.getElementById("feedback").value;

  firestore
    .collection("dataForm")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().fname;
        if (firstName === fn) {
          console.log("Already Exists");
        }

        // console.log("data", doc.data().fname);
      });
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      fname: firstName,
      lname: lastName,
      phone: phoneNumber,
      email: emailAdress,
      feedback: feedback,
    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm()
});
