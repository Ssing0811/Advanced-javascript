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

// stack recursion
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

// function getrecursion(nr){
//     console.log(nr);
//     if(nr>0){
//         getrecursion(--nr);
//     }
// }
// getrecursion(3);

// function getrecursion(nr){
     
//     if(nr>0){
//         getrecursion(--nr);
//     }
//     console.log(nr);
// }
// getrecursion(3);

// //performance of recursion is slower than the performance than that of iteration using loops

// //Nested functions
// function doOuterfunctionStuff(nr){
//     console.log("outer function");
//     doInnerfunctionStuff(nr);
//     function doInnerfunctionStuff(x){
//         console.log(x+7);
//         console.log("I can access outer variables:",nr);
//     }
// }
// doOuterfunctionStuff(2);

// //Anonymous functions
// let functionVariable = function(){
//     console.log("not so scerete though.");
// };
// functionVariable();

// //Function callbacks 
// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunctions.");
// }
// doFlexibleStuff(functionVariable);

// let youGotThis = function(){
//     console.log("you are doing really well,keep coading!");
// };
// setTimeout(youGotThis,4000);
// setInterval(youGotThis,1000);

// class Dog{
//   constructor(dogname, weight, color , breed){
//     this.dogname =dogname;
//     this.weight= weight;
//     this.color= color;
//     this.breed= breed;
//   }
// }
// let dog = new Dog("JvaScript",2.4,"brown","chihuawa");
// console.log(dog.dogname, "is a", dog.breed,"and weights", dog.weight,"kg.");

// class Person{
//     constructor(firstname, lastname){
//         this.firstname =firstname;
//         this.lastname =lastname;
//         }
// }
// let p = new Person("maakie","van putton");
// console.log("Hi", p.firstname);

// let p = new Person("Makkie","harry");
// console.log("Hi", p.firstname, p.lastname);

//methods
// functions on a class are called methods

// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         console.log("hi! there i am ",this.firstname);
//     }
// }
// let p = new Person("Maakie","van putten");
// p.greet();


//METHODS
// class person {
//     constructor(firstname, lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("hi! there i am",this.firstname);
//     }
// }
// let p= new person("Makkie","vanhusen")
// p.greet()

// class Person {
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("hi there!",this.firstname);
        
//     }
//     compliment(){
//         console.log("you are doing great",this.firstname);
//     }
// }

// let compliment = new Person("Harry","Hat");
// console.log(compliment);

//PROPERTIES
// class person{
//  #firstname;
//  #lastname;

//  constructor(firstname, lastname){
//     this.#firstname = firstname;
//     this.#lastname = lastname;
//  }
// }
// let p = new person("marrie","saga");
// console.log(p.firstname);
// console.log(p.lastname);

//GET AND SET 
// class person{
//     #firstname;
//     #lastname;
   
//     constructor(firstname, lastname){
//        this.#firstname = firstname;
//        this.#lastname = lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstname){
//         return this.#firstname;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         return this.#lastname;
//     }
// }
// let p= new person("marie","sagie");
// console.log(p.firstname);

// INHERITENCE
// class Vehicle{
//     constructor(color, currentSpeed, maxspeed){
//         this.color=color;//to initilaise ur cuurent variable
//         this.currentSpeed=currentSpeed;
//         this.maxspeed=maxspeed;
//         this.color=color;

//     }
//     move(){
//         console.log("moving at",this.currentSpeed);


//     }
//     accelerate(amount){
//         this.currentSpeed +=amount;
//     }
// }
// class Motercycle extends Vehicle{
//     constructor(color, currentSpeed, maxspeed, fuel){
//         super(color, currentSpeed, maxspeed, fuel)
//         this.fuel =fuel;

//         }
//         doWheelie(){
//             console.log("Driving on the wheel!");
//         }
//     }

// let motor = new Motercycle("Black",0,250,"gasoline")
// console.log(motor.color)
// motor.accelerate(50);
// motor.move();
 
//PROTOTYPES
// class Person{
//     constructor(firstname, lastname){
//         this.firstname=firstname;
//         this.lasname=lastname;
//     }
//     greet(){
//         console.log("hi!there");

//     }
// }

// Person.prototype.introduce=function(){
//     console.log("Hi,I'm", this.firstname);
// };
// Person.prototype.favouriteColor="green";
// let p =new Person("maria","saga");
// console.log(p.favouriteColor);
// p.introduce();
