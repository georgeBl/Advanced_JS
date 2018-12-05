// function Person(name, age){
//   this.name - name;
//   this.age = age;
//   this.hi = function(){
//     console.log(`Hi my name is ${this.name}`);
//   };
// }
//
// Person.prototype.hello = function(){
//   console.log(`Hello my name is ${this.name}`);
// };
// querySelector()
// //Create an object using the above constructor
// let person1 = new Person(`Marianna`, 48);
// person1.hello();
// person1.hi();

//
// function Animal(name){
//   this.name = name;
// }
//
// Animal.prototype.print = function(){
//   console.log(`${this.name} is an animal`);
// }
//
// const dog = new Animal(`Lessie`);


class User{
  constructor(name, password, permissions){
    this.name = name;
    this.password = password;
    this.permissions = permissions;
  }
  print(){
    console.log(`Hi I'm ${this.name}`);
  }
  checkPw(password){
    return password === this.password;
  }

}

class Admin extends User {
  constructor(name, password, permissions, salary){
    super(name, password, permissions);
    this.salary = salary;
    if(salary>0){
      this.salary = salary;
    }
    else {
      this.salary = 0;
    }
  }
  print(){
    console.log(`Hi I'm ${this.name} and I earn €${this.salary}`);
  }

}

const user1 = new User("Andrew", "monkey123", "all");
user1.print();
console.log(user1.checkPw("monkey123"));
const user2 = new User("Jane", "01hsdm2JH2s", "read-only");
user2.print();
console.log(user2.checkPw("asd2h1"));

const admin = new Admin("George", "monkey123", "all", 7000);
admin.print();
admin.valueOf();
