//spread parameter
 function addtwonumbers(x,y){
   console.log(x+y);
}
 let arr=[5,9];
addtwonumbers(...arr);

//rest parameter
 function somefunction(param1,param2){
     console.log(param1,param2);
 }
 somefunction("hi","there","how are you");

//adding using arrow function
 const add = (a, b) => a + b;
 console.log(add(5, 3));


//using for loop
let resultArr=[];
 for(let i=0;i<10;i++){
     let result=addtwonumbers(i,2*i);
     resultArr.push(result)
 }
 console.log(resultArr)

