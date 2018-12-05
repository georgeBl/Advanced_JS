
//ex 01 - Use of forEach()
// const arr = ['Thinking in JS', 'JS Patterns', 'JS: The Good Parts', 'ES6 and Beyond'];
// //old ver
// arr.forEach(elem=>console.log('I need to read',elem));
// //using `
// arr.forEach(elem => console.log(`I need to read ${elem}`));

// //ex 2 - Check if everyone passed
// const marks = [41,50,48,60];
// const allPass = marks.every(mark => mark >= 40);
//
// // let allPass = true;
// // for(let i =0;i<marks.length;i++){
// //   if(marks[i]<40){
// //     allPass = false;
// //     break;
// //   }
// // }
// //
//  console.log(allPass ? 'Everyone passed😚' : 'Somebody failed😑');

//ex 3 Check if all elements of the array are divisible by 5
// const nums = [5,10,15,30];
// const nums2 = [6,10,15,30];
//
// const div5 = num => num % 5 === 0;
// console.log(nums.every(div5));
// console.log(nums2.every(div5));

// //ex 4 - Use of some()
// const marks = [22,18,21,40];
// const passed = mark => mark >= 40;
// console.log(marks.some(passed));

//ex 5 - Check if any element from the array have more than 5 characters
// const names = ['Angela', 'George', 'John Snow', 'Will I Am', 'Ion Ion', 'Ryan L'];
// const names2 = ['John', 'Will', 'Fox'];
//
// const checkElems = name=> name.length > 5;
//
// console.log(names.some(checkElems));
// console.log(names2.some(checkElems));

//ex 6 Mapping
// const prices = [200,200,125,100];
//
// const vatOfPrices = prices.map(calcVat);
// console.log(vatOfPrices);
// function calcVat(price){
//   const vat = .23;
//   return price*vat;
//

//ex 7 - Map the string to be a list
// const names = ['Andrew', 'Jabe', 'Sara'];
//
// const makeList = text => `<li>${text}</li>`;
//
// const list = names.map(makeList);
//
// console.log(list);

//ex 6 Map the string to have its first letter of each elemnt to uppercase
// const sweets = ['chocolate', 'red velvet', 'custart', 'jam', 'lemon'];
//
// const makeUpper = sweet => sweet.charAt(0).toUpperCase() + sweet.substr(1);
// const newSweets = sweets.map(makeUpper);
// console.log(newSweets);
//
// //ex 6 But smarter
// const sweets = ['chocolate', 'red velvet', 'custart', 'jam', 'lemon'];
// const upper = sweet => sweet.replace(/^\w/, c => c.toUpperCase());
// const newSweets = sweets.map(upper);
// console.log(newSweets);

//ex 7 Using filter()
// const prices = [100,202,220,220,334];
// const filterFn = price => price <250;
// const filteredPrices = prices.filter(filterFn);
// console.log(filteredPrices);

//ex 8 Apply filter() to get rid of negative numbers
const posNeg = [1,-1,-2,3,5,-7,+0,0,-0];
const filterFn = n => n>=+0;
const posNums = posNeg.filter(filterFn);
console.log(posNums);

//ex 9 - Using reduce()
const prices = [1,10,1,1,1];
// const totalPrice = 0; - optional
const res = prices.reduce((totalPrice,val) =>{
  console.log('total', totalPrice);
  console.log('val', val);
  return totalPrice += val;
});
console.log(res);
