//
// global.name = 'Barry';
//
// function printName(){
//   console.log(this.name);
// }
//
// const p1 = { name: 'John'};
// const p2 = { name: 'Marry'};
//
// printName();
// printName.call(p1);
// printName.call(p2);

// global.weeklyWage = 100;
// global.weeksWorked = 2;
//
// function printSalary(currency, delimiter){
//   let sal = this.weeklyWage * this.weeksWorked;
//   console.log(`${currency}${sal}${delimiter}`);
// }
//
// printSalary('$', '.');
//
// const p1 = { weeklyWage: '3000', weeksWorked: '12'};
// const p2 = { weeklyWage: '5020', weeksWorked: '20'};
//
// printSalary.call(p1, '$', '.');
//
// const printSalarForPerson = printSalary.bind(p1, '€', '!!!!');
//
// printSalarForPerson();

//
// function getAge(){
//   let today = new Date();
//   let birthDate = new Date(this.dob);
//   let age = today.getFullYear() - birthDate.getFullYear();
//   let m = today.getMonth() - birthDate.getMonth();
//   if(m < 0 || (m === 0 && today.getDate() < birth.getDate())){
//     age--;
//   }
//   return age;
// }
//
// const p1 = { dob: '09/14/1996'};
// const p2 = { dob: '09/14/1995'};
//
// console.log("using call");
// console.log(getAge.call(p1));
// console.log(getAge.call(p2));
//
// console.log("using apply");
// console.log(getAge.apply(p1));
// console.log(getAge.apply(p2));
//
// console.log("using bind");
//
// console.log(getAge.bind(p2)());
//
// const ageP1 = getAge.bind(p2);
//
//
// console.log(ageP1());

let MathsLib = {
  num: 10,
  addTwo(){
    this.num += 2;
    return this;
  },
  triple(){
    this.num *= 3;
    return this;
  },
  timesTen(){
    this.num *= 10;
    return this;
  },
  print(){
   console.log(this.num);
  }
}
  .addTwo()
  .triple()
  .timesTen()
  .print();
