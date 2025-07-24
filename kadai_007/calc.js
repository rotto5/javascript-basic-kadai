let num = 90;

// switch文では意図した処理にならなかった
// switch(num) {
//   case (num % 3 == 0):
//     console.log('3の倍数です');
//     break;
//   case (num % 5 == 0):
//     console.log('5の倍数です');
//     break;
//   case (num % 3 == 0 && num % 5 == 0):
//     console.log('3と5の倍数です');
//     break;
//   default:
//     console.log(num);
//     break;  
// }

if(num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
} else if(num % 3 === 0) {
  console.log('3の倍数です');
} else if(num % 5 === 0) {
  console.log('5の倍数です');
} else {
  console.log(num);
}