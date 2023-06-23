//1
let str = 'My name is Samuil';

for(let i = 0; i < str.length; i++){
    console.log(str[i])
}

// 2)

let arr1 = [1, 2, 3, 4, 5];

for(let i = 0; i < arr1.length ; i++){
    console.log(arr1[i])
}

//3
let drinks = new Set(['cofee','tea','water', 'juice']);

//4
drinks.add('a');
drinks.add('b');
drinks.add('c');

//5
let arr = [1, 2, 3, 4, 5];

arr.forEach(function(value, index, array) {
    array[index] = 'Element'; 
});

//6
let fruits = new Set([ 'banana','apple', 'orance']);

console.log(fruits.values());

//7
let fruits2 = new Set(['banana','apple', 'orance']);

console.log(fruits2.keys());

//8
let fruits3 = new Set(['banana','apple', 'orance']);

console.log(fruits3.keys());

//9
let people = new Map([
    ["Alex", 22],
    ["Samuil", 20],
])

//10
let apple = 500;
let banana = 300;
let orange = 100;

people.set(apple, 500);
people.set(banana, 300);
people.set(orange, 100);

// 11

let fruits4 = new Map([['apple', 5], ['banana', 10], ['orance', 30]]);

console.log(fruits4.get('apple'));
// 12

let fruits5 = new Map([['apple', 5], ['banana', 10], ['orance', 30]]);

console.log(fruits6.size)
// 13

let fruits6 = new Map([['apple', 5], ['banana', 10], ['orance', 30]]);

fruits6.delete('apple')
// 14

let fruits7 = new Map([['apple', 5], ['banana', 10], ['orance', 30]]);

fruits7.clear();
// 15

let fruits8 = new Map([['apple', 5], ['banana', 10], ['orance', 30]]);

console.log(fruits8.has('apple'));
// 16

let fruits9 = new Set(['apple', 'banana', 'orance']);

console.log(fruits9.values());
// 17

let fruits10 = new Set(['apple', 'banana', 'orance']);

console.log(fruits10.keys());
// 18

let fruits11 = new Set(['apple', 'banana', 'orance']);

console.log(fruits11.entries());
// 19

function addSuffix(suf){
    return function add(word){
        return `${word}${suf}`;
    };
};

let addly = addSuffix('hh')
console.log(addly('total'));

//20

function arrayOfMiltiplies(num, length){
    let array = [];
    let jj = 0;
    for(let i = 0; i < length; i++){
        jj = num + nb;
        array.push(nb);
        
    }
    return array;
}

console.log(arrayOfMiltiplies(7, 5));

//21

function keysAndValues(obj){
    let arr = [];
    let keys = Object.keys(obj).sort();
    let values = Object.values(obj);
    arr.push(keys);
    arr.push(values);
    return arr;
}

console.log(keysAndValues({a: 1, b: 2, c: 3}));

//22

function intWithinBounds(num1, num2, num3){
    if(!Number.teger(num1)){
        return false;
    }else if(!Number.teger(num1)){
        return false;
    }else if(!Number.teger(num1)){
        return false;
    }else if(num1 < num2 && num2 < num3){
        return true;
    }else{
        return false;
    }

}

console.log(intWithinBounds(1, 3, 9));

//23

function count(num){
    let strNum = String(num);
    let newNum = strNum.replace('-', '');
    
    return newNum.length;
}

console.log(count(-528));