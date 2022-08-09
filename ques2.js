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

 
  var res = _.map(members,function get(value){
       var names = value.name
      
       let lastindex = names.split(' ')
       var x = lastindex[0];
       var y = lastindex[1].toLocaleUpperCase()
     
       let ans = x+' '+y
       console.log(ans)
  })
