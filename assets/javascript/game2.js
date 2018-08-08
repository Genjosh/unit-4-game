$(document).ready(function () {
    var Random = Math.floor(Math.random() * 120 + 19);

    $('#numberRandom').text(Random);
    var crystalValue = [];
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    reset();
   
    console.log(crystalValue);

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random);
        $('#numberRandom').text(Random);
        crystalValue = [];
        for(var i=0; i<4; i++) {
            crystalValue.push(Math.floor(Math.random() * 11 + 1));
     
         }
        
        userTotal = 0;
        $('#finalScore').text(userTotal);
    }

    function winner() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    $('.gemImage').on('click', function () {
        //userTotal = userTotal + num1;
       var gemNumber= $(this).attr("value");
      userTotal= userTotal + crystalValue[gemNumber]
       
        console.log("NewUserTotal= " + userTotal);
        $('#finalScore').text(userTotal);
        

        if (userTotal == Random) {
            winner();
        } else if (userTotal > Random) {
            loser();
        }
    });
   

});