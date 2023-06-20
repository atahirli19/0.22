// 1

const nnn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function phoneNumber(nnn){
    const one = nnn.slice(0, 3).join(''),
    two = nnn.slice(3, 6).join(''),
    three= nnn.slice(6, 10).join('')
  
    return `(${one}) ${two} - ${three})`;
}

console.log(phoneNumber(nnn));

//2

function helloBye(name, number){
    const firstName = name.split('');
    const secondName = firstName[0].toUpperCase();
    firstName[0] = secondName
    const newName = firstName.join('')



    if(number == 1){
        return `Hello ${newName}`
    }else if(number == 0){
        return `Bye ${newName}`
    }
    
    
}
console.log(helloBye("Alon", 0));

// 3

function isSymmetric(num) {
    if (typeof num !== 'number') {
      return false;
    }
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  console.log(isSymmetric(4444));       
console.log(isSymmetric(43879));



// 4

function chat(users){

    const people = users.length;

    if(people == 0){
        return `нет никого в сети`
    }else if(people == 1){
        return `${users[0]} онлайн`
    }else if(people == 2){
        return `${users[0]} и ${users[1]} в сети`
    }else if(people > 2){
        return `${users[0]}, ${users[1]} и ${people - 2} в сети`
    }
}

console.log(chat(["user1", "user2", "user3", "user4", "user5"]));



//5

function trues(boolean){
    let truess = 0;
    for(let i = 0; i < boolean.length; i++){
        if(boolean[i] === true){
             true += 1
        }
    }
    return truess;
};
console.log(trues([true, false, true, true]))