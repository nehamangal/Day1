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

 var arr = []
  var res = _.map(members,function get(value){
       if(value.age!=undefined){
        arr.push(value.age)
       }
  })

  
  var res = _.reduce(arr,function sum(acc,value){
         return acc+value
  },0)
  console.log(res/2)