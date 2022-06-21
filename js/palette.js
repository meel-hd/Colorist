//Hex caracters
const data = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"];

//random index
function pickHex1(){
      return Math.floor(Math.random() * data.length);
} 
//creating color code
function generateColorHex(){
  let a = "#";
      for(var x = 0;x < 6;x++){
            a += data[pickHex1()];          
      }
  return a;

}
//the main fuction
function generatePalette(){
  //the 5 colors for the palette
  var colorHex1 = generateColorHex();
  var colorHex2 = generateColorHex();
  var colorHex3 = generateColorHex();
  var colorHex4 = generateColorHex();
  var colorHex5 = generateColorHex(); 
  
  for (var i = 1; i <6; i++) {
    //displaying colors on the palette
    document.getElementById(`color${i}`).style.background = eval(`colorHex${i}`); 
    //printing hexCode string
    document.getElementById(`hex${i}`).innerHTML = eval(`colorHex${i}`);
    //display selected color 
    document.getElementById("selectedColor").style.background = colorHex3;
    //save the colors in localStorsge
    localStorage.setItem(`colorHex${i}`,eval(`colorHex${i}`))
  }
}  

 //display 'clicked' color 
function selectColor(a){
	  field = document.getElementById("color"+a).style.background;
    document.getElementById("selectedColor").style.background = field;
}
//Displaying  localy stored palette by calling it's items
for (var i = 1; i <6; i++) {
    document.getElementById(`color${i}`).style.background = localStorage.getItem(`colorHex${i}`); 
    document.getElementById(`hex${i}`).innerHTML = localStorage.getItem(`colorHex${i}`);
    document.getElementById("selectedColor").style.background =  localStorage.getItem(`colorHex3`);
}