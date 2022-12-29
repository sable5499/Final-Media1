const form = document.querySelector("#form");

const people = [];

function addUsers() {

  let f_name = document.getElementById("fname").value;
  let l_name = document.getElementById("lname").value;
  let email_id = document.getElementById("emailId").value;
  let contact = document.getElementById("contactNum").value;
  let msg = document.getElementById("message").value;

  people.push({
    First_Name: f_name,
    Last_Name: l_name,
    Email: email_id,
    Contact: contact,
    Message: msg,
  });

  form.reset();
}

// var modal = document.getElementById("myModal");
// var btn = document.getElementById("send-btn");
// var span = document.getElementsByClassName("close")[0];
//
// // Open modal
//
// btn.onclick = function(){
//   modal.style.display = "block";
// }
//
// // Close modal
//
// btn.onclick = function(){
//   modal.style.display = "none";
// }
//
// // Anywhere outside box
//
// window.onclick = function(event){
//   if (event.target == modal){
//     modal.style.display = "none";
//   }
// }


function getResume() {
  window.open("https://drive.google.com/file/d/15xm_cjZS1J2ahh2XRRTyqTrmJLBVX25x/view?usp=sharing");
}
