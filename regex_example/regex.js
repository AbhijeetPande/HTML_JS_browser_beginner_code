let value = prompt('Type a number', 0);
var regex=/^-?[0-9]+$/;
if(!value.match(regex)){
alert("Wrong type! I told you to enter number! ")
}else if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}