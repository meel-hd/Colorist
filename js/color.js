//Hex caracters
const data = [1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f"];
//hoisting html divs
const colorView = document.getElementById("colorView");
const colorHex = document.getElementById("colorHex");
//generating the color
function pickColor(){
	colorHex1 = "#";
	for(var x = 0;x < 6;x++){
		colorHex1+= data[pickHex()];		    
	}
	//Pick index 
	function pickHex(){
		return Math.floor(Math.random() * data.length);
	}
	//displaying the color
	colorView.style.background = colorHex1;
	colorHex.innerHTML = colorHex1;
	colorHex.style.color = colorHex1;
	//storing hexCode 
	localStorage.setItem('savedColor',colorHex1)
} 
// display saved last color
	colorView.style.background = localStorage.getItem("savedColor");
	colorHex.innerHTML = localStorage.getItem("savedColor");
	colorHex.style.color = localStorage.getItem("savedColor"); 