// //spread parameter
//  function addtwonumbers(x,y){
//    console.log(x+y);
// }
//  let arr=[5,9];
// addtwonumbers(...arr);

// //rest parameter
//  function somefunction(param1,param2){
//      console.log(param1,param2);
//  }
//  somefunction("hi","there","how are you");

// //adding using arrow function
//  const add = (a, b) => a + b;
//  console.log(add(5, 3));


// //using for loop
// let resultArr=[];
//  for(let i=0;i<10;i++){
//      let result=addtwonumbers(i,2*i);
//      resultArr.push(result)
//  }
//  console.log(resultArr)

//local scope
// function testAvailability(x){
//     console.log("Available here:",x);
// }

// testAvailability("Hi!");
// console.log("not available here:",x);

// function testAvailability(){
//   let y="I will return";
//   console.log("available here:",y);
//   return y;
// }
// let z = testAvailability();
// console.log("outside the function:",z)
// console.log("outside the function:",y)

// let versus var variables
// function doingStuff(){
//     if(true){
//         console.log(x)
//         let x="local"
//     }
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x)
//         var x="local"
//     }
// }
// doingStuff();


// //global variable
// let globalVar = "Accesible everywhere!";
// console.log("outside function:",globalVar);

// function creatingNewScope(x){
//     console.log("Access to global vars inside function.", globalVar);
// }
// creatingNewScope();

// let x = "global";
// function doingStuff(x){
//     console.log(x);
// }
// doingStuff("param")

// let x = "global";
// function doingStuff(){
//     console.log(x);
// }
// doingStuff("param")

// function confuseReader(){
//   x="Guess my scope...";
//   console.log("inside the function:",x);
// }
// confuseReader();
// console.log("outside of function:",x);

//immediately invoked function expression 
// (function (){
//     console.log("IIFE!");
// })();

// (()=>{
//     console.log("run right away");
// })();

//Recursive function 
// function getrecursive(nr){
//     console.log(nr);
//     if(nr>0){
//     getrecursive(--nr);
//     }
// }
// getrecursive(3);

//stack recursion
// function logRecursion(nr){
//     console.log("started function:",nr);
//     if(nr>0){
//         logRecursion(nr-1);
//     }else{
//         console.log("done with recursion");
//     }
//     console.log("ended function:",nr)
// }
// logRecursion(3);