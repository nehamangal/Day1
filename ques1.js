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

// Ques1  Get array of first names of everyone
  var arr2=[];
  var res = _.map(members,function get(value){
       
     const ans = _.split(value.name," ",2);
     arr2.push(ans[0]);
  })
  console.log(arr2);


// Ques 2 Make everyone's last names in UPPERCASE in given array of objects
var res = _.map(members,function get(value){
     var names = value.name
    
     let lastindex = names.split(' ')
     var x = lastindex[0];
     var y = lastindex[1].toLocaleUpperCase()
   
     let ans = x+' '+y
     console.log(ans)
})

// Ques 3 Get entries where age is between 41-60

var arr = []
var res = _.map(members,function get(value){
     if(value.age>=41 && value.age<=60){
      arr.push(value)
     }
})

console.log(arr)

// Ques 4
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

// Ques 5
var res = _.reduce(members,function sum(acc,value){
     if(value.age>acc){
         return value.age
     }
     else{
         return acc
     }
},-Infinity)
console.log(res)

// Ques 6

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

// Ques 7
var count=0;
  Object.keys(members).forEach(function (key) {
    count++;
    if(count==2){
        _.set(members[key], 'status', 'true');
    }
   
});
console.log(members)

// Ques 8
var count=0;
var res = _.map(members,function enets(value){
  count++;
  if(count<=2){
    console.log(value)
  }
  
})

// Ques 9

var newobj = _.clone(members)
var count=0;
Object.keys(newobj).forEach(function (key) {
  count++;
  if(count==1){
      _.set(newobj[key], 'status', 'true');
  }
 
});
console.log(newobj)

// Ques 10
var res = _.each(members,function(value){
     console.log(value.name)
     console.log(value.age)
     
   })

// Ques 11
Object.keys(members).forEach(function (key) {
     members[key].info = members[key].name;
     delete members[key].name;
 });
 console.log(members)

// Ques 12
var obj=[];
Object.keys(members).forEach(function (key) {
   obj.push(members[key].name)
   obj.push(members[key].age)
});

console.log(...obj)

// Ques 13

var newobj = _.clone(members)
Object.keys(newobj).forEach(function (key) {
  _.set(newobj[key], 'status', 'true');
});
console.log(newobj)

// Ques 14
var _ = require('lodash')
const arra = [1,2,3,4,5]

var res = _.reduce(arra,function sum(acc,value){
       return acc+value
},0)

console.log(res)

var obj = [
    {
        prod_name:"A",
        price: 2300
    },
    {
        prod_name:"B",
        price: 200
    },
    {
        prod_name:"C",
        price: 2100
    },
   

]

var res = _.reduce(obj,function sum(acc,value){
  
    return acc+value.price
},0)

console.log(res)


