var _ = require('lodash')
const arr = [1,2,3,4,5]

var res = _.reduce(arr,function sum(acc,value){
       return acc+value
},0)

console.log(res)

const obj = [
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