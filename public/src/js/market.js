
var messagesRef = firebase.database().ref('market');

messagesRef.on("child_added", snap=>{

    var name = snap.child("src").val();
    document.getElementById('image').src=name;
  })

  
// var storageref = firebase.storage().ref();
// var file;
// function submitForm(){
//   var itemname = getInputVal('iteamname');
//   var itemnumber = getInputVal('itemnumber');
//   var description = getInputVal('exampleFormControlTextarea1');

//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     itemname: itemname,
//     itemnumber:itemnumber,
//     description:description
//   });
//   document.getElementById('form').reset();
//   return false;
// }
//   function getInputVal(id){
//     return document.getElementById(id).value;
//   }
 
