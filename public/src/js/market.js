
var messagesRef = firebase.database().ref('image');

messagesRef.on("child_added", snap=>{

    var name = snap.child("src").val();
    document.getElementById('image').src=name;
  })
  