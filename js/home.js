//managing the color
document.getElementById('colorView').style.background = localStorage.getItem("savedColor");
document.getElementById('colorHex').innerHTML = localStorage.getItem("savedColor");
document.getElementById('colorHex').style.color = localStorage.getItem("savedColor");


//managing the gradient 
document.getElementById('gradientView').style.background = `linear-gradient(to top left,${ localStorage.getItem('savedGradient1') },${ localStorage.getItem('savedGradient2') }`;

document.getElementById('gradientHex1').innerHTML = localStorage.getItem("savedGradient1");
document.getElementById('gradientHex1').style.color = localStorage.getItem("savedGradient1");

document.getElementById('gradientHex2').innerHTML = localStorage.getItem("savedGradient2");
document.getElementById('gradientHex2').style.color = localStorage.getItem("savedGradient2");


//managing the palette 
for (var i = 1; i <6; i++) {
    //displaying the generated colors on the palette
    document.getElementById(`color${i}`).style.background = localStorage.getItem(`colorHex${i}`); 
    //printing the hexCode string for each color by a loop
    document.getElementById(`hex${i}`).innerHTML = localStorage.getItem(`colorHex${i}`); 
} 