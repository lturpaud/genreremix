
var min = [0, 0, 0, 0, 0, 0, 0,00,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var watuse = [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var globe;

var i = 0;


function increaseamount1() {
    min[0] += 1; 
    document.getElementById("increaseamount1").previousElementSibling.innerHTML = min[0];
    watuse[0] = min[0] * 136/7;
}

var sHowertYpe = 0;

//var elementList = document.querySelectorAll('.pgs');

window.onload = function (){

document.getElementById("pg2").style.display = "block";    

function getShowerType(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}
var ul = document.getElementById('ShowerType');
ul.addEventListener("click", function(event) {
    var target = getShowerType(event);
    if (target.innerHTML == "yes") {
        sHowertYpe = 1;
        target.style.backgroundColor = "#2E86C1";
        
    }
    else {
        sHowertYpe = 0;
        target.style.backgroundColor = "#2E86C1";
    }})
console.log(sHowertYpe);
var utl = document.getElementById('toitype');
utl.addEventListener("click", function(event) {
    var target = getShowerType(event);
    if (target.innerHTML == "yes") {
        toitype = 1;
        target.style.backgroundColor = "#2E86C1";
        
    }
    else {
        toitype = 0;
        target.style.backgroundColor = "#2E86C1";
    }})
    var ufl = document.getElementById('ftype');
    ufl.addEventListener("click", function(event) {
        var target = getShowerType(event);
        if (target.innerHTML == "yes") {
            ftype = 1;
            target.style.backgroundColor = "#2E86C1";
            
        }
        else {
            ftype = 0;
            target.style.backgroundColor = "#2E86C1";
        }})
;
var ull = document.getElementById('ltype');
    ull.addEventListener("click", function(event) {
        var target = getShowerType(event);
        if (target.innerHTML == "yes") {
            ltype = 1;
            target.style.backgroundColor = "#2E86C1";
            
        }
        else {
            ltype = 0;
            target.style.backgroundColor = "#2E86C1";
        }})
};

function next(){
    i += 1;
    console.log(i);
    watuse[1] = min[2] * min[1];
    document.querySelectorAll(".pgs")[i].style.display = "block";
    document.querySelectorAll(".pgs")[i - 1].style.display = "none";
    var sum = watuse.reduce(function(a, b){
        return a + b;
    }, 0);
    document.getElementById("results").innerHTML= sum;
}

function increaseamount2() {
    min[1] += 1;
    document.getElementById("increaseamount2").previousElementSibling.innerHTML = min[1];
    if (sHowertYpe == 0) {
        watuse[1] = min[1] * 8/7;
    }
    else if (sHowertYpe == 1){
        watuse[1] = min[1] * 19/7;
    }
    console.log(watuse[1]);
}

function increaseamount3() {
    min[2] += 1;
    document.getElementById("increaseamount3").previousElementSibling.innerHTML = min[2];
    console.log(document.getElementById("increaseamount2").previousElementSibling);
}

function increaseamount4() {
    min[3] += 1;
    document.getElementById("increaseamount4").previousElementSibling.innerHTML = min[3];
    if (toitype == 0) {
        watuse[3] = min[3] * 3;
    }
    else if (toitype == 1){
        watuse[3] = min[3] * 1.6;
    }
}

function increaseamount5() {
    min[4] += 1;
    document.getElementById("increaseamount5").previousElementSibling.innerHTML = min[4];
    if (ftype == 0) {
        watuse[4] = min[4] * 2;
    }
    else if (ftype == 1){
        watuse[4] = min[4] * 1;
    }
}

function increaseamount6() {
    min[5] += 1;
    document.getElementById("increaseamount6").previousSibling.innerHTML = min[5];
}

function increaseamount7() {
    min[6] += 1;
    document.getElementById("increaseamount7").previousElementSibling.innerHTML = min[6];
    if (ltype == 0) {
        watuse[6] = min[6] * 40/7;
    }
    else if (ltype == 1){
        watuse[6] = min[6] * 25/7;
    }
    var sum = watuse.reduce(function(a, b){
        return a + b;
    }, 0);
    console.log(sum);
}

function decreaseamount1() {
   
    min[0] -= 1; 
    document.getElementById("decreaseamount1").nextElementSibling.innerHTML = min[0];
}

function decreaseamount2() {
    min[1] -= 1;
    document.getElementById("decreaseamount2").nextElementSibling.innerHTML = min[1];
}

function decreaseamount3() {
    min[2] -= 1;
    document.getElementById("decreaseamount3").nextElementSibling.innerHTML = min[2];
}

function decreaseamount4() {
    min[3] -= 1;
    document.getElementById("decreaseamount4").nextElementSibling.innerHTML = min[3];
}

function decreaseamount5() {
    min[4] -= 1;
    document.getElementById("decreaseamount5").nextElementSibling.innerHTML = min[4];
}

function decreaseamount6() {
    min[5] -= 1;
    document.getElementById("decreaseamount6").nextElementSibling.innerHTML = min[5];
}

function decreaseamount7() {
    min[6] -= 1;
    document.getElementById("decreaseamount7").nextElementSibling.innerHTML = min[6];
}

function increaseamount8() {
    min[7] += 1;
    document.getElementById("increaseamount8").previousSibling.innerHTML = min[7];
}function increaseamount9() {
    min[8] += 1;
    document.getElementById("increaseamount9").previousElementSibling.innerHTML = min[8];
}function increaseamount10() {
    min[9] += 1;
    document.getElementById("increaseamount10").previousElementSibling.innerHTML = min[9];
}function increaseamount11() {
    min[10] += 1;
    document.getElementById("increaseamount11").previousElementSibling.innerHTML = min[10];
}function increaseamount12() {
    min[11] += 1;
    document.getElementById("increaseamount12").previousElementSibling.innerHTML = min[11];
}function increaseamount13() {
    min[12] += 1;
    document.getElementById("increaseamount13").previousElementSibling.innerHTML = min[12];
}function increaseamount14() {
    min[13] += 1;
    document.getElementById("increaseamount14").previousElementSibling.innerHTML = min[13];
}function increaseamount15() {
    min[14] += 1;
    document.getElementById("increaseamount15").previousElementSibling.innerHTML = min[14];
}function increaseamount16() {
    min[15] += 1;
    document.getElementById("increaseamount16").previousElementSibling.innerHTML = min[15];
}function increaseamount17() {
    min[16] += 1;
    document.getElementById("increaseamount17").previousElementSibling.innerHTML = min[16];
}

function decreaseamount8() {
    min[8] -= 1;
    console.log("hi");
    document.getElementById("decreaseamount8").nextElementSibling.innerHTML = min[8];
}function decreaseamount9() {
    min[9] -= 1;
    document.getElementById("decreaseamount9").nextElementSibling.innerHTML = min[9];
}function decreaseamount10() {
    min[10] -= 1;
    document.getElementById("decreaseamount10").nextElementSibling.innerHTML = min[10];
}function decreaseamount11() {
    min[11] -= 1;
    document.getElementById("decreaseamount11").nextElementSibling.innerHTML = min[11];
}function decreaseamount12() {
    min[12] -= 1;
    document.getElementById("decreaseamount12").nextElementSibling.innerHTML = min[12];
}function decreaseamount13() {
    min[13] -= 1;
    document.getElementById("decreaseamount13").nextElementSibling.innerHTML = min[13];
}function decreaseamount14() {
    min[14] -= 1;
    document.getElementById("decreaseamount14").nextElementSibling.innerHTML = min[14];
}function decreaseamount15() {
    min[15] -= 1;
    document.getElementById("decreaseamount15").nextElementSibling.innerHTML = min[15];
}function decreaseamount16() {
    min[16] -= 1;
    document.getElementById("decreaseamount16").nextElementSibling.innerHTML = min[16];
}function decreaseamount17() {
    min[17] -= 1;
    document.getElementById("decreaseamount17").nextElementSibling.innerHTML = min[17];
}

watuse[8] = min[8] * 14100/30;
watuse[9] = min[9] * 6000/30;
watuse[10] = min[10] * 4300/31;
watuse[11] = min[11] * 250/7;
watuse[12] = min[12] * 2500/365;
watuse[13] = min[13] * 8000/365;
watuse[14] = min[14] * 60/31;
