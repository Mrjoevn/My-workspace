const Test = window.document.querySelector('.test');

//This is All Anwser for Exercise One
/**
 * 
const Animals = [
    'Dog',
    'Cat',
    'Rat',
    'Tiger',
    'Fish',
    'Otupus'
];

console.log(Animals.join('-'));

//Question number One
var checkRatOrTiger = false;
var CountRats = 0;
var CountTigers = 0;

Animals.forEach(function(animal , index) {
    if(animal === 'Rat' || animal === 'Tiger') {
        checkRatOrTiger = true;
        if(animal === 'Rat') {
            CountRats++;
        } else {
            CountTigers++;
        }
    }
});

if(!checkRatOrTiger) {
    alert('There is no any Rat or Tiger');
} else {
    Test.innerText = `The Numbers of Rat in Array is : ${CountRats}
    The Numbers of Tiger in Array is : ${CountTigers}`;
}

// Question number Two
var checkDog = Animals.indexOf('Dog');

if(checkDog !== -1) {
    Animals.push('Bird','Spider');
    console.log(Animals);
}

//Question number Three
for(let i = 0 ; i< Animals.length ; ++i) {
    if(Animals[i] === 'Cat') {
        Animals.splice(i,1, 'Elephant');
    }
}
console.log(Animals);

//Question number Four

for(let i = 0 ; i < Animals.length ; ++i) {
    if(Animals[i] === 'Fish') {
        Animals.splice(i , 1);
        console.log(i);
        i--;
    }
}
console.log(Animals);
 */

//This is all Anwser of Exercise Two
/**
const Numbers = ["111" , "222" , "333" ,"444"];
console.log('This is the BeginArray :' + Numbers);

var ArrayLength = Numbers.length;
//Question number 1 in exercise Two handle
for(let i = 0 ; i < ArrayLength ; ++i) {
    if(Numbers[i] === '222') {
        Numbers.splice(i , 1);
    }
}
console.log(Numbers);

//Question number 2 in exercise Two handle 
for(let i = 0 ; i < ArrayLength ; ++i) {
    if(Numbers[i] === '444') {
        Numbers.splice(i , 1 , "555");
    }
}
console.log(Numbers);

var newArray = Numbers.map(function(value , index) {
    return parseInt(value);
});

console.log(newArray);
 * 
 */

//THis is anwser about Exercise Three 
//Question number one 
const InputBtn = document.getElementById('input');
// const handleWhiteSpace = document.querySelector('.handleWhiteSpace');

// handleWhiteSpace.onclick = function() {
//     if(InputBtn.value) {
//         var handleInput = InputBtn.value.trim();

//         InputBtn.value = handleInput;
//     }
// };

InputBtn.onchange = function(e) {
    console.log(this.value.length);
}