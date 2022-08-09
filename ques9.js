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

  var newobj = _.clone(members)
  var count=0;
  Object.keys(newobj).forEach(function (key) {
    count++;
    if(count==1){
        _.set(newobj[key], 'status', 'true');
    }
   
});
console.log(newobj)
