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
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      var temp;
      reader.onload = function (e) {
          $('#image')
              .attr('src', e.target.result);
              console.log(e.target.result);
              var temp= localStorage.setItem( 'image', e.target.result);
                  
      };

      reader.readAsDataURL(input.files[0]);
      console.log(reader.readAsDataURL(input.files[0]));
  }
}
var submit1= document.getElementById("submit1");
  console.log("hiiiii");
   submit1.addEventListener("click", function(){
    
    var buy= document.getElementById("buy")
     var divs= document.createElement("div");
     divs.setAttribute('class', 'containers');
     buy.appendChild(divs);
     var divimg= document.createElement("div");
     divimg.setAttribute('class','images');
     var img= document.createElement("img");
     var stor=localStorage.getItem('image');
     
     img.setAttribute('src', stor);
     
     divs.appendChild(divimg);
     divimg.appendChild(img);

     var divpro= document.createElement("div");
     divpro.setAttribute('class', 'product'); 
     divs.appendChild(divpro);
     var name= document.createElement("h4");
     name.innerHTML="hi";
     var desc= document.createElement("p");
     desc.setAttribute('class', 'desc');
     desc.innerHTML="hi22";
     var cost= document.createElement("h5");
     cost.innerHTML="hi23";
     var button= document.createElement("button");
     button.setAttribute('class', 'add');
     button.innerHTML="Add to Cart";
     divpro.appendChild(name);
     divpro.appendChild(desc);
     divpro.appendChild(cost);
     divpro.appendChild(button);

   })
