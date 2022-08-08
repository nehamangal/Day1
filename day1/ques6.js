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
var arr2=[]
var arr3 = []
const max=(value)=>{
  if(value.age<=35){
    arr.push(value)
  }
  else if(value.age>35){
     arr2.push(value)
  }
  else{
    arr3.push(value)
  }


}
members.map(max)
var newobj = {}
newobj.young = arr
newobj.old = arr2
newobj.noage = arr3
console.log(newobj)


console.log(arr)
console.log(arr2)
console.log(arr3)
