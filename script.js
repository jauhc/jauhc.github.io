function init() {
    dogshit();
}

function clear(which) {
    if (which == "all")
        var a = document.getElementsByTagName("td");
    else
        var a = document.getElementsByClassName(which);
    if (a.length = 0) return;
    for (let i = 0; i < a.length; i++) {
        a[i].style = "background: black;";
    }
}

function set(which, to) {
    var s = Math.floor(to / 10, 10);
    var ss = to % 10;
    s = "0000" + s.toString(2); // dumb fix so make it proper type
    ss = "0000" + ss.toString(2);
    var x = "0";
    if (which == "hours") x = "h";
    if (which == "minutes") x = "m";
    if (which == "seconds") x = "s";
    var y = [[0, 0, 0, 0], [0, 0, 0, 0]];
    switch (x) {
        case "h":
            y[0][0] = document.getElementById(`1${x}`);
            y[0][1] = document.getElementById(`2${x}`);
            y[1][0] = document.getElementById(`1${x}${x}`);
            y[1][1] = document.getElementById(`2${x}${x}`);
            y[1][2] = document.getElementById(`4${x}${x}`);
            y[1][3] = document.getElementById(`8${x}${x}`);

        case "m":
            y[0][0] = document.getElementById(`1${x}`);
            y[0][1] = document.getElementById(`2${x}`);
            y[0][2] = document.getElementById(`4${x}`);
            y[1][0] = document.getElementById(`1${x}${x}`);
            y[1][1] = document.getElementById(`2${x}${x}`);
            y[1][2] = document.getElementById(`4${x}${x}`);
            y[1][3] = document.getElementById(`8${x}${x}`);

        case "s":
            y[0][0] = document.getElementById(`1${x}`);
            y[0][1] = document.getElementById(`2${x}`);
            y[0][2] = document.getElementById(`4${x}`);
            y[1][0] = document.getElementById(`1${x}${x}`);
            y[1][1] = document.getElementById(`2${x}${x}`);
            y[1][2] = document.getElementById(`4${x}${x}`);
            y[1][3] = document.getElementById(`8${x}${x}`);

        default: // do this anyway for better readability
            for (var i = 0; i < 4; i++) {
                if (!!y[0][i]) {
                    if (s.charAt(s.length - (1 + i)) == "1")
                        y[0][i].style = "background: red;";
                    else
                        y[0][i].style = "background: transparent;";
                }
                if (!!y[1][i]) {
                    if (ss.charAt(ss.length - (1 + i)) == "1")
                        y[1][i].style = "background: red;";
                    else
                        y[1][i].style = "background: transparent;";
                }
            }
            break;
    }
}

function dogshit() { // no it says THE DOC

    setInterval(() => {
        var now = new Date();
        set("hours", now.getHours());
        set("minutes", now.getMinutes());
        set("seconds", now.getSeconds());
    }, 75);
}