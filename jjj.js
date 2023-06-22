//1
function formatphoneNumber(arr){
    let str = arr.join('')
    console.log(`(${str.slice(0,3)}) ${str.slice(3,6)}-${str.slice(6)}`) ;
}
formatphoneNumber([1,2,3,4,5,6,7,8,9,0]);
formatphoneNumber([3,2,3,5,5,6,0,8,1,0]);
formatphoneNumber([1,4,4,7,5,7,5,8,9,0]);

//2

function sayHelloBye(name,num){
    if(num === 1){
        return 'Hello' + name[0].toUpperCase() + name.slice(1)
      }else {
        return ' Bye' + name[0].toUpperCase()  +  name.slice(1)
      }
    }
    
    console.log(sayHelloBye('alon',1))


function sayHelloBye(name,num){
if(num === 1){
    return 'Hello' + word1[0] .toUpperCase.slice(1)
  }else {
    return ' Bye' + word1[0] .toUpperCase.slice(0)
  }
}
console.log(sayHelloBye('alon',1))

//3
