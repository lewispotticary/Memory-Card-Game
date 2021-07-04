var numberArr = [1,2,3,4,5,6];
var catID = [];

for(var x=1; x < 7; x++){
    var num = Math.floor(Math.random() * numberArr.length);
    var roll = numberArr.splice(num, 1);
    var finalNum = roll[ 0 ];
    var cardTemp = document.getElementsByClassName("card" + finalNum)[0];
    var catTemp = document.getElementById(x);
    cardTemp.appendChild(catTemp);
}

var card1 = document.getElementsByClassName("card1")[0];
card1.setAttribute("id","card1");
card1.setAttribute("onclick", "play(this.id)");

var card2 = document.getElementsByClassName("card2")[0];
card2.setAttribute("id","card2");
card2.setAttribute("onclick", "play(this.id)");

var card3 = document.getElementsByClassName("card3")[0];
card3.setAttribute("id","card3");
card3.setAttribute("onclick", "play(this.id)");

var card4 = document.getElementsByClassName("card4")[0];
card4.setAttribute("id","card4");
card4.setAttribute("onclick", "play(this.id)");

var card5 = document.getElementsByClassName("card5")[0];
card5.setAttribute("id","card5");
card5.setAttribute("onclick", "play(this.id)");

var card6 = document.getElementsByClassName("card6")[0];
card6.setAttribute("id","card6");
card6.setAttribute("onclick", "play(this.id)");

function play(clicked_id){
    var clickID = clicked_id;
    
    if(clickID == "card1"){
        document.getElementsByClassName("card1")[0].style.background = "none";
        var cardChild = document.getElementsByClassName("card1")[0].getElementsByTagName("*")[0];
        catID.push(cardChild.id);
        cardChild.style.display = "block";
    }
    else if(clickID == "card2"){
        document.getElementsByClassName("card2")[0].style.background = "none";
        var cardChild = document.getElementsByClassName("card2")[0].getElementsByTagName("*")[0];
        catID.push(cardChild.id);
        cardChild.style.display = "block";
    }
    else if(clickID == "card3"){
        document.getElementsByClassName("card3")[0].style.background = "none";
        var cardChild = document.getElementsByClassName("card3")[0].getElementsByTagName("*")[0];
        catID.push(cardChild.id);
        cardChild.style.display = "block";
    }
    else if(clickID == "card4"){
        document.getElementsByClassName("card4")[0].style.background = "none";
        var cardChild = document.getElementsByClassName("card4")[0].getElementsByTagName("*")[0];
        catID.push(cardChild.id);
        cardChild.style.display = "block";
    }
    else if(clickID == "card5"){
        document.getElementsByClassName("card5")[0].style.background = "none";
        var cardChild = document.getElementsByClassName("card5")[0].getElementsByTagName("*")[0];
        catID.push(cardChild.id);
        cardChild.style.display = "block";
    }
    else if(clickID == "card6"){
        document.getElementsByClassName("card6")[0].style.background = "none";
        var cardChild = document.getElementsByClassName("card6")[0].getElementsByTagName("*")[0];
        catID.push(cardChild.id);
        cardChild.style.display = "block";
    }

    if(catID[0] == "1" && catID[1] == "2" || catID[0] == "2" && catID[1] == "1"){
        alert("Its a match");
    }
}