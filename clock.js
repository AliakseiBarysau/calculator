
'use strict'
const getRandomNumber = max => {
    return Math.floor(Math.random() * max);
};

const getRandomColor = () => {
    return `rgb(
        ${getRandomNumber(255)},
        ${getRandomNumber(255)},
        ${getRandomNumber(255)})
`;
};

class Clock {
    constructor(mountPoint = document.querySelector('body')) {
        this.mountPoint = mountPoint;
 }

 render() {
    this.container = document.createElement('div');
    this.content = document.createElement('h1');
    this.container.style.background = getRandomColor();
    this.content.textContent = '00/00/0000';

    this.container.classList.add('clock');
    this.content.classList.add('clock_content');
 
    this.container.appendChild(this.content);
    this.content.appendChild(this.container);
    }
}


let time = new Date();
console.log(time.getMonth());
console.log(time.getSeconds());



let artOf = {
    name: Ik 

}


function numberToString(num) { 
    return num.numberToString;
  };
  numberToString();
  console.log(typeof(num));


  alert(str); // ?
var str = "Hello";



console.log(100 == 1e2);
    console.log(1000000 == 1e6);
        console.log(1000 == 1e3);
console.log(80000000 == 8e7);
console.log(0.000009 == 9e-6);



function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number;){
      newArray.push(counter);
    }
    
    return newArray;
  }
  console.log(createArray);
  