// wait for the DOM to finish loading
$(document).ready(function() {
  // console.log("don't jump off a bridget yet, js loads.");
  var turn = 1;
  var winCounter = 0;
  $(".status").text("Player " + currentPlayer() + ". It's your turn.");
  var winCombinations = [$(".row1"), $(".row2"), $(".row3"), $(".column1"),
  $(".column2"), $(".column3"), $(".diag1"), $(".diag2")];

  function currentPlayer() {
    return turn % 2 ? "X" : "O"; // if turn even return player 1, if turn off return player 2
  }

  $(".content-card").on("click", function() {
    // console.log("click works");
    if ($(this).hasClass("X") || $(this).hasClass("O")) {
      alert("No cheating.  Pick another square.") // look for something in bootstrap
    } else {
      $(this).addClass(currentPlayer());
      $(this).text(currentPlayer());
      $.each(winCombinations, threeInARow); // broken - supposed to check for winner
      turn++;  // advance game
       if (turn === 10) {  // should be handled with gameOver.
         $(".status").text("Cat's game!")
         $(".status").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
       } else {
         $(".status").text("Player " + currentPlayer() + ". It's your turn.");
       }
    }

    return;
  })

  function threeInARow(index, set){ // does not work - take in all win conditions
    set.each(checkWinStatus);
      if (winCounter === 3) {
        $(".status").text(currentPlayer() + "has won the game!")
        $(".status").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
      }
  }

  function checkWinStatus(current){ // does not work - look at one win condition class (set of 3 spaces)
    winCounter = 0;  // reset winCounter each time i look at a new win condition class (set of 3 spaces)

    if ($(current).hasClass(currentPlayer)){ // look at each space in that set of three, each space belonging to current player increases winCounter by 1
      winCounter++;
    }
  }

  $(".btn").on("click", function () {
    location.reload(true);
  })

});
  /*
  var winCombinations = [$('p'), $('div'), $('pre')]; // every way you can win

  $.each(winCombinations, threeInARow);  // check each win combination and run threeInARow on it

  function threeInARow(index, set){ //look at a smaller set of things, run a function on each one
    set.each(checkWinStatus);
  }

  function checkWinStatus(current){
    var winCounter = 0;

    if ($(current).hasClass(currentPlayer)){
  }
  */

  // function gameOver() {
  //   $.each(winCombinations, threeInARow);
  //
  //   function threeInARow(index, currentPlayer()) {
  //     if (threeInARow[index].hasClass(currentPlayer())) {
  //      winCounter++;
  //     }
  //   }
  //   $(".status").text("The winner is: " + currentPlayer());
  //   $(".status").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);  // half sec fade in and out
  // }




// Users should be able to click on any empty box to make a move.
// Every move should alternate between marking an X and O (the two players).
// A user should not be able to claim a box that has already been claimed for X or O.
// Users should be able to click a "reset" button to clear all X's and O's from the board and restart the game.
// When there is a winner there should be an option to


// did not work
// function isGameOver() {
//   if (turn === 9) {
//     winner = "Cat's Game!";
//   } else if (threeInARow.each().text === "X") {
//
//     winner = "Player One Wins!";
//   } else if (threeInARow.each().text === "O") {
//     winner = "Player Two Wins!";
//   }
//
//   return;
// }

// this never worked.
// $(".content-card").on("click", function() {
//
//   console.log("this is " + $(this).empty());
//   if ($(this).text() === "") {  // this isn't working.
//     $(this).text(playerTurn());
//     isGameOver();
//     console.log(winner);
//   }
// })
//
// // wait for the DOM to finish loading
// $(document).ready(function() {
//   $('.btn').click(function() {
//     location.reload();
// });
//   var click = 0;
//
// });



// this did not work for lots of reasons.
// *************************************************************
// console.log("jquery loads")
// var turn = 0;
// var winner;
// var threeInARow = [$("row1"), $("row2"), $("row3"), $("column1"), $("column2"),
//   $("column3"), $("diag1"), $("diag2")];
//
// $("content-card").empty();
//
// $(".content-card").on("click", function() {
//   console.log(this);
//   if ($(this).text().length === 0) {  // this isn't working.  the above .empty command in a console.log is removing everything before the check to see if anything is inside.
//     $(this).text(playerTurn());
//     isGameOver();
//   }
// })
//
// function playerTurn() {
//   if (turn % 2 === 0 && $(this)) {
//     $(this).addclass("X");
//     return "X";
//   } else {
//     $(this.addclass("O"));
//     return "O";
//   }
//   // return turn++ % 2 ? "X" : "O";  // this is an if.  checks turn to see if % 2 === 0.  if yes returns "X" if no returns "O"  turn++ means after it does all that it incriments.
// }
//
// function isGameOver() {
//   if (turn === 8) {
//     winner = "Cat's Game!";
//   } else if (fullRow("X")) {
//     winner = "Player One Wins!";
//   } else if (fullRow("O")) {
//     winner = "Player Two Wins!";
//   }
// }
//
// function fullRow(threeInARow, letter) {
//   for (var i = 0; i < threeInARow.length; i++) {
//     var winCounter = 0;
//     for (var j = 0; j < threeInARow[i].length; j++) {
//       if (threeInARow[i][j] === letter) { // this is not looking at the content in the box
//         winCounter++;
//         if (winCounter === 3) {
//           return true;
//         }
//       }
//     }
//   }
// }
//
// function restart(){
//   if (winner) {
//
//   }
// } // this should overlay a window to announce a winner and give an option to restart.  i think that's a modal in bootstrap.  should allow me to display a message and have buttons.
