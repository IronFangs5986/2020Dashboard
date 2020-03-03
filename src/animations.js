var output;

function setLaunchpad(one, two, three, four, five, six, seven, eight, row) {
    if (one == "O") {
        output.playNote(row+"2", 2);
    } else {
        output.stopNote(row+"2", 2);
    }
    if (two == "O") {
        output.playNote(row+"3", 2);
    } else {
        output.stopNote(row+"3", 2);
    }
    if (three == "O") {
        output.playNote(row+"4", 2);
    } else {
        output.stopNote(row+"4", 2);
    }
    if (four == "O") {
        output.playNote(row+"5", 2);
    } else {
        output.stopNote(row+"5", 2);
    }
    if (five == "O") {
        output.playNote(row+"6", 2);
    } else {
        output.stopNote(row+"6", 2);
    }
    if (six == "O") {
        output.playNote(row+"7", 2);
    } else {
        output.stopNote(row+"7", 2);
    }
    if (seven == "O") {
        output.playNote(row+"8", 2);
    } else {
        output.stopNote(row+"8", 2);
    }
    if (eight == "O") {
        if (row == "A") {
            output.playNote("C#2", 2);
        } else if (row == "B") {
            output.playNote("C#3", 2);
        } else if (row == "C") {
            output.playNote("C#4", 2);
        } else if (row == "D") {
            output.playNote("C#5", 2);
        } else if (row == "E") {
            output.playNote("C#6", 2);
        } else if (row == "F") {
            output.playNote("C#7", 2);
        } else if (row == "G") {
            output.playNote("C#8", 2);
        } else if (row == "A#") {
            output.playNote("C#9", 2);
        }
    } else {
        if (row == "A") {
            output.stopNote("C#2", 2);
        } else if (row == "B") {
            output.stopNote("C#3", 2);
        } else if (row == "C") {
            output.stopNote("C#4", 2);
        } else if (row == "D") {
            output.stopNote("C#5", 2);
        } else if (row == "E") {
            output.stopNote("C#6", 2);
        } else if (row == "F") {
            output.stopNote("C#7", 2);
        } else if (row == "G") {
            output.stopNote("C#8", 2);
        } else if (row == "A#") {
            output.stopNote("C#9", 2);
        }
    }
}

var frames = 2;
var currentFrame = 0;
var secondInterval = .125;

/*
setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "A");
setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "B");
setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "C");
setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "D");
setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "E");
setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "F");
setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "G");
setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "A#");
*/

