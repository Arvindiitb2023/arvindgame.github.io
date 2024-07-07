function Home(){
    // document.getElementById("home").scrollIntoView({ behavior: "smooth" });

    var x = document.getElementById("home");
    var x1 = document.getElementById("Gameo");
    var x2= document.getElementById("get");
    var x3= document.getElementById("title");
    var x4 = document.getElementById("video");

    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    if (x.style.display === "none") {
      x.style.display = "block";
    } 

}
function GameO(){
    // document.getElementById("Gameo").scrollIntoView({ behavior: "smooth" });
    var x = document.getElementById("home");
    var x1 = document.getElementById("Gameo");
    var x2= document.getElementById("get");
    var x3= document.getElementById("title");
    var x4 = document.getElementById("video");

    x.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    if (x1.style.display === "none") {
      x1.style.display = "block";
    } 
}

function Gets(){
    // document.getElementById("get").scrollIntoView({ behavior: "smooth" });
    var x = document.getElementById("home");
    var x1 = document.getElementById("Gameo");
    var x2= document.getElementById("get");
    var x3= document.getElementById("title");
    var x4 = document.getElementById("video");

    x1.style.display = "none";
    x.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    if (x2.style.display === "none") {
      x2.style.display = "block";
    } 

}
function myFunction() {
    var x = document.getElementById("home");
    var x1 = document.getElementById("Gameo");
    var x2= document.getElementById("get");
    var x3= document.getElementById("title");
    var x4 = document.getElementById("video");

    x1.style.display = "none";
    x2.style.display = "none";
    x.style.display = "none";
    x4.style.display = "none";
    if (x3.style.display === "none") {
      x3.style.display = "block";
    } 
  }
  function BM(){
    var x = document.getElementById("home");
    var x1 = document.getElementById("Gameo");
    var x2= document.getElementById("get");
    var x3= document.getElementById("title");
    var x4 = document.getElementById("video");

    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x.style.display = "none";
    if (x4.style.display === "none") {
      x4.style.display = "block";
    } 
  }
  function correct(){
      document.getElementById("ans1").innerHTML = "correct"
  }
  function incorrect(){
    document.getElementById("ans1").innerHTML = "incorrect"
}
function correct1(){
  document.getElementById("ans2").innerHTML = "correct"
}
function incorrect1(){
document.getElementById("ans2").innerHTML = "incorrect"
}
function correct2(){
  document.getElementById("ans3").innerHTML = "correct"
}
function incorrect2(){
document.getElementById("ans3").innerHTML = "incorrect"
}