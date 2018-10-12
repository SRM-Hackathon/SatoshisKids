function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("main").style.opacity = 0.8;
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.opacity = 1;
}

function buy(){
  document.getElementById("buy").style.display="block";
document.getElementById("sell").style.display="none";
}
function sell(){
  
  document.getElementById("sell").style.display="block";
  document.getElementById("buy").style.display="none";
}

function readURL(input) { 
         var file;
         if (input.files && input.files[0]) {
             var reader = new FileReader(input.files[0]);
     
             reader.onload = function (e) {
                 $('#image').attr('src', e.target.result);
             };
      
         }
        }