/* ---------------------------------------condiiton----------------*/
const x = 11;
const y = 11;

if( x === 10 || y > 10) {    //triple matches datatype also
  console.log('x is 10');
} else if ( x > 10 && y < 5){
  console.log('x is greater')
}
else {
  console.log('x is not 10')
}

/*------------swuctch -----*/
const color = 'yellow'
switch(color){
  case 'red':
    console.log('color is red')
    break;
  case 'blue':
    console.log('solor is blue')
    break;
  default:
    console.log('color is not red or blue')
    break;
}
