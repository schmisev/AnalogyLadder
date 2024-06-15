var riddle1 = {
    "number": "1",
    "date": "24-06-08",

    "root": "Liebe",
    "hr0": "Hass",

    "hl1": "Wasser",
    "i1": "Feuer",
    "hr1": "Zeug",

    "hl2": "Streich",
    "i2": "Holz",
    "hr2": "Axt",

    "hl3": "Gras",
    "i3": "Sense",
    "hr3": "Schluss",

    "hl4": "Kohle",
    "i4": "Geld",
    "hr4": "Mark",

    "hl5": "Strecke",
    "i5": "Meile",
    "hr5": "Eile",

    "hl6": "bliebe",

    "hex": "... trägt Freund Hein.",
}
var riddle2 = {
    "number": "2",
    "date": "24-06-12",

    "root": "Brot",
    "hr0": "Spiele",

    "hl1": "Kind",
    "i1": "Kegel",
    "hr1": "Kugel",

    "hl2": "Zielscheibe",
    "i2": "Pfeil",
    "hr2": "Geschoss",

    "hl3": "Eiche",
    "i3": "Baum",
    "hr3": "Sonne",

    "hl4": "Mensch",
    "i4": "Essen",
    "hr4": "Wattenscheid",

    "hl5": "Österreich",
    "i5": "Ungarn",
    "hr5": "Budapest",

    "hl6": "Ofen",

    "hex": "... gibts auch als Diagramm.",
}
var riddle3 = {
    "number": "3",
    "date": "24-06-12",

    "root": "Abgrund",
    "hr0": "Tief",

    "hl1": "Boden",
    "i1": "Los",
    "hr1": "Tombola",

    "hl2": "Register",
    "i2": "Orgel",
    "hr2": "Kirche",

    "hl3": "Mischpult",
    "i3": "Disco",
    "hr3": "ABBA",

    "hl4": "Weimarer Klassik",
    "i4": "Goethe",
    "hr4": "Lehrling",

    "hl5": "Mann",
    "i5": "Berg",
    "hr5": "Gipfel",

    "hl6": "Schlucht",

    "hex": "Italienische Scheibe.",
}
var riddle4 = {
    "number": "4",
    "date": "24-06-13",

    "root": "Rex",
    "hr0": "König",

    "hl1": "Pater",
    "i1": "Vater",
    "hr1": "Mutter",

    "hl2": "Stier",
    "i2": "Kuh",
    "hr2": "Coup",

    "hl3": "mehr",
    "i3": "Meer",
    "hr3": "Salz",

    "hl4": "Sprite",
    "i4": "Zucker",
    "hr4": "schlecken",

    "hl5": "Pony",
    "i5": "Hof",
    "hr5": "doof",

    "hl6": "Hex",

    "hex": "C.D. Friedrich wandert über der Nebelvariante.",
}

var engRiddle1 = {
    "number": "1",
    "date": "24-06-13",

    "root": "plane",
    "hr0": "hangar",

    "hl1": "car",
    "i1": "carport",
    "hr1": "house",

    "hl2": "hill",
    "i2": "mountain",
    "hr2": "work",

    "hl3": "loads",
    "i3": "fun",
    "hr3": "misery",

    "hl4": "love",
    "i4": "hate",
    "hr4": "rate",

    "hl5": "hope",
    "i5": "rope",
    "hr5": "hang",

    "hl6": "handplane",

    "hex": "Rhymes with gun.",
}

var engRiddle2 = {
    "number": "2",
    "date": "24-06-14",

    "root": "wild",
    "hr0": "tame",

    "hl1": "beast",
    "i1": "pet",
    "hr1": "sounds",

    "hl2": "abbey",
    "i2": "road",
    "hr2": "path",

    "hl3": "river",
    "i3": "creek",
    "hr3": "meek",

    "hl4": "look",
    "i4": "rook",
    "hr4": "bishop",

    "hl5": "straight",
    "i5": "diagonal",
    "hr5": "rectangle",

    "hl6": "safari",

    "hex": "Cripple ...",
}

var engRiddle3 = {
    "number": "3",
    "date": "24-06-15",

    "root": "gas",
    "hr0": "shell",

    "hl1": "search",
    "i1": "google",
    "hr1": "goggle",

    "hl2": "loo",
    "i2": "log",
    "hr2": "x",

    "hl3": "x",
    "i3": ["exp", "exp(x)", "e^x", "e"],
    "hr3": "export",

    "hl4": "apt",
    "i4": "apartment",
    "hr4": "complex",

    "hl5": "cell",
    "i5": "block",
    "hr5": "obstruct",

    "hl6": "vapour",

    "hex": "A gamer might earn this.",
}


