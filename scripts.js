var p1Score = 0;
var p2Score = 0;
var tie = 0;
var turn = 1;

function checkWin(val) {
    if (
        $(".row-1 .box" + val).length === 3 ||
        $(".row-2 .box" + val).length === 3 ||
        $(".row-3 .box" + val).length === 3 ||
        $(".col-1.X" + val).length === 3 ||
        $(".col-2.X" + val).length === 3 ||
        $(".col-3.X" + val).length === 3 ||
        (
            $("#1").hasClass(val) &&
            $("#5").hasClass(val) &&
            $("#9").hasClass(val)
        ) ||
        (
            $("#3").hasClass(val) &&
            $("#5").hasClass(val) &&
            $("#7").hasClass(val)
        )
    ) {
        $(".box").empty()
        $(".X").removeClass("X")
        $(".O").removeClass("O")
        return true;
    }
}

    function checkTie() {
        if ($(".X").length + $(".O").length === 9) {
            $(".box").empty()
            $(".X").removeClass("X")
            $(".O").removeClass("O")
            ties++
            $("#ties").text(ties)
            return true;
        }
    }




$(".box").on("click", function() {
    if (turn === 1) {
        $(this).text("X")
        $(this).addClass("X")
        turn = 2
       if (checkWin("X")) {
        p1Score++
        $("#p-1 wins").text(p1Score)
       } else checkTie()
    } else {
        $(this).text("O")
        $(this).addClass("O")
        turn = 1
        if (checkWin("X")) {
            p2Score++
            $("#p-2 wins").text(p2Score)
           
        } else checkTie()

        
    }
    $("#turn").text(turn)

    }
    
);
