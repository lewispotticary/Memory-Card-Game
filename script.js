var numberArr = [1,2,3,4,5,6];
var catID = [];
var attempts = 0;
var score = 0;
var failAttempt = 0;
var blackMatch = false;
var orangeMatch = false;
var greyMatch = false;

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
    match = false;
    var clickID = clicked_id;

    if(attempts <= 1){
        console.log("run");
        if(clickID == "card1"){
            document.getElementsByClassName("card1")[0].style.background = "none";
            var cardChild = document.getElementsByClassName("card1")[0].getElementsByTagName("*")[0];
            cardChild.style.display = "block";
            catID.push(cardChild.id);
            attempts = attempts + 1;
        }
        if(clickID == "card2"){
            document.getElementsByClassName("card2")[0].style.background = "none";
            var cardChild = document.getElementsByClassName("card2")[0].getElementsByTagName("*")[0];
            cardChild.style.display = "block";
            catID.push(cardChild.id);
            attempts = attempts + 1;
        }
        if(clickID == "card3"){
            document.getElementsByClassName("card3")[0].style.background = "none";
            var cardChild = document.getElementsByClassName("card3")[0].getElementsByTagName("*")[0];
            cardChild.style.display = "block";
            catID.push(cardChild.id);
            attempts = attempts + 1;
        }
        if(clickID == "card4"){
            document.getElementsByClassName("card4")[0].style.background = "none";
            var cardChild = document.getElementsByClassName("card4")[0].getElementsByTagName("*")[0];
            cardChild.style.display = "block";
            catID.push(cardChild.id);
            attempts = attempts + 1;
        }
        if(clickID == "card5"){
            document.getElementsByClassName("card5")[0].style.background = "none";
            var cardChild = document.getElementsByClassName("card5")[0].getElementsByTagName("*")[0];
            cardChild.style.display = "block";
            catID.push(cardChild.id);
            attempts = attempts + 1;
        }
        if(clickID == "card6"){
            document.getElementsByClassName("card6")[0].style.background = "none";
            var cardChild = document.getElementsByClassName("card6")[0].getElementsByTagName("*")[0];
            cardChild.style.display = "block";
            catID.push(cardChild.id);
            attempts = attempts + 1;  
        }

        setTimeout(function () { checkMatch(); }, 2000);
    }


    function checkMatch (){
        if (attempts == 2){
            console.log(catID);
            if(catID[0] == "1" && catID[1] == "2" || catID[0] == "2" && catID[1] == "1" && match == false){
                setTimeout(function () { alert("Its a Match!"); }, 1);
                catID.splice(0, 2);
                score = score + 1;
                attempts = 0;
                blackMatch = true;
            }
            else if (catID[0] == "3" && catID[1] == "4" || catID[0] == "4" && catID[1] == "3" && match == false){
                setTimeout(function () { alert("Its a Match!"); }, 1);
                catID.splice(0, 2);
                score = score + 1;
                attempts = 0;
                greyMatch = true;
            }
            else if (catID[0] == "5" && catID[1] == "6" || catID[0] == "6" && catID[1] == "5" && match == false){
                setTimeout(function () { alert("Its a Match!"); }, 1);
                catID.splice(0, 2);
                score = score + 1;
                attempts = 0;
                orangeMatch = true;
            }
            else{
                setTimeout(function () { alert("Not a Match! Try Again"); }, 1);

                failAttempt = failAttempt + 1;

                catID.splice(0, 2);

                document.getElementsByClassName("card1")[0].style.background = "green";
                var cardChild = document.getElementsByClassName("card1")[0].getElementsByTagName("*")[0];
                cardChild.style.display = "none";

                document.getElementsByClassName("card2")[0].style.background = "green";
                var cardChild = document.getElementsByClassName("card2")[0].getElementsByTagName("*")[0];
                cardChild.style.display = "none";

                document.getElementsByClassName("card3")[0].style.background = "green";
                var cardChild = document.getElementsByClassName("card3")[0].getElementsByTagName("*")[0];
                cardChild.style.display = "none";

                document.getElementsByClassName("card4")[0].style.background = "green";
                var cardChild = document.getElementsByClassName("card4")[0].getElementsByTagName("*")[0];
                cardChild.style.display = "none";

                document.getElementsByClassName("card5")[0].style.background = "green";
                var cardChild = document.getElementsByClassName("card5")[0].getElementsByTagName("*")[0];
                cardChild.style.display = "none";

                document.getElementsByClassName("card6")[0].style.background = "green";
                var cardChild = document.getElementsByClassName("card6")[0].getElementsByTagName("*")[0];
                cardChild.style.display = "none";

                attempts = 0;         
            }

            var scoreH3 = document.getElementById("scoreCount");
            scoreH3.innerHTML = "";
            scoreH3.append(score);
            var failAttemptH3 = document.getElementById("failAttemptCount");
            failAttemptH3.innerHTML = "";
            failAttemptH3.append(failAttempt);         
            
            setTimeout(function () { winner(); }, 2000);
        }
    }
}

function winner (){
    if(blackMatch == true && orangeMatch == true && greyMatch == true)
    {
        alert("You Win!")
        location.reload();
    }
}
