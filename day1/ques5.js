const members = [
    {name: 'Laveesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];

const max=(accumulator,value)=>{
   if(accumulator>value.age){
    return accumulator
   }
   else{
    return value.age
   }
}

const res =  members.reduce(max,-Infinity)
 console.log(res)