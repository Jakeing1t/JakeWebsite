const text = "I want to play their favorite song. But you know they love to sue.";
const text2 = "WHAT SONG?";
const text3 = "*beat plays* ... That song.";
const text4 = "THAT SONG!";
let i = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;

function typeText1() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText1, 40);  // Adjust the speed of typing for the first text
    } else {
        // Start typing the second text after the first one finishes
        typeText2();
    }
}

function typeText2() {
    if (i2 < text2.length) {
        document.getElementById("typing-text-2").innerHTML += text2.charAt(i2);
        i2++;
        setTimeout(typeText2, 30);  // Adjust the speed of typing for the second text
    }
    else{
        typeText3();
    }
}

function typeText3() {
    if (i3 < text3.length) {
        document.getElementById("typing-text-3").innerHTML += text3.charAt(i3);
        i3++;
        setTimeout(typeText3, 30);  // Adjust the speed of typing for the second text
    }
    else{
        typeText4();
    }
}

function typeText4() {
    if (i4 < text4.length) {
        document.getElementById("typing-text-4").innerHTML += text4.charAt(i4);
        i4++;
        setTimeout(typeText4, 30);  // Adjust the speed of typing for the second text
    }
}

typeText1();  // Start the first typing effect