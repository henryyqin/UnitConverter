var x;
function getInput(num){
	x = num
}
// General conversion function
function convert(inputVal, factor) {
	document.getElementById("output").innerHTML = (inputVal * factor).toFixed(4)
}
// Temperature conversion functions
function FtoC(inputVal) {
	document.getElementById("output").innerHTML = ((inputVal - 32) * (5/9)).toFixed(4)
}
function CtoF(inputVal) {
	document.getElementById("output").innerHTML = ((inputVal * (9/5)) + 32).toFixed(4)
}
function FtoK(inputVal) {
	document.getElementById("output").innerHTML = ((inputVal - 32) * (5/9) + 273.15).toFixed(4)
}
function KtoF(inputVal) {
	document.getElementById("output").innerHTML = (CtoF(inputVal - 273.15)).toFixed(4)
}