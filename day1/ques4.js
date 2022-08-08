const members = [
    {name: 'Laveesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];

var arr=[]
const max=(value)=>{
   arr.push(value.age)
   if(arr[value==undefined]){
    arr.pop();
   }


}
members.map(max)

var avg=0;
const sum=(value)=>{
    if(value!=undefined){
        avg+=value
         return avg
    }
 
 }

arr.map(sum)
console.log(avg/2)