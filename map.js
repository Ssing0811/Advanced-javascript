// // set(key, value)

// const map = new Map();
// map.set('name', 'John');
// map.set('age', 30);
// console.log(map); 


// // get(key)
// console.log(map.get('name')); 
// console.log(map.get('address'));

// // has(key)
// console.log(map.has('age')); 
// console.log(map.has('address'));

// // delete(key)
// map.delete('age');
// console.log(map.has('age'));

// // clear()
// map.clear();
// console.log(map.size);

// // forEach(callback)
// map.forEach((value, key) => {
//     console.log(key, value);
//   });

// //   entries()
// const entries = map.entries();
// console.log([...entries]); 

// // values()
// const values = map.values();
// console.log([...values]);

// // keys()
// const keys = map.keys();
// console.log([...keys]);

// // size (Property)
// console.log(map.size);

// // Create a Map
// const fruits= new Map();
// //set Map Values
// fruits.set("apples")
// // Map.clear()
// fruits.clear();
// set,get,type,delete,clear
// HashMethods
// Map.has("apple");
// fruits.delete("apples");

// let text = "";
// fruits.forEach(function(value,key){
//     text += key+'='+value;
// })
// console.log(text);

// let text = "";
// for(const x of fruits.entries()){
//     text += x;
// }
// // Map.keys();
// let text = "";
// for(const x of fruits.keys()){
//     text += x;
// }
// Map.values()

// let total = 0;
// for(const x of fruits.values()){
//     total += x;
// }
// console.log(total);



// const apples={name:'Apples'};
// const bananas={name:'bananas'};
// const oranges={name:'oranges'};
// const fruits = new Map();
// fruits.set(apples,500);
// fruits.set(bananas,300);
// fruits.set(oranges,200);
// fruits.get("apples");


//JavaScript Destructuring
// let{firstname, lastname}=person;
 
//create an object
// const person={
// firstname:"john",
// lastname:"doe",
// age:50
// };

// the order of the property does not matter

// let{lastname, firstname}=person;
// const person={
//     firstname:"john",
//     lastname:"doe",
//     age:50
//     };


//alias creation
// const person={
//     firstname:"john",
//     lastname:"doe",
//     age:50
//     };
//let{lastname:name}=person;

// 29 April 2025;
// let name = "Saurabh Maurya";
// let [a1,a2,a3,a4,a5] = name;
// console.log(a4);

// let names = ["hello","how","welcome","Greeting"];
// let[g1,,,g2] = names;
// console.log(g1,g2);

// let{[0]:names1,[1]:names2 }=names;

//THE REST PROPERTY
// const numbers=[10,20,30,40,50,60];
// const[a,b,...rest]=numbers;
// console.log([a,b,...rest]);

//SWAPPNG
// let firstname="john";
// let lastname="doe";
// //destructuring
// [firstname,lastname]=[lastname,firstname];
// console.log([firstname,lastname]);


// let x=5;
// let z=x**2;
// console.log(z);

// let x=5;
// let z=Math.pow(x,2);
// console.log(z);

//Exponential Assignment 
// let x=5;
// x**=2;
// console.log(x);

// const fruits=["banana","oranges","apples","mango"];
// console.log(fruits.includes("Mango"));

// const fruits=["banana","oranges","apples","mango"];
// console.log(fruits.includes("banana",3));

//The include method is case sensetive

//Trailing Comma
// const arr=["one","two","three",,];
// console.log(arr.length);

// const sparseArray=[1,,,4,5,,];
// console.log(arr.length);

 