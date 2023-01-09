let homeScreen = document.getElementById("home-score")
let awayScreen = document.getElementById("away-score")
let countHome = 0
let countAway = 0

function compare(){
    if(countHome === countAway){
        homeScreen.style.color = "#F94F6D"
        awayScreen.style.color = "#F94F6D"
    }
    else if(countHome > countAway){
        homeScreen.style.color = "#00b140"
        awayScreen.style.color = "red"
    }
    else{
        homeScreen.style.color = "red"
        awayScreen.style.color = "#00b140"
    }
}
function plusOneHome(){
    countHome+=1;
    homeScreen.textContent = countHome;
    compare()
    
}
function plusTwoHome(){
    countHome+=2;
    homeScreen.textContent = countHome;
    compare()
}
function plusThreeHome(){
    countHome+=3;
    homeScreen.textContent = countHome;
    compare()
}
function plusOneAway(){
    countAway+=1;
    awayScreen.textContent = countAway;
    compare()
}
function plusTwoAway(){
    countAway+=2;
    awayScreen.textContent = countAway;
    compare()
}
function plusThreeAway(){
    countAway+=3;
    awayScreen.textContent = countAway;
    compare()
}

function reset(){
    countHome = 0
    countAway = 0;
    homeScreen.textContent = countHome;
    awayScreen.textContent = countAway;
    homeScreen.style.color = "#F94F6D"
    awayScreen.style.color = "#F94F6D"
}

