console.log("JavaScript is working");
console.error("this is error")
console.warn("this is warning")

// var arr = [5,34,242,5,2423,23412]
// console.log(arr);
// console.table(arr)


// VARIABLES
// VAR VS LET VS CONST??

// const a = 5;
// console.log(a);
// a = 7;
// console.log(a);

// var i =100
// for(let i = 0;i<=10;i++)
// {
//     console.log(i);
// }
// console.log(i);

// var str = false
// console.log(typeof arr)


// ARRAYS
var arr = [5,34,242,5,2423,23412]
console.log(arr);
arr.pop()
console.log(arr);
arr.shift()
console.log(arr);
arr.push(8489494)
console.log(arr);
arr.unshift(12)
console.log(arr);
arr.sort()
console.log(arr);
arr.reverse()
console.log(arr);

var arr2 = [5,34,24,5234,5,4324234,1]
var arr3 = arr.concat(arr2)
console.log(arr3);


// var sliceVAlue = arr3.slice(2,5)
// console.log(sliceVAlue);

var spliceValue = arr3.splice(2,5)
// console.log(spliceValue);

// DATE
// Date(year,month,day,hours,mints,sec,milsec)
var dt = new Date()
// console.log(dt);

// console.log(dt.getDate());
// console.log(dt.getFullYear());


var obj = {
    name: 'osama',
    class: 'JS',
    age: 36,
    malegender:true 
}
console.table(obj)


// OBJECTS

var questions = [
    {
      
      question: "How to delete a directory in Linux?",
      a: "rmdir",
      b: "mkdir",
      c: 'cd',
      d: 'delet',
      answer2: "rmdir"

     
    }
  ]

  var score = 0
//   if(user.value == )
//   {
//       score++
//   }
console.log(questions[0]['answer']);

// FUNCTIONS
























