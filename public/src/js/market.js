
var messagesRef = firebase.database().ref('market');

// messagesRef.on("child_added", snap=>{

//     var name = snap.child("src").val();
//     document.getElementById('image').src=name;
//   })
var storageref = firebase.storage().ref();
var file;
function submitForm(){
  var itemname = getInputVal('iteamname');
  var itemnumber = getInputVal('itemnumber');
  var description = getInputVal('exampleFormControlTextarea1');

  console.log(" ");
  console.log(itemname+" "+itemnumber+" "+description);
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    itemname: itemname,
    itemnumber:itemnumber,
    description:description
  });
  document.getElementById('form').reset();
  return false;
}
  function getInputVal(id){
    return document.getElementById(id).value;
  }

//   function readURL(input) { 
//     var file;
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
  
//         reader.onload = function (e) {
//             $('#image').attr('src', e.target.result);
//                 file = e.target.files[0];
//                 var storageRef = firebase.storage().ref().child('chat_photos');
//                 // Get a reference to store file at photos/<FILENAME>.jpg
//                 var photoRef = storageRef.child("sdsds");
//                 // Upload file to Firebase Storage
//                 var uploadTask = photoRef.put(file);
//         };
  
//     }
//     // Get a reference to the location where we'll store our photos

//     // uploadTask.on('state_changed', null, null, function() {
//     //   // When the image has successfully uploaded, we get its download URL
//     //   var downloadUrl = uploadTask.snapshot.downloadURL;
//     //   // Set the download URL to the message box, so that the user can send it to the database
//     //   textInput.value = downloadUrl;
//     // });
//   }


 