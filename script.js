var klikgreen =  document.querySelector("#_v-begin_");
var klikgreen2 =  document.querySelector("#_r-begin_");
var klikgreen3 =  document.querySelector("#_m-begin_");
var klikgreen4 =  document.querySelector("#_m-midden_");
var klikgreen5 =  document.querySelector("#_v-eind_");
var klikgreen6 =  document.querySelector("#_o-begin_");
var klikgreen7 =  document.querySelector("#_m-eind_");
var klikgreen8 =  document.querySelector("#_o-eind_");
var klikgreen9 =  document.querySelector("#_r-onder2_");
var klikgreen10 =  document.querySelector("#_s-midden_");
var klikgreen11 =  document.querySelector("#_e-zijkant_");
var klikgreen12 =  document.querySelector("#_e-zijkant2_");
var klikgreen13 =  document.querySelector("#_g-begin_");
var klikgreen14 =  document.querySelector("#_g-eind_");
var klikgreen15 =  document.querySelector("#_v-eind2_");
var klikgreen16 =  document.querySelector("#_v-begin2_");

var klikpurple = document.querySelector("#_o-onder_");
var klikpurple2 = document.querySelector("#_o-boven_");
var klikpurple3 = document.querySelector("#_r-boven_");
var klikpurple4 = document.querySelector("#_m-boven_");
var klikpurple5 = document.querySelector("#_m-boven2_");
var klikpurple6 = document.querySelector("#_g-boven_");
var klikpurple7 = document.querySelector("#_g-midden_");
var klikpurple8 = document.querySelector("#_g-onder_");
var klikpurple9 = document.querySelector("#_e-boven_");
var klikpurple10 = document.querySelector("#_e-midden_");
var klikpurple11 = document.querySelector("#_e-onder_");
var klikpurple12 = document.querySelector("#_e-onder2_");
var klikpurple13 = document.querySelector("#_e-onder2");
var klikpurple14 = document.querySelector("#_e-boven2_");
var klikpurple15 = document.querySelector("#_r-boven2_");
var klikpurple16 = document.querySelector("#_S-onder_");
var klikpurple17 = document.querySelector("#_s-boven_");

var klikorange = document.querySelector("#_v-blok_");
var klikorange2 = document.querySelector("#_v-blok2_");
var klikorange3 = document.querySelector("#_v-blokk_");
var klikorange4 = document.querySelector("#_v-blokk2_");
var klikorange5 = document.querySelector("#_e-blok_");
var klikorange6 = document.querySelector("#_e-blok2_");
var klikorange7 = document.querySelector("#_s-blokboven_");
var klikorange8 = document.querySelector("#_s-blokonder_");

var achtergrond = document.querySelector("body");
var beweeg = document.querySelector("#_v-eind_");
var beweeg2 = document.querySelector("#_v-begin_");
var beweeg3 = document.querySelector("#_v-begin2_");
var beweeg4 = document.querySelector("#_v-eind2_");

var zwart = document.querySelector(".background");


var shake = function() {
    beweeg.classList.toggle('random')
}
beweeg.addEventListener('click', shake);

var shake = function() {
    beweeg2.classList.toggle('random')
}
beweeg2.addEventListener('click', shake);

var shake = function() {
    beweeg3.classList.toggle('random')
}
beweeg3.addEventListener('click', shake);

var shake = function() {
    beweeg4.classList.toggle('random')
}
beweeg4.addEventListener('click', shake);


var klikArray = [klikgreen, klikgreen2, klikgreen3, klikgreen4, klikgreen5, klikgreen6, klikgreen7, klikgreen8, klikgreen9, klikgreen10, klikgreen11, klikgreen12, klikgreen13, klikgreen14, klikgreen15, klikgreen16];


//https://www.w3schools.com/js/js_loop_for.asp

var colorChange = function() {
    
    for (var i = 0; i < klikArray.length; i++){
        
        klikArray[i].classList.toggle('green');
    }
    
}
klikgreen.addEventListener('click', colorChange);
klikgreen2.addEventListener('click', colorChange);
klikgreen3.addEventListener('click', colorChange);
klikgreen4.addEventListener('click', colorChange);
klikgreen5.addEventListener('click', colorChange);
klikgreen6.addEventListener('click', colorChange);
klikgreen7.addEventListener('click', colorChange);
klikgreen8.addEventListener('click', colorChange);
klikgreen9.addEventListener('click', colorChange);
klikgreen10.addEventListener('click', colorChange);
klikgreen11.addEventListener('click', colorChange);
klikgreen12.addEventListener('click', colorChange);
klikgreen13.addEventListener('click', colorChange);
klikgreen14.addEventListener('click', colorChange);
klikgreen15.addEventListener('click', colorChange);
klikgreen16.addEventListener('click', colorChange);

var klikArray2 = [klikpurple, klikpurple2, klikpurple3, klikpurple4, klikpurple5, klikpurple6, klikpurple7, klikpurple8, klikpurple9, klikpurple10, klikpurple11, klikpurple12, klikpurple13, klikpurple14, klikpurple15, klikpurple16, klikpurple17];

var colorChange2 = function() {
    
    for (var i = 0; i < klikArray2.length; i++){
        
        klikArray2[i].classList.toggle('purple');
    }
}

klikpurple.addEventListener('click', colorChange2);
klikpurple2.addEventListener('click', colorChange2);
klikpurple3.addEventListener('click', colorChange2);
klikpurple4.addEventListener('click', colorChange2);
klikpurple5.addEventListener('click', colorChange2);
klikpurple6.addEventListener('click', colorChange2);
klikpurple7.addEventListener('click', colorChange2);
klikpurple8.addEventListener('click', colorChange2);
klikpurple9.addEventListener('click', colorChange2);
klikpurple10.addEventListener('click', colorChange2);
klikpurple11.addEventListener('click', colorChange2);
klikpurple12.addEventListener('click', colorChange2);
klikpurple13.addEventListener('click', colorChange2);
klikpurple14.addEventListener('click', colorChange2);
klikpurple15.addEventListener('click', colorChange2);
klikpurple16.addEventListener('click', colorChange2);
klikpurple17.addEventListener('click', colorChange2);

var klikArray3 = [klikorange, klikorange2, klikorange3, klikorange4, klikorange5, klikorange6, klikorange7, klikorange8];

var colorChange3 = function() {
    
    for (var i = 0; i < klikArray3.length; i++){
        
        klikArray3[i].classList.toggle('orange');
    }
}

klikorange.addEventListener('click', colorChange3);
klikorange2.addEventListener('click', colorChange3);
klikorange3.addEventListener('click', colorChange3);
klikorange4.addEventListener('click', colorChange3);
klikorange5.addEventListener('click', colorChange3);
klikorange6.addEventListener('click', colorChange3);
klikorange7.addEventListener('click', colorChange3);
klikorange8.addEventListener('click', colorChange3);





//Jimmy Kuik//
function keyCodes(e) {
    if(e.keyCode === 78) {
        achtergrond.classList.toggle('night');
    }
    if(e.keyCode === 68) {
        zwart.classList.toggle('day');
    }
}
document.onkeydown = keyCodes; 



//https://www.w3schools.com/js/js_if_else.asp

//https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array







