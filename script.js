var mainImg = document.querySelector("#game-wheel")

function pickAvengers(){
    mainImg.src = "images/avengers.jpeg"
}

function pickDK(){
    mainImg.src = "images/dark-knight.jpg"
}


function digitalAlert() {
    alert("Must have a minimum of 1GB storage space to download.");
}

var num = document.querySelector("#cart")
var cart_items = 0

function addCart(){
    cart_items++
    cart.innerText = cart_items
}





function myFunction() {
    var x = document.getElementById("price1").value;
    document.getElementById("price1").innerHTML = "€" + 13.64;
}

function myFunction1() {
    var x = document.getElementById("price2").value;
    document.getElementById("price2").innerHTML = "€" + 10.91;
}

function myFunction2() {
    var x = document.getElementById("price3").value;
    document.getElementById("price3").innerHTML = "€" + 9.09;
}

function myFunction3() {
    var x = document.getElementById("price4").value;
    document.getElementById("price4").innerHTML = "€" + 8.18;
}

function myFunction4() {
    var x = document.getElementById("price5").value;
    document.getElementById("price5").innerHTML = "€" + 18.19;
}