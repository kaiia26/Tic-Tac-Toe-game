var p1Score = 0;
var p2Score = 0;
var tie = 0;
var turn = 1;





$(".box").on("click", function() {
    if (turn === 1) {
        $(this).text("X")
        turn = 2
    } else {
        $(this).text("O")
        turn = 1
    }
    $("#turn").text(turn)

    }
    
);
