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
const newfunc=(value)=>{
   var names = value.name;
   const myArray = names.split(" ");
   let x = myArray[0]
   let y = myArray[1]
   y = y.toUpperCase()
    let word = x+' '+y;
    value=word
    console.log(value)
  
 
}

members.map(newfunc)

