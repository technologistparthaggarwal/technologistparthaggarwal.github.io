// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyBJU-AI-b4zLh2iF0LswRyx__CtWbwNwBE",
//     authDomain: "ieee-a8d11.firebaseapp.com",
//     databaseURL: "https://ieee-a8d11.firebaseio.com",
//     projectId: "ieee-a8d11",
//     storageBucket: "ieee-a8d11.appspot.com",
//     messagingSenderId: "12420315224",
//     appId: "1:12420315224:web:6b82a40f55ad4c8998f22d"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// var messagesRef = firebase.database().ref('Register');

// document.getElementById("submitform").addEventListener("submit", submitform);

// function submitform(e) {
//     e.preventDefault();

//     var event = getInputVal("event");
//     var name1 = getInputVal("name1");
//     var name2 = getInputVal("name2");
//     var name4 = getInputVal("name3");
//     var name4 = getInputVal("name4");

//     var branch1 = getInputVal("branch1");
//     var branch2 = getInputVal("branch2");
//     var branch3 = getInputVal("branch3");
//     var branch4 = getInputVal("branch4");

//     var year1 = getInputVal("year1");
//     var year2 = getInputVal("year2");
//     var year3 = getInputVal("year3");
//     var year4 = getInputVal("year4");

//     var college1 = getInputVal("college1");
//     var college2 = getInputVal("college2");
//     var college3 = getInputVal("college3");
//     var college4 = getInputVal("college4");

//     var email1 = getInputVal("email1");
//     var email2 = getInputVal("email2");
//     var email3 = getInputVal("email3");
//     var email4 = getInputVal("email4");

//     var num1 = getInputVal("num1");
//     var num2 = getInputVal("num2");
//     var num3 = getInputVal("num3");
//     var num4 = getInputVal("num4");

//     var txn_id = getInputVal("txn_id");

//     saveMessage(event,name1, name2, name3, name4, year1, year2, year3, year4, college1, college2, college3, college4, email1, email2, email3, email4, num1, num2, num3, num4, branch1, branch2, branch3, branch4, txn_id);

//     document.getElementById("mssg").style.display = "block";
// }

// function getInputVal(id) {
//     return document.getElementById(id).value;
// }


// function saveMessage(event,name1, name2, name3, name4, year1, year2, year3, year4, college1, college2, college3, college4, email1, email2, email3, email4, num1, num2, num3, num4,branch1, branch2, branch3, branch4, txn_id, ) {
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//         event: event,
//         name1: name1,
//         name2: name2,
//         name3: name3,
//         name4: name4,
//         branch1: branch1,
//         branch2: branch2,
//         branch3: branch3,
//         branch4: branch4,
//         year1: year1,
//         year2: year2,
//         year3: year3,
//         year4: year4,
//         college1: college1,
//         college2: college2,
//         college3: college3,
//         college4: college4,
//         email1: email1,
//         email2: email2,
//         email3: email3,
//         email4: email4,
//         num1: num1,
//         num2: num2,
//         num3: num3,
//         num4: num4,
//         txn_id: txn_id,

//     });
// }



// function certificate_gen(){
//  var x =   document.getElementById("certi_input").innerText
//  console.log(x)
//  let xttp = new XMLHttpRequest();
// }


// function onclickfunction(){
// 	let email = document.getElementById('certi_input').value;
// 	window.open('https://ieeecerti.herokuapp.com/user_verification/?email='+email)
// }