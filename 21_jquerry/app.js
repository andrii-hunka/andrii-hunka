$(document).ready(function() {
    // let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let numbers = [1,2,3,4,5,6,7,8,9,10,12,15,13,14,11];
    let seconds = 0;
    let minutes = 0;
    let steps = 0;
    let index;
    let timer = new Timer(startTimer,1000);
    // numbers.sort(function(a, b){return 0.5 - Math.random()});
    numbers.forEach(number => {
        $('#playField').append($("<div>").addClass("tile").text(number));
    });
    $('#playField').append($("<div>").addClass("empty"));
    function isNearEmpty(el) {
        let tiles = $('#playField').children().each((i,element) => {
            if(el === element) {
                index = i;
            }
        });
        if($(tiles[index - 1]).hasClass("empty") || $(tiles[index + 1]).hasClass("empty") || $(tiles[index + 4]).hasClass("empty") || $(tiles[index - 4]).hasClass("empty")) {
            return true;
        }
        return false;
    }
    $("#playField").click( event => {
        if(isWin()) {
            return;
        }
        let target = event.target;
        if(isNearEmpty(target)) {
            $('#numberOfSteps').text(++steps);
            $(target).animate({
                left: $('.empty:eq(0)').offset().left - $(target).offset().left,
                top: $('.empty:eq(0)').offset().top - $(target).offset().top
            }, 300, () => {
                $(target).removeAttr("style");
                let empty = $('<div></div>');
                $(target).replaceWith(empty);
                $('.empty').replaceWith(target);
                $(empty).toggleClass("empty");
            });
            // if(isWin()) {
            //     return;
            // }
        }
    })
    $('#new').click(() => {
        timer.start();
        steps = 0;
        $("#clock").text("00:00");
        $("#numberOfSteps").text("0");
        minutes = 0;
        seconds = 0;
        $('#playField').empty();
        numbers.sort(function(a, b){return 0.5 - Math.random()});
        numbers.forEach(number => {
            $('#playField').append($("<div>").addClass("tile").text(number));
        });
        $('#playField').append($("<div>").addClass("empty"));
    });
    $('#win').click(() => {
        timer.stop();
        $('#playField').empty();
        numbers.sort(function(a, b){return a - b});
        numbers.forEach(number => {
            $('#playField').append($("<div>").addClass("tile").text(number));
        });
        $('#playField').append($("<div>").addClass("empty"));
        alert("you won");
    });
    function isWin() {
        let tiles = $('#playField').children();
        for(let i = 0; i < tiles.length - 1 ; i++) {
            if($(tiles[i]).text() !== (i + 1).toString()) {
                return false;
            }
        }
        timer.stop();
        alert("Won");
        return true;
    }
    function Timer(fn, t) {
        let timerObj = setInterval(fn, t);
        this.stop = function() {
            if (timerObj) {
                clearInterval(timerObj);
                timerObj = null;
            }
            return this;
        }
        // start timer using current settings (if it's not already running)
        this.start = function() {
            if (!timerObj) {
                this.stop();
                timerObj = setInterval(fn, t);
            }
            return this;
        }
        // start with new interval, stop current interval
        this.reset = function(newT) {
            
            t = newT;
            return this.stop().start();
        }
    }
    function startTimer() {
        seconds++;
        if(seconds > 59) {
            minutes++;
            seconds = 0;
        }
        let minute = minutes.toString();
        let second = seconds.toString();
        if(minute.length < 2) {
            minute = `0${minute}`;
        }
        if(second.length < 2) {
            second = `0${second}`;
        }
        $("#clock").text(`${minute}:${second}`);
    }
});