var riddles = [
    riddle4,
    riddle3,
    riddle2,
    riddle1
];

var engRiddles = [
    engRiddle3,
    engRiddle2,
    engRiddle1,
];

var riddle;
var riddleId;

var game_state = [0, 0, 0, 0, 0];
var lang = "de";

function setup(r = 0) {
    game_state = [0, 0, 0, 0, 0];
    riddleId = r;

    if (lang === "de") {
        riddle = riddles[riddleId];
        document.getElementById("ui-lang").innerHTML = "de";
    } else {
        riddle = engRiddles[riddleId];
        document.getElementById("ui-lang").innerHTML = "en";
    }

    document.getElementById("riddle-id").innerHTML = riddle.number;
    document.getElementById("riddle-date").innerHTML = riddle.date;

    for (const e of document.getElementsByClassName("guess-input")) {
        e.disabled = false;
        e.classList.remove("correct");
        e.classList.remove("false");
    }

    for (const [key, val] of Object.entries(riddle)) {
        if (key === "root") {
            Array.from(document.getElementsByClassName("root-cell")).forEach(element => {
                element.innerHTML = val;
            });
        }
        else {
            if (key[0] === "i") document.getElementById(key).value = "";
            else if (key[0] === "h") document.getElementById(key).innerHTML = val;
        }
    }
}

function checkGuess(inp) {
    if(event.key === 'Enter') {

        var correct = false;
        if (Array.isArray(riddle[inp.id])) {
            inp.value = riddle[inp.id][0];
            for (const r of riddle[inp.id]) {
                if (inp.value.toLowerCase() === r.toLowerCase()) {
                    correct = true;
                    break;
                }
            }
        } else {
            inp.value = riddle[inp.id];
            if (inp.value.toLowerCase() === riddle[inp.id].toLowerCase()) {
                correct = true;
            }
        } 

        if (correct) {
            //inp.style.backgroundColor = "rgb(120, 200, 30)";
            inp.classList.add("correct");
            console.log(inp.value, "is correct!");
            game_state[inp.id.slice(1) - 1] = 1;
        } else {
            //inp.style.backgroundColor = "red";
            inp.classList.add("false");
            console.log(inp.value, "is false!");
            game_state[inp.id.slice(1) - 1] = -1;
        }

        console.log(inp, inp.dataset);

        inp.disabled = true;
        console.log(game_state);

        if (!game_state.includes(0)) {
            endGame();
        }
    }
}

String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
function () {
    "use strict";
    var str = this.toString();
    if (arguments.length) {
        var t = typeof arguments[0];
        var key;
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(arguments)
            : arguments[0];

        for (key in args) {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
    }

    return str;
};

function constructCopyString(delim) {
    var copy_str = `Analogie-Treppe${delim}${riddle.date}${delim}`
    var block_str = ""

    for (const [i, v] of game_state.entries()) {
        block_str += "⬛".repeat(i) + (v === 1 ? "🟩" : "🟥") + "⬛".repeat(4 - i) + delim;
    }
    copy_str += block_str;
    return copy_str;
}

function endGame() {
    var copy_str = constructCopyString("<br>");
    //alert(copy_str);
    document.getElementById("modal-text").innerHTML = copy_str;
    showModal();
}

function copyForShare() {
    var copy_str = constructCopyString("\n");
    navigator.clipboard.writeText(copy_str);
    document.getElementById("copy-msg").innerHTML = "Kopiert!";
    document.getElementById("copy-msg").classList.add("fade-me-in");
}

// When the user clicks on the button, open the modal
function showModal() {
    document.getElementById("game-end-modal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeWithX() {
    document.getElementById("game-end-modal").style.display = "none";
}

function nextRiddle() {
    if (riddleId < riddles.length - 1) riddleId = (riddleId + 1);
    setup(riddleId);
}

function lastRiddle() {
    if (riddleId > 0) riddleId = (riddleId - 1);
    setup(riddleId);
}

function switchLanguage() {
    switch(lang) {
        case "de":
            lang = "en";
            break;
        case "en":
            lang = "de"
            break;
    }

    setup(0);
}