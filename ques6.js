var _ = require('lodash')
const members = [
    {name: 'Laveesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ]

 var arr1 = []
 var arr2 = [];
 var arr3=[];
  var res = _.map(members,function get(value){
       if(value.age<35){
        arr1.push(value.age)
       }
       else if(value.age>35){
        arr2.push(value.age)
       }
       else{
        arr3.push(value.age)
       }
  })

  
var obj = {
    'young':arr1,
    'old':arr2,
    'noage':arr3
}
console.log(obj)