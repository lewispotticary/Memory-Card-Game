var numberArr = [1,2,3,4,5,6];

for(var x=1; x < 7; x++){
    var num = Math.floor(Math.random() * numberArr.length);
    var roll = numberArr.splice(num, 1);
    var finalNum = roll[ 0 ];
    console.log("Final Number:" + finalNum);
    var cardTemp = document.getElementsByClassName("card" + finalNum)[0];
    console.log(cardTemp);
    var catTemp = document.getElementById(x);
    console.log(catTemp);
    cardTemp.appendChild(catTemp);
}

