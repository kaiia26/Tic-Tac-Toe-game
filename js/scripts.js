var p1Score = 0;
var p2Score = 0;
var ties = 0;
var turn = 1;

function checkWin(val) {
    // Check rows, columns, and diagonals for a win
    if (
        $(".row-1 .box." + val).length === 3 ||
        $(".row-2 .box." + val).length === 3 ||
        $(".row-3 .box." + val).length === 3 ||
        ($(".box.col-1." + val).length === 3) ||
        ($(".box.col-2." + val).length === 3) ||
        ($(".box.col-3." + val).length === 3) ||
        ($("#1").hasClass(val) && $("#5").hasClass(val) && $("#9").hasClass(val)) ||
        ($("#3").hasClass(val) && $("#5").hasClass(val) && $("#7").hasClass(val))
    ) {
        // Reset the game
        $(".box").empty().removeClass("X O");
        return true;
    }
    return false;
}

function checkTie() {
    if ($(".X").length + $(".O").length === 9) {
        $(".box").empty().removeClass("X O");
        ties++;
        $("#ties").text(ties);
        return true;
    }
    return false;
}

$(".box").on("click", function() {
    // Prevent clicking on already filled boxes
    if ($(this).hasClass("X") || $(this).hasClass("O")) {
        return;
    }
    
    if (turn === 1) {
        $(this).text("X");
        $(this).addClass("X");
        if (checkWin("X")) {
            p1Score++;
            $("#p-1-wins").text(p1Score); // Fix the ID here
            $("#turns").text("1"); // Reset turn display to Player 1
            return; // Exit after a win
        }
        turn = 2; // Switch to Player 2
    } else {
        $(this).text("O");
        $(this).addClass("O");
        if (checkWin("O")) {
            p2Score++;
            $("#p-2-wins").text(p2Score); // Fix the ID here
            $("#turns").text("1"); // Reset turn display to Player 1
            return; // Exit after a win
        }
        turn = 1; // Switch to Player 1
    }

    $("#turns").text(turn); // Update the turn display
    checkTie(); // Check for a tie
});

