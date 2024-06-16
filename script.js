//your JS code here. If required.
// const id= document.getElementById("line")
let deg = 0;
setInterval(function() {
    document.getElementById('line').style.transform = "rotate(" + deg + "deg)";
    deg += 2;
}, 20);