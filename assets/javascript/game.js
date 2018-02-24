// JavaScript function that wraps everything
    $(document).ready(function() {

  //Global Variables
  var randNum;
  var randCrystal;
  var crystalArray = ["blue-crystal", "green-crystal", "red-crystal", "yellow-crystal" ]
  var ourScore = 0;
  var win = 0;
  var lose = 0;

    //Game start/restart
    function gameStart () {
      //Make a random number for your targetScore
       randNum = Math.floor(Math.random() * (120 - 19)) + 19;
       $('.targetScore').text(randNum);
       //reset ourScore once player win/lose
       ourScore = 0;
       $(".ourScore").text(ourScore);
      //Make a random number for every crystal 
       for(var i = 0; i < crystalArray.length; i++) {
        randCrystal = Math.floor(Math.random() * (1 - 12)) + 12;
        $("#" + crystalArray[i]).attr("value", randCrystal)           
      } 
    }
 
    //ALL OF MY CRYSTAL BUTTONS//

    // store the data for each crystal clicked and turn into a number   
      $(".crystal").on("click", function() {
        ourScore += parseInt(this.value);

        $(".ourScore").text(ourScore);

          //win
          if (ourScore === randNum) {
            win++;
            $(".win").text(win);
            alert ("You Win");           
            gameStart ();
          }
          //lose
          else if (ourScore > randNum) {
            lose++;
            $(".lose").text(lose);
            alert ("You Lose");  
            gameStart ();
          }
        console.log(this.value);
    });


     gameStart ();

    });