//In array
var arr = [1,2,3,4,5]

const sum=(accumulator,value)=>{
    return accumulator+value
}




var res = arr.reduce(sum,0)
console.log(res)                                   // Return 15



//In Object
var obj=[
    { 
        prod_name:'A',
        prices:3400
    },

    { 
        prod_name:'B',
        prices:1400
    },

    { 
        prod_name:'C',
        prices:100
    },
 

]

var res = obj.reduce((acc,value)=>{
   return acc+value.prices

},0)
console.log(res)