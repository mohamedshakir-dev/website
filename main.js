function enter (){
  window.location.href = "animation.html";
}
function clear(){
  if (document.getElementById("username").value === "admin" && document.getElementById("password").value === "password"){
    window.location.href = "frontpage.html";
  }else{
    document.getElementById("form").reset();
  }
 //  var x = document.getElementsByClassName("alert");
 //  console.log(x);
 // if (x.style.display === "none") {
 //   x.style.display = "block";
 // } else {
 //   x.style.display = "none";
 // }
}