function teamNumber() {

    if (currentFrame == 0) {
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", "O", "A");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", "O", "B");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", "O", "C");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", "O", "D");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "E");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "F");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", "O", "G");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 1) {
        setLaunchpad(" ", " ", " ", " ", " ", " ", "O", "O", "A");
        setLaunchpad(" ", " ", " ", " ", " ", " ", "O", " ", "B");
        setLaunchpad(" ", " ", " ", " ", " ", " ", "O", " ", "C");
        setLaunchpad(" ", " ", " ", " ", " ", " ", "O", "O", "D");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "E");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "F");
        setLaunchpad(" ", " ", " ", " ", " ", " ", "O", " ", "G");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", "O", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 2) {
        setLaunchpad(" ", " ", " ", " ", " ", "O", "O", "O", "A");
        setLaunchpad(" ", " ", " ", " ", " ", "O", " ", " ", "B");
        setLaunchpad(" ", " ", " ", " ", " ", "O", " ", " ", "C");
        setLaunchpad(" ", " ", " ", " ", " ", "O", "O", "O", "D");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "E");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "F");
        setLaunchpad(" ", " ", " ", " ", " ", "O", " ", " ", "G");
        setLaunchpad(" ", " ", " ", " ", " ", " ", "O", "O", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 3) {
        setLaunchpad(" ", " ", " ", " ", "O", "O", "O", "O", "A");
        setLaunchpad(" ", " ", " ", " ", "O", " ", " ", " ", "B");
        setLaunchpad(" ", " ", " ", " ", "O", " ", " ", " ", "C");
        setLaunchpad(" ", " ", " ", " ", "O", "O", "O", "O", "D");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "E");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "F");
        setLaunchpad(" ", " ", " ", " ", "O", " ", " ", " ", "G");
        setLaunchpad(" ", " ", " ", " ", " ", "O", "O", "O", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 4) {
        setLaunchpad(" ", " ", " ", "O", "O", "O", "O", "O", "A");
        setLaunchpad(" ", " ", " ", "O", " ", " ", " ", " ", "B");
        setLaunchpad(" ", " ", " ", "O", " ", " ", " ", " ", "C");
        setLaunchpad(" ", " ", " ", "O", "O", "O", "O", " ", "D");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", "O", "E");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", "O", "F");
        setLaunchpad(" ", " ", " ", "O", " ", " ", " ", "O", "G");
        setLaunchpad(" ", " ", " ", " ", "O", "O", "O", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 5) {
        setLaunchpad(" ", " ", "O", "O", "O", "O", "O", " ", "A");
        setLaunchpad(" ", " ", "O", " ", " ", " ", " ", " ", "B");
        setLaunchpad(" ", " ", "O", " ", " ", " ", " ", " ", "C");
        setLaunchpad(" ", " ", "O", "O", "O", "O", " ", " ", "D");
        setLaunchpad(" ", " ", " ", " ", " ", " ", "O", " ", "E");
        setLaunchpad(" ", " ", " ", " ", " ", " ", "O", " ", "F");
        setLaunchpad(" ", " ", "O", " ", " ", " ", "O", " ", "G");
        setLaunchpad(" ", " ", "", "O", "O", "O", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 6) {
        setLaunchpad(" ", "O", "O", "O", "O", "O", " ", " ", "A");
        setLaunchpad(" ", "O", " ", " ", " ", " ", " ", "O", "B");
        setLaunchpad(" ", "O", " ", " ", " ", " ", " ", "O", "C");
        setLaunchpad(" ", "O", "O", "O", "O", " ", " ", " ", "D");
        setLaunchpad(" ", " ", " ", " ", " ", "O", " ", " ", "E");
        setLaunchpad(" ", " ", " ", " ", " ", "O", " ", " ", "F");
        setLaunchpad(" ", "O", " ", " ", " ", "O", " ", "O", "G");
        setLaunchpad(" ", " ", "O", "O", "O", " ", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 7) {
        setLaunchpad("O", "O", "O", "O", "O", " ", " ", "O", "A");
        setLaunchpad("O", " ", " ", " ", " ", " ", "O", " ", "B");
        setLaunchpad("O", " ", " ", " ", " ", " ", "O", " ", "C");
        setLaunchpad("O", "O", "O", "O", " ", " ", " ", "O", "D");
        setLaunchpad(" ", " ", " ", " ", "O", " ", " ", " ", "E");
        setLaunchpad(" ", " ", " ", " ", "O", " ", " ", " ", "F");
        setLaunchpad("O", " ", " ", " ", "O", " ", "O", " ", "G");
        setLaunchpad(" ", "O", "O", "O", " ", " ", " ", "O", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 8) {
        setLaunchpad("O", "O", "O", "O", " ", " ", "O", "O", "A");
        setLaunchpad(" ", " ", " ", " ", " ", "O", " ", " ", "B");
        setLaunchpad(" ", " ", " ", " ", " ", "O", " ", " ", "C");
        setLaunchpad("O", "O", "O", " ", " ", " ", "O", "O", "D");
        setLaunchpad(" ", " ", " ", "O", " ", " ", " ", " ", "E");
        setLaunchpad(" ", " ", " ", "O", " ", " ", " ", " ", "F");
        setLaunchpad(" ", " ", " ", "O", " ", "O", " ", " ", "G");
        setLaunchpad("O", "O", "O", " ", " ", " ", "O", "O", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 9) {
        setLaunchpad("O", "O", "O", " ", " ", "O", "O", "O", "A");
        setLaunchpad(" ", " ", " ", " ", "O", " ", " ", " ", "B");
        setLaunchpad(" ", " ", " ", " ", "O", " ", " ", " ", "C");
        setLaunchpad("O", "O", " ", " ", " ", "O", "O", "O", "D");
        setLaunchpad(" ", " ", "O", " ", " ", " ", " ", " ", "E");
        setLaunchpad(" ", " ", "O", " ", " ", " ", " ", " ", "F");
        setLaunchpad(" ", " ", "O", " ", "O", " ", " ", " ", "G");
        setLaunchpad("O", "O", " ", " ", " ", "O", "O", "O", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 10) {
        setLaunchpad("O", "O", " ", " ", "O", "O", "O", " ", "A");
        setLaunchpad(" ", " ", " ", "O", " ", " ", " ", "O", "B");
        setLaunchpad(" ", " ", " ", "O", " ", " ", " ", "O", "C");
        setLaunchpad("O", " ", " ", " ", "O", "O", "O", "O", "D");
        setLaunchpad(" ", "O", " ", " ", " ", " ", " ", "O", "E");
        setLaunchpad(" ", "O", " ", " ", " ", " ", " ", "O", "F");
        setLaunchpad(" ", "O", " ", "O", " ", " ", " ", "O", "G");
        setLaunchpad("O", " ", " ", " ", "O", "O", "O", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 11) {
        setLaunchpad("O", " ", " ", "O", "O", "O", " ", " ", "A");
        setLaunchpad(" ", " ", "O", " ", " ", " ", "O", " ", "B");
        setLaunchpad(" ", " ", "O", " ", " ", " ", "O", " ", "C");
        setLaunchpad(" ", " ", " ", "O", "O", "O", "O", " ", "D");
        setLaunchpad("O", " ", " ", " ", " ", " ", "O", " ", "E");
        setLaunchpad("O", " ", " ", " ", " ", " ", "O", " ", "F");
        setLaunchpad("O", " ", "O", " ", " ", " ", "O", " ", "G");
        setLaunchpad(" ", " ", " ", "O", "O", "O", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 12) {
        setLaunchpad(" ", " ", "O", "O", "O", " ", " ", " ", "A");
        setLaunchpad(" ", "O", " ", " ", " ", "O", " ", "O", "B");
        setLaunchpad(" ", "O", " ", " ", " ", "O", " ", "O", "C");
        setLaunchpad(" ", " ", "O", "O", "O", "O", " ", " ", "D");
        setLaunchpad(" ", " ", " ", " ", " ", "O", " ", "O", "E");
        setLaunchpad(" ", " ", " ", " ", " ", "O", " ", "O", "F");
        setLaunchpad(" ", "O", " ", " ", " ", "O", " ", "O", "G");
        setLaunchpad(" ", " ", "O", "O", "O", " ", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 13) {
        setLaunchpad(" ", "O", "O", "O", " ", " ", " ", "O", "A");
        setLaunchpad("O", " ", " ", " ", "O", " ", "O", " ", "B");
        setLaunchpad("O", " ", " ", " ", "O", " ", "O", " ", "C");
        setLaunchpad(" ", "O", "O", "O", "O", " ", " ", "O", "D");
        setLaunchpad(" ", " ", " ", " ", "O", " ", "O", " ", "E");
        setLaunchpad(" ", " ", " ", " ", "O", " ", "O", " ", "F");
        setLaunchpad("O", " ", " ", " ", "O", " ", "O", " ", "G");
        setLaunchpad(" ", "O", "O", "O", " ", " ", " ", "O", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 14) {
        setLaunchpad("O", "O", "O", " ", " ", " ", "O", "O", "A");
        setLaunchpad(" ", " ", " ", "O", " ", "O", " ", " ", "B");
        setLaunchpad(" ", " ", " ", "O", " ", "O", " ", " ", "C");
        setLaunchpad("O", "O", "O", "O", " ", " ", "O", "O", "D");
        setLaunchpad(" ", " ", " ", "O", " ", "O", " ", " ", "E");
        setLaunchpad(" ", " ", " ", "O", " ", "O", " ", " ", "F");
        setLaunchpad(" ", " ", " ", "O", " ", "O", " ", " ", "G");
        setLaunchpad("O", "O", "O", " ", " ", " ", "O", "O", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 15) {
        setLaunchpad("O", "O", " ", " ", " ", "O", "O", "O", "A");
        setLaunchpad(" ", " ", "O", " ", "O", " ", " ", " ", "B");
        setLaunchpad(" ", " ", "O", " ", "O", " ", " ", " ", "C");
        setLaunchpad("O", "O", "O", " ", " ", "O", "O", "O", "D");
        setLaunchpad(" ", " ", "O", " ", "O", " ", " ", " ", "E");
        setLaunchpad(" ", " ", "O", " ", "O", " ", " ", " ", "F");
        setLaunchpad(" ", " ", "O", " ", "O", " ", " ", " ", "G");
        setLaunchpad("O", "O", " ", " ", " ", "O", "O", "O", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 16) {
        setLaunchpad("O", " ", " ", " ", "O", "O", "O", " ", "A");
        setLaunchpad(" ", "O", " ", "O", " ", " ", " ", "O", "B");
        setLaunchpad(" ", "O", " ", "O", " ", " ", " ", "O", "C");
        setLaunchpad("O", "O", " ", " ", "O", "O", "O", " ", "D");
        setLaunchpad(" ", "O", " ", "O", " ", " ", " ", "O", "E");
        setLaunchpad(" ", "O", " ", "O", " ", " ", " ", "O", "F");
        setLaunchpad(" ", "O", " ", "O", " ", " ", " ", "O", "G");
        setLaunchpad("O", " ", " ", " ", "O", "O", "O", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 17) {
        setLaunchpad(" ", " ", " ", "O", "O", "O", " ", " ", "A");
        setLaunchpad("O", " ", "O", " ", " ", " ", "O", " ", "B");
        setLaunchpad("O", " ", "O", " ", " ", " ", "O", " ", "C");
        setLaunchpad("O", " ", "0", "O", "O", "O", " ", " ", "D");
        setLaunchpad("O", " ", "O", " ", " ", " ", "O", " ", "E");
        setLaunchpad("O", " ", "O", " ", " ", " ", "O", " ", "F");
        setLaunchpad("O", " ", "O", " ", " ", " ", "O", " ", "G");
        setLaunchpad(" ", " ", " ", "O", "O", "O", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 18) {
        setLaunchpad(" ", " ", "O", "O", "O", " ", " ", " ", "A");
        setLaunchpad(" ", "O", " ", " ", " ", "O", " ", "O", "B");
        setLaunchpad(" ", "O", " ", " ", " ", "O", " ", "O", "C");
        setLaunchpad(" ", " ", "O", "O", "O", " ", " ", "O", "D");
        setLaunchpad(" ", "O", " ", " ", " ", "O", " ", "O", "E");
        setLaunchpad(" ", "O", " ", " ", " ", "O", " ", "O", "F");
        setLaunchpad(" ", "O", " ", " ", " ", "O", " ", "O", "G");
        setLaunchpad(" ", " ", "O", "O", "O", " ", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 19) {
        setLaunchpad(" ", "O", "O", "O", " ", " ", " ", "O", "A");
        setLaunchpad("O", " ", " ", " ", "O", " ", "O", " ", "B");
        setLaunchpad("O", " ", " ", " ", "O", " ", "O", " ", "C");
        setLaunchpad(" ", "O", "O", "O", " ", " ", "O", "O", "D");
        setLaunchpad("O", " ", " ", " ", "O", " ", "O", " ", "E");
        setLaunchpad("O", " ", " ", " ", "O", " ", "O", " ", "F");
        setLaunchpad("O", " ", " ", " ", "O", " ", "O", " ", "G");
        setLaunchpad(" ", "O", "O", "O", " ", " ", " ", "O", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 20) {
        setLaunchpad("O", "O", "O", " ", " ", " ", "O", "O", "A");
        setLaunchpad(" ", " ", " ", "O", " ", "O", " ", " ", "B");
        setLaunchpad(" ", " ", " ", "O", " ", "O", " ", " ", "C");
        setLaunchpad("O", "O", "O", " ", " ", "O", "O", "O", "D");
        setLaunchpad(" ", " ", " ", "O", " ", "O", " ", " ", "E");
        setLaunchpad(" ", " ", " ", "O", " ", "O", " ", " ", "F");
        setLaunchpad(" ", " ", " ", "O", " ", "O", " ", " ", "G");
        setLaunchpad("O", "O", "O", " ", " ", " ", "O", "O", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 21) {
        setLaunchpad("O", "O", " ", " ", " ", "O", "O", "O", "A");
        setLaunchpad(" ", " ", "O", " ", "O", " ", " ", " ", "B");
        setLaunchpad(" ", " ", "O", " ", "O", " ", " ", " ", "C");
        setLaunchpad("O", "O", " ", " ", "O", "O", "O", "O", "D");
        setLaunchpad(" ", " ", "O", " ", "O", " ", " ", " ", "E");
        setLaunchpad(" ", " ", "O", " ", "O", " ", " ", " ", "F");
        setLaunchpad(" ", " ", "O", " ", "O", " ", " ", " ", "G");
        setLaunchpad("O", "O", " ", " ", " ", "O", "O", "O", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 22) {
        setLaunchpad("O", " ", " ", " ", "O", "O", "O", "", "A");
        setLaunchpad(" ", "O", " ", "O", " ", " ", " ", "O", "B");
        setLaunchpad(" ", "O", " ", "O", " ", " ", " ", " ", "C");
        setLaunchpad("O", " ", " ", "O", "O", "O", "O", " ", "D");
        setLaunchpad(" ", "O", " ", "O", " ", " ", " ", "O", "E");
        setLaunchpad(" ", "O", " ", "O", " ", " ", " ", "O", "F");
        setLaunchpad(" ", "O", " ", "O", " ", " ", " ", "O", "G");
        setLaunchpad("O", " ", " ", " ", "O", "O", "O", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 23) {
        setLaunchpad(" ", " ", " ", "O", "O", "O", " ", " ", "A");
        setLaunchpad("O", " ", "O", " ", " ", " ", "O", " ", "B");
        setLaunchpad("O", " ", "O", " ", " ", " ", " ", " ", "C");
        setLaunchpad(" ", " ", "O", "O", "O", "O", " ", " ", "D");
        setLaunchpad("O", " ", "O", " ", " ", " ", "O", " ", "E");
        setLaunchpad("O", " ", "O", " ", " ", " ", "O", " ", "F");
        setLaunchpad("O", " ", "O", " ", " ", " ", "O", " ", "G");
        setLaunchpad(" ", " ", " ", "O", "O", "O", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 24) {
        setLaunchpad(" ", " ", "O", "O", "O", " ", " ", " ", "A");
        setLaunchpad(" ", "O", " ", " ", " ", "O", " ", " ", "B");
        setLaunchpad(" ", "O", " ", " ", " ", " ", " ", " ", "C");
        setLaunchpad(" ", "O", "O", "O", "O", " ", " ", " ", "D");
        setLaunchpad(" ", "O", " ", " ", " ", "O", " ", " ", "E");
        setLaunchpad(" ", "O", " ", " ", " ", "O", " ", " ", "F");
        setLaunchpad(" ", "O", " ", " ", " ", "O", " ", " ", "G");
        setLaunchpad(" ", " ", "O", "O", "O", " ", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 25) {
        setLaunchpad(" ", "O", "O", "O", " ", " ", " ", " ", "A");
        setLaunchpad("O", " ", " ", " ", "O", " ", " ", " ", "B");
        setLaunchpad("O", " ", " ", " ", " ", " ", " ", " ", "C");
        setLaunchpad("O", "O", "O", "O", " ", " ", " ", " ", "D");
        setLaunchpad("O", " ", " ", " ", "O", " ", " ", " ", "E");
        setLaunchpad("O", " ", " ", " ", "O", " ", " ", " ", "F");
        setLaunchpad("O", " ", " ", " ", "O", " ", " ", " ", "G");
        setLaunchpad(" ", "O", "O", "O", " ", " ", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 26) {
        setLaunchpad("O", "O", "O", " ", " ", " ", " ", " ", "A");
        setLaunchpad(" ", " ", " ", "O", " ", " ", " ", " ", "B");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "C");
        setLaunchpad("O", "O", "O", " ", " ", " ", " ", " ", "D");
        setLaunchpad(" ", " ", " ", "O", " ", " ", " ", " ", "E");
        setLaunchpad(" ", " ", " ", "O", " ", " ", " ", " ", "F");
        setLaunchpad(" ", " ", " ", "O", " ", " ", " ", " ", "G");
        setLaunchpad("O", "O", "O", " ", " ", " ", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 27) {
        setLaunchpad("O", "O", " ", " ", " ", " ", " ", " ", "A");
        setLaunchpad(" ", " ", "O", " ", " ", " ", " ", " ", "B");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "C");
        setLaunchpad("O", "O", " ", " ", " ", " ", " ", " ", "D");
        setLaunchpad(" ", " ", "O", " ", " ", " ", " ", " ", "E");
        setLaunchpad(" ", " ", "O", " ", " ", " ", " ", " ", "F");
        setLaunchpad(" ", " ", "O", " ", " ", " ", " ", " ", "G");
        setLaunchpad("O", "O", " ", " ", " ", " ", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 28) {
        setLaunchpad("O", " ", " ", " ", " ", " ", " ", " ", "A");
        setLaunchpad(" ", "O", " ", " ", " ", " ", " ", " ", "B");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "C");
        setLaunchpad("O", " ", " ", " ", " ", " ", " ", " ", "D");
        setLaunchpad(" ", "O", " ", " ", " ", " ", " ", " ", "E");
        setLaunchpad(" ", "O", " ", " ", " ", " ", " ", " ", "F");
        setLaunchpad(" ", "O", " ", " ", " ", " ", " ", " ", "G");
        setLaunchpad("O", " ", " ", " ", " ", " ", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 29) {
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "A");
        setLaunchpad("O", " ", " ", " ", " ", " ", " ", " ", "B");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "C");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "D");
        setLaunchpad("O", " ", " ", " ", " ", " ", " ", " ", "E");
        setLaunchpad("O", " ", " ", " ", " ", " ", " ", " ", "F");
        setLaunchpad("O", " ", " ", " ", " ", " ", " ", " ", "G");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "A#");
        currentFrame = currentFrame + 1;
    } else if (currentFrame == 30) {
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "A");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "B");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "C");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "D");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "E");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "F");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "G");
        setLaunchpad(" ", " ", " ", " ", " ", " ", " ", " ", "A#");
        currentFrame = 0;
    }
}

function setupAnimations(WebMidi) {
    output = WebMidi.outputs[WebMidi.outputs.length - 1];
    window.setInterval(function () {
        teamNumber();
    }, secondInterval * 1000);
}
