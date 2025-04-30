//callbacks:function passed as an argument 
// function dosomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("hi!");
// }
// dosomething(sayHi);


// function judge(grade){
//     switch(true){
//         case grade == "A":
//             console.log("You got an",grade,":amazing!");
//             break;
//         case grade == "B":
//             console.log("You got a",grade,":well done!");
//             break;
//         case grade == "C":
//             console.log("You got a",grade,":alright.");
//             break;
//         case grade == "D":
//             console.log("You got a",grade,":hmmm...");
//             break;
//         defalt:
//             console.log("An",grade,"! what?!");
//     }
// }
// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             console.log(score);
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade="F";
//     }
//     callback(grade);
// }
// getGrade(85,judge);


//PROMISES
// // promises contains two parameters one is resolve and other one is reject
// let promise = new Promise(function (resolve,reject){
//     let x = 10;
//     if(x>10){
//         resolve(x);
//     }else{
//         reject("too low");
//     }
// });
// promise.then(
//     function(value){
//         console.log("Success:",value);
//     },
//     function(error){
//         console.log("error:",error);
//     }
// );

// const promise = new Promise(function (resolve,reject){
//     resolve("success!");
// })
// .then(value =>{
//     console.log(value);
//     return "we";
// })
// .then(value =>{
//     console.log(value);
//     return "can";
// })
// .then(value =>{
//     console.log(value);
//     return "chain";
// })
// .then(value =>{
//     console.log(value);
//     return "promises";
// })
// .then(value =>{
//     console.log(value);
// })
// .catch(value =>{
//     console.log(value);
// })

//ASYNC AND AWAIT
// function saySomething(x){
//     return new Promise(Resolve=>{
//         setTimeout(()=>{
//             Resolve("something"+x);
//         },2000);
//     });
// }
// async function talk(x){
//     const words = await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

//EVENT LOOP
// JS is a single threaded language

// console.log("hi there");
// add(4,5);
// function add(x,y){
//     return x+y;
// }
// console.log("hi there");
// setTimeout(()=> console.log("sorry i am late"),1000)
// console.log(add(4,5));
// function add(x,y){
//     return x+y;
// }

 
