//ES5 function template
function functionName(param1,param2){
  //do stuff

  //return stuff
}

//ES6 function
const fName = (param1,param2) =>{
  //do stuff

  //return
}
//Arrow functions allow for a quicker writting.
//If there is one parameter the "()" are optional.
//If there is no parametere specified the empty brackets "()" have to be used
//If the function has to execute only one expression and return it,
//the return word along with the curly brackets "{}" are optional.
//Parameters of the function can be predefined
//eg.1 - from es5 to es6
function squareES5(x){return x*x}; //es5
const squareES6 = x => x*x; //es6

//eg.2 - predefined Parameters
const formula  = (a,b,c=1) => a+b*c; // if the c is not specified it will its value equal to 1
//e.g.
console.log(formula(1,2,3)); //c = 3
console.log(formula(1,2)); // c = 1

//the word "arguments" is predefined in ES6
//e.g.
const argFunction = () => //console.log(arguments);
argFunction();
