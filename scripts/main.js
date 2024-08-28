$(window).ready(function (e)
{
    


    //----------------------------*
    // locations -----------------*
    //----------------------------*
    function fixres()
    {
        var widwin = window.innerWidth;
        var highwin = window.innerHeight;
        $(".keyboard").css("left", (widwin - 1246) / 2);
        $(".keyboard").css("top", (highwin - 416) / 2);
        $("#l1-1").css("left", 50);
        $("#l1-2").css("left", 150);
        $("#l1-3").css("left", 200);
        $("#l1-4").css("left", 250);
        $("#l1-5").css("left", 300);
        $("#l1-6").css("left", 375);
        $("#l1-7").css("left", 425);
        $("#l1-8").css("left", 475);
        $("#l1-9").css("left", 525);
        $("#l1-10").css("left", 600);
        $("#l1-11").css("left", 650);
        $("#l1-12").css("left", 700);
        $("#l1-13").css("left", 750);
        $("#l1-14").css("left", 825);
        $("#l1-15").css("left", 875);
        $("#l1-16").css("left", 925);
        $("#l2-1").css("left", 50);
        $("#l2-2").css("left", 100);
        $("#l2-3").css("left", 150);
        $("#l2-4").css("left", 200);
        $("#l2-5").css("left", 250);
        $("#l2-6").css("left", 300);
        $("#l2-7").css("left", 350);
        $("#l2-8").css("left", 400);
        $("#l2-9").css("left", 450);
        $("#l2-10").css("left", 500);
        $("#l2-11").css("left", 550);
        $("#l2-12").css("left", 600);
        $("#l2-13").css("left", 650);
        $("#l2-14").css("left", 700);
        $("#l2-15").css("left", 750);
        $("#l2-16").css("left", 825);
        $("#l2-17").css("left", 875);
        $("#l2-18").css("left", 925);
        $("#l2-19").css("left", 1000);
        $("#l2-20").css("left", 1050);
        $("#l2-21").css("left", 1100);
        $("#l2-22").css("left", 1150);
        $("#l3-1").css("left", 50);
        $("#l3-1").css("width", 69);
        $("#l3-2").css("left", 125);
        $("#l3-3").css("left", 175);
        $("#l3-4").css("left", 225);
        $("#l3-5").css("left", 275);
        $("#l3-6").css("left", 325);
        $("#l3-7").css("left", 375);
        $("#l3-8").css("left", 425);
        $("#l3-9").css("left", 475);
        $("#l3-10").css("left", 525);
        $("#l3-11").css("left", 575);
        $("#l3-12").css("left", 625);
        $("#l3-13").css("left", 675);
        $("#l3-14").css("left", 725);
        $("#l3-14").css("width", 69);
        $("#l3-14").css("height", 49);
        $(".keyhide").css("left", 726);
        $(".keyhide").css("top", 219);
        $("#l3-15").css("left", 825);
        $("#l3-16").css("left", 875);
        $("#l3-17").css("left", 925);
        $("#l3-18").css("left", 1000);
        $("#l3-19").css("left", 1050);
        $("#l3-20").css("left", 1100);
        $("#l3-21").css("left", 1150);
        $("#l3-21").css("height", 94);
        $("#l4-1").css("left", 50);
        $("#l4-1").css("width", 82);
        $("#l4-2").css("left", 138);
        $("#l4-3").css("left", 188);
        $("#l4-4").css("left", 238);
        $("#l4-5").css("left", 288);
        $("#l4-6").css("left", 338);
        $("#l4-7").css("left", 388);
        $("#l4-8").css("left", 438);
        $("#l4-9").css("left", 488);
        $("#l4-10").css("left", 538);
        $("#l4-11").css("left", 588);
        $("#l4-12").css("left", 638);
        $("#l4-13").css("left", 688);
        $("#l4-13").css("width", 106);
        $("#l4-14").css("left", 1000);
        $("#l4-15").css("left", 1050);
        $("#l4-16").css("left", 1100);
        $("#l5-1").css("left", 50);
        $("#l5-1").css("width", 106);
        $("#l5-2").css("left", 162);
        $("#l5-3").css("left", 212);
        $("#l5-4").css("left", 262);
        $("#l5-5").css("left", 312);
        $("#l5-6").css("left", 362);
        $("#l5-7").css("left", 412);
        $("#l5-8").css("left", 462);
        $("#l5-9").css("left", 512);
        $("#l5-10").css("left", 562);
        $("#l5-11").css("left", 612);
        $("#l5-12").css("left", 662);
        $("#l5-12").css("width", 132);
        $("#l5-13").css("left", 875);
        $("#l5-14").css("left", 1000);
        $("#l5-15").css("left", 1050);
        $("#l5-16").css("left", 1100);
        $("#l5-17").css("left", 1150);
        $("#l5-17").css("height", 94);
        $("#l6-1").css("left", 50);
        $("#l6-2").css("left", 112);
        $("#l6-3").css("left", 174);
        $("#l6-4").css("left", 236);
        $("#l6-4").css("width", 308);
        $("#l6-5").css("left", 550);
        $("#l6-6").css("left", 612);
        $("#l6-7").css("left", 674);
        $("#l6-7").css("width", 57);
        $("#l6-8").css("left", 737);
        $("#l6-8").css("width", 57);
        $("#l6-9").css("left", 825);
        $("#l6-9").css("width", 44);
        $("#l6-10").css("left", 875);
        $("#l6-10").css("width", 44);
        $("#l6-11").css("left", 925);
        $("#l6-11").css("width", 44);
        $("#l6-12").css("left", 1000);
        $("#l6-12").css("width", 94);
        $("#l6-13").css("left", 1100);
        $("#l6-13").css("width", 44);
    }
    fixres();

    $(document).keydown(function (e)
    {
        var a = "#ffffff";
        event.preventDefault();
        if (e.keyCode == 65) { $("#l4-2").css("background-color", a) } // a
        if (e.keyCode == 66) { $("#l5-6").css("background-color", a) } // b
        if (e.keyCode == 67) { $("#l5-4").css("background-color", a) } // c
        if (e.keyCode == 68) { $("#l4-4").css("background-color", a) } // d
        if (e.keyCode == 69) { $("#l3-4").css("background-color", a) } // e
        if (e.keyCode == 70) { $("#l4-5").css("background-color", a) } // f
        if (e.keyCode == 71) { $("#l4-6").css("background-color", a) } // g
        if (e.keyCode == 72) { $("#l4-7").css("background-color", a) } // h
        if (e.keyCode == 73) { $("#l3-9").css("background-color", a) } // i
        if (e.keyCode == 74) { $("#l4-8").css("background-color", a) } // j
        if (e.keyCode == 75) { $("#l4-9").css("background-color", a) } // k
        if (e.keyCode == 76) { $("#l4-10").css("background-color", a) } // l
        if (e.keyCode == 77) { $("#l5-8").css("background-color", a) } // m
        if (e.keyCode == 78) { $("#l5-7").css("background-color", a) } // n
        if (e.keyCode == 79) { $("#l3-10").css("background-color", a) } // o
        if (e.keyCode == 80) { $("#l3-11").css("background-color", a) } // p
        if (e.keyCode == 81) { $("#l3-2").css("background-color", a) } // q
        if (e.keyCode == 82) { $("#l3-5").css("background-color", a) } // r
        if (e.keyCode == 83) { $("#l4-3").css("background-color", a) } // s
        if (e.keyCode == 84) { $("#l3-6").css("background-color", a) } // t
        if (e.keyCode == 85) { $("#l3-8").css("background-color", a) } // u
        if (e.keyCode == 86) { $("#l5-5").css("background-color", a) } // v
        if (e.keyCode == 87) { $("#l3-3").css("background-color", a) } // w
        if (e.keyCode == 88) { $("#l5-3").css("background-color", a) } // x
        if (e.keyCode == 89) { $("#l3-7").css("background-color", a) } // y
        if (e.keyCode == 90) { $("#l5-2").css("background-color", a) } // z
        if (e.keyCode == 188) { $("#l5-9").css("background-color", a) } // ,
        if (e.keyCode == 190) { $("#l5-10").css("background-color", a) } // .
        if (e.keyCode == 191) { $("#l5-11").css("background-color", a) } // /
        if (e.keyCode == 186) { $("#l4-11").css("background-color", a) } // ;
        if (e.keyCode == 222) { $("#l4-12").css("background-color", a) } // '
        if (e.keyCode == 219) { $("#l3-12").css("background-color", a) } // [
        if (e.keyCode == 221) { $("#l3-13").css("background-color", a) } // ]
        if (e.keyCode == 49) { $("#l2-2").css("background-color", a) } // 1
        if (e.keyCode == 50) { $("#l2-3").css("background-color", a) } // 2
        if (e.keyCode == 51) { $("#l2-4").css("background-color", a) } // 3
        if (e.keyCode == 52) { $("#l2-5").css("background-color", a) } // 4
        if (e.keyCode == 53) { $("#l2-6").css("background-color", a) } // 5
        if (e.keyCode == 54) { $("#l2-7").css("background-color", a) } // 6
        if (e.keyCode == 55) { $("#l2-8").css("background-color", a) } // 7
        if (e.keyCode == 56) { $("#l2-9").css("background-color", a) } // 8
        if (e.keyCode == 57) { $("#l2-10").css("background-color", a) } // 9
        if (e.keyCode == 48) { $("#l2-11").css("background-color", a) } // 0
        if (e.keyCode == 189) { $("#l2-12").css("background-color", a) } // -
        if (e.keyCode == 187) { $("#l2-13").css("background-color", a) } // =
        if (e.keyCode == 220) { $("#l2-14").css("background-color", a) } // \
        if (e.keyCode == 8) { $("#l2-15").css("background-color", a) } // backspace
        if (e.keyCode == 192) { $("#l2-1").css("background-color", a) } // `
        if (e.keyCode == 27) { $("#l1-1").css("background-color", a) } // esc
        if (e.keyCode == 112) { $("#l1-2").css("background-color", a) } // f1
        if (e.keyCode == 113) { $("#l1-3").css("background-color", a) } // f2
        if (e.keyCode == 114) { $("#l1-4").css("background-color", a) } // f3
        if (e.keyCode == 115) { $("#l1-5").css("background-color", a) } // f4
        if (e.keyCode == 116) { $("#l1-6").css("background-color", a) } // f5
        if (e.keyCode == 117) { $("#l1-7").css("background-color", a) } // f6
        if (e.keyCode == 118) { $("#l1-8").css("background-color", a) } // f7
        if (e.keyCode == 119) { $("#l1-9").css("background-color", a) } // f8
        if (e.keyCode == 120) { $("#l1-10").css("background-color", a) } // f9
        if (e.keyCode == 121) { $("#l1-11").css("background-color", a) } // f10
        if (e.keyCode == 122) { $("#l1-12").css("background-color", a) } // f11
        if (e.keyCode == 123) { $("#l1-13").css("background-color", a) } // f12
        if (e.keyCode == 9) { $("#l3-1").css("background-color", a) } // tab
        if (e.keyCode == 20) { $("#l4-1").css("background-color", a) } // cap
        if (e.keyCode == 145) { $("#l1-15").css("background-color", a) } // scroll
        if (e.keyCode == 19) { $("#l1-16").css("background-color", a) } // pause
        if (e.keyCode == 45) { $("#l2-16").css("background-color", a) } // ins
        if (e.keyCode == 36) { $("#l2-17").css("background-color", a) } // home
        if (e.keyCode == 33) { $("#l2-18").css("background-color", a) } // page up
        if (e.keyCode == 46) { $("#l3-15").css("background-color", a) } // delete
        if (e.keyCode == 35) { $("#l3-16").css("background-color", a) } // end
        if (e.keyCode == 34) { $("#l3-17").css("background-color", a) } // page down
        if (e.keyCode == 38) { $("#l5-13").css("background-color", a) } // arrow up
        if (e.keyCode == 37) { $("#l6-9").css("background-color", a) } // arrow left
        if (e.keyCode == 40) { $("#l6-10").css("background-color", a) } // arrow down
        if (e.keyCode == 39) { $("#l6-11").css("background-color", a) } // arrow right
        if (e.keyCode == 91) { $("#l6-2").css("background-color", a) } // left window
        if (e.keyCode == 92) { $("#l6-6").css("background-color", a) } // right window
        if (e.keyCode == 32) { $("#l6-4").css("background-color", a) } // space
        if (e.keyCode == 93) { $("#l6-7").css("background-color", a) } // select key
        if (e.keyCode == 144) { $("#l2-19").css("background-color", a) } // num lock
        if (e.keyCode == 111) { $("#l2-20").css("background-color", a) } // divide
        if (e.keyCode == 106) { $("#l2-21").css("background-color", a) } // muliple
        if (e.keyCode == 109) { $("#l2-22").css("background-color", a) } // sustract
        if (e.keyCode == 103) { $("#l3-18").css("background-color", a) } // numpad7
        if (e.keyCode == 104) { $("#l3-19").css("background-color", a) } // numpad8
        if (e.keyCode == 105) { $("#l3-20").css("background-color", a) } // numpad9
        if (e.keyCode == 107) { $("#l3-21").css("background-color", a) } // add
        if (e.keyCode == 100) { $("#l4-14").css("background-color", a) } // numpad4
        if (e.keyCode == 101) { $("#l4-15").css("background-color", a) } // numpad5
        if (e.keyCode == 102) { $("#l4-16").css("background-color", a) } // numpad6
        if (e.keyCode == 97) { $("#l5-14").css("background-color", a) } // numpad1
        if (e.keyCode == 98) { $("#l5-15").css("background-color", a) } // numpad2
        if (e.keyCode == 99) { $("#l5-16").css("background-color", a) } // numpad3
        if (e.keyCode == 96) { $("#l6-12").css("background-color", a) } // numpad0
        if (e.keyCode == 110) { $("#l6-13").css("background-color", a) } // decimal
        if (e.keyCode == 16)
        {
            if (event.location == 1) { $("#l5-1").css("background-color", a) } // left shift
            if (event.location == 2) { $("#l5-12").css("background-color", a) } // right shift
        }
        if (e.keyCode == 17)
        {
            if (event.location == 1) { $("#l6-1").css("background-color", a) } // left ctrl
            if (event.location == 2) { $("#l6-8").css("background-color", a) } // right ctrl
        }
        if (e.keyCode == 18)
        {
            if (event.location == 1) { $("#l6-3").css("background-color", a) } // left alt
            if (event.location == 2) { $("#l6-5").css("background-color", a) } // right alt
        }
        if (e.keyCode == 13)
        {
            if (event.location == 3)
            {
                $("#l5-17").css("background-color", a) // numpad enter
            }
            else
            {
                $("#l3-14").css("background-color", a) // normal enter
                $("#l4-13").css("background-color", a) // normal enter
                $(".keyhide").css("background-color", a) // normal enter
            }
        }
    });
    $(document).keyup(function (e)
    {
        var a = "#000000";
        if (e.keyCode == 65) { $("#l4-2").css("background-color", a) } // a
        if (e.keyCode == 66) { $("#l5-6").css("background-color", a) } // b
        if (e.keyCode == 67) { $("#l5-4").css("background-color", a) } // c
        if (e.keyCode == 68) { $("#l4-4").css("background-color", a) } // d
        if (e.keyCode == 69) { $("#l3-4").css("background-color", a) } // e
        if (e.keyCode == 70) { $("#l4-5").css("background-color", a) } // f
        if (e.keyCode == 71) { $("#l4-6").css("background-color", a) } // g
        if (e.keyCode == 72) { $("#l4-7").css("background-color", a) } // h
        if (e.keyCode == 73) { $("#l3-9").css("background-color", a) } // i
        if (e.keyCode == 74) { $("#l4-8").css("background-color", a) } // j
        if (e.keyCode == 75) { $("#l4-9").css("background-color", a) } // k
        if (e.keyCode == 76) { $("#l4-10").css("background-color", a) } // l
        if (e.keyCode == 77) { $("#l5-8").css("background-color", a) } // m
        if (e.keyCode == 78) { $("#l5-7").css("background-color", a) } // n
        if (e.keyCode == 79) { $("#l3-10").css("background-color", a) } // o
        if (e.keyCode == 80) { $("#l3-11").css("background-color", a) } // p
        if (e.keyCode == 81) { $("#l3-2").css("background-color", a) } // q
        if (e.keyCode == 82) { $("#l3-5").css("background-color", a) } // r
        if (e.keyCode == 83) { $("#l4-3").css("background-color", a) } // s
        if (e.keyCode == 84) { $("#l3-6").css("background-color", a) } // t
        if (e.keyCode == 85) { $("#l3-8").css("background-color", a) } // u
        if (e.keyCode == 86) { $("#l5-5").css("background-color", a) } // v
        if (e.keyCode == 87) { $("#l3-3").css("background-color", a) } // w
        if (e.keyCode == 88) { $("#l5-3").css("background-color", a) } // x
        if (e.keyCode == 89) { $("#l3-7").css("background-color", a) } // y
        if (e.keyCode == 90) { $("#l5-2").css("background-color", a) } // z
        if (e.keyCode == 188) { $("#l5-9").css("background-color", a) } // ,
        if (e.keyCode == 190) { $("#l5-10").css("background-color", a) } // .
        if (e.keyCode == 191) { $("#l5-11").css("background-color", a) } // /
        if (e.keyCode == 186) { $("#l4-11").css("background-color", a) } // ;
        if (e.keyCode == 222) { $("#l4-12").css("background-color", a) } // '
        if (e.keyCode == 219) { $("#l3-12").css("background-color", a) } // [
        if (e.keyCode == 221) { $("#l3-13").css("background-color", a) } // ]
        if (e.keyCode == 49) { $("#l2-2").css("background-color", a) } // 1
        if (e.keyCode == 50) { $("#l2-3").css("background-color", a) } // 2
        if (e.keyCode == 51) { $("#l2-4").css("background-color", a) } // 3
        if (e.keyCode == 52) { $("#l2-5").css("background-color", a) } // 4
        if (e.keyCode == 53) { $("#l2-6").css("background-color", a) } // 5
        if (e.keyCode == 54) { $("#l2-7").css("background-color", a) } // 6
        if (e.keyCode == 55) { $("#l2-8").css("background-color", a) } // 7
        if (e.keyCode == 56) { $("#l2-9").css("background-color", a) } // 8
        if (e.keyCode == 57) { $("#l2-10").css("background-color", a) } // 9
        if (e.keyCode == 48) { $("#l2-11").css("background-color", a) } // 0
        if (e.keyCode == 189) { $("#l2-12").css("background-color", a) } // -
        if (e.keyCode == 187) { $("#l2-13").css("background-color", a) } // =
        if (e.keyCode == 220) { $("#l2-14").css("background-color", a) } // \
        if (e.keyCode == 8) { $("#l2-15").css("background-color", a) } // backspace
        if (e.keyCode == 192) { $("#l2-1").css("background-color", a) } // `
        if (e.keyCode == 27) { $("#l1-1").css("background-color", a) } // esc
        if (e.keyCode == 112) { $("#l1-2").css("background-color", a) } // f1
        if (e.keyCode == 113) { $("#l1-3").css("background-color", a) } // f2
        if (e.keyCode == 114) { $("#l1-4").css("background-color", a) } // f3
        if (e.keyCode == 115) { $("#l1-5").css("background-color", a) } // f4
        if (e.keyCode == 116) { $("#l1-6").css("background-color", a) } // f5
        if (e.keyCode == 117) { $("#l1-7").css("background-color", a) } // f6
        if (e.keyCode == 118) { $("#l1-8").css("background-color", a) } // f7
        if (e.keyCode == 119) { $("#l1-9").css("background-color", a) } // f8
        if (e.keyCode == 120) { $("#l1-10").css("background-color", a) } // f9
        if (e.keyCode == 121) { $("#l1-11").css("background-color", a) } // f10
        if (e.keyCode == 122) { $("#l1-12").css("background-color", a) } // f11
        if (e.keyCode == 123) { $("#l1-13").css("background-color", a) } // f12
        if (e.keyCode == 9) { $("#l3-1").css("background-color", a) } // tab
        if (e.keyCode == 20) { $("#l4-1").css("background-color", a) } // cap
        if (e.keyCode == 145) { $("#l1-15").css("background-color", a) } // scroll
        if (e.keyCode == 19) { $("#l1-16").css("background-color", a) } // pause
        if (e.keyCode == 45) { $("#l2-16").css("background-color", a) } // ins
        if (e.keyCode == 36) { $("#l2-17").css("background-color", a) } // home
        if (e.keyCode == 33) { $("#l2-18").css("background-color", a) } // page up
        if (e.keyCode == 46) { $("#l3-15").css("background-color", a) } // delete
        if (e.keyCode == 35) { $("#l3-16").css("background-color", a) } // end
        if (e.keyCode == 34) { $("#l3-17").css("background-color", a) } // page down
        if (e.keyCode == 38) { $("#l5-13").css("background-color", a) } // arrow up
        if (e.keyCode == 37) { $("#l6-9").css("background-color", a) } // arrow left
        if (e.keyCode == 40) { $("#l6-10").css("background-color", a) } // arrow down
        if (e.keyCode == 39) { $("#l6-11").css("background-color", a) } // arrow right
        if (e.keyCode == 91) { $("#l6-2").css("background-color", a) } // left window
        if (e.keyCode == 92) { $("#l6-6").css("background-color", a) } // right window
        if (e.keyCode == 32) { $("#l6-4").css("background-color", a) } // space
        if (e.keyCode == 93) { $("#l6-7").css("background-color", a) } // select key
        if (e.keyCode == 144) { $("#l2-19").css("background-color", a) } // num lock
        if (e.keyCode == 111) { $("#l2-20").css("background-color", a) } // divide
        if (e.keyCode == 106) { $("#l2-21").css("background-color", a) } // muliple
        if (e.keyCode == 109) { $("#l2-22").css("background-color", a) } // sustract
        if (e.keyCode == 103) { $("#l3-18").css("background-color", a) } // numpad7
        if (e.keyCode == 104) { $("#l3-19").css("background-color", a) } // numpad8
        if (e.keyCode == 105) { $("#l3-20").css("background-color", a) } // numpad9
        if (e.keyCode == 107) { $("#l3-21").css("background-color", a) } // add
        if (e.keyCode == 100) { $("#l4-14").css("background-color", a) } // numpad4
        if (e.keyCode == 101) { $("#l4-15").css("background-color", a) } // numpad5
        if (e.keyCode == 102) { $("#l4-16").css("background-color", a) } // numpad6
        if (e.keyCode == 97) { $("#l5-14").css("background-color", a) } // numpad1
        if (e.keyCode == 98) { $("#l5-15").css("background-color", a) } // numpad2
        if (e.keyCode == 99) { $("#l5-16").css("background-color", a) } // numpad3
        if (e.keyCode == 96) { $("#l6-12").css("background-color", a) } // numpad0
        if (e.keyCode == 110) { $("#l6-13").css("background-color", a) } // decimal
        if (e.keyCode == 16)
        {
            if (event.location == 1) { $("#l5-1").css("background-color", a) } // left shift
            if (event.location == 2) { $("#l5-12").css("background-color", a) } // right shift
        }
        if (e.keyCode == 17)
        {
            if (event.location == 1) { $("#l6-1").css("background-color", a) } // left ctrl
            if (event.location == 2) { $("#l6-8").css("background-color", a) } // right ctrl
        }
        if (e.keyCode == 18)
        {
            if (event.location == 1) { $("#l6-3").css("background-color", a) } // left alt
            if (event.location == 2) { $("#l6-5").css("background-color", a) } // right alt
        }
        if (e.keyCode == 13)
        {
            if (event.location == 3)
            {
                $("#l5-17").css("background-color", a) // numpad enter
            }
            else
            {
                $("#l3-14").css("background-color", a) // normal enter
                $("#l4-13").css("background-color", a) // normal enter
                $(".keyhide").css("background-color", a) // normal enter
            }
        }
    });
    $(window).resize(function (e)
    {
        fixres();
    });
});

