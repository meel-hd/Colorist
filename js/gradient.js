//Hexcode caracters
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];
//random index
function pickHex1() {
  return Math.floor(Math.random() * data.length);
}

//Second color
function generateColorHex2() {
  let a = "#";
  for (var x = 0; x < 6; x++) {
    a += data[pickHex1()];
  }
  return a;
}

//the main function 'generate color'
function pickGradient() {
  let colorHex = "#";
  for (var x = 0; x < 6; x++) {
    colorHex += data[pickHex1()];
  }
  var colorHex1 = colorHex;
  var colorHex2 = generateColorHex2();
  //displaying the gradient
    document.getElementById("colorView").style.background = `linear-gradient(to top left,${colorHex1},${colorHex2}`;
 
  for (var j = 1; j < 3; j++) {
    //displaying string hex codes
    document.getElementById(`colorHex${j}`).innerHTML = eval(`colorHex${j}`);
    document.getElementById(`colorHex${j}`).style.color = eval(`colorHex${j}`);
    //storing color hex
    localStorage.setItem(`savedGradient${j}`,eval(`colorHex${j}`));
  }
}


//display saved gradient
document.getElementById("colorView").style.background = `linear-gradient(to top left,${ localStorage.getItem('savedGradient1') },${ localStorage.getItem('savedGradient2') }`;
//displaying the actual hex codes
  document.getElementById("colorHex1").innerHTML = localStorage.getItem('savedGradient1');
  document.getElementById("colorHex1").style.color = localStorage.getItem('savedGradient1');

  document.getElementById("colorHex2").innerHTML = localStorage.getItem('savedGradient2');
  document.getElementById("colorHex2").style.color = localStorage.getItem('savedGradient2');