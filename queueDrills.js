const Queue = require('./queue');
const Stack = require('./stack');

const starTrekQ = new Queue;
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
starTrekQ.dequeue();
starTrekQ.dequeue();

function peek(queue){
  return queue.first;
}

function display(queue){
  let currentNode = queue.first;
  while (currentNode !== null){
    console.log(currentNode.value);
    currentNode = currentNode.prev;
  }
}

class StackQueue{
  constructor(){
    this.firstStack = new Stack;
    this.secondStack = new Stack;

  }

  enqueue(value){
    if(this.secondStack.top !== null){
      let currentNode = this.secondStack.top;
      while(currentNode!==null){
        currentNode = currentNode.next;
        let p = this.secondStack.pop();
        this.firstStack.push(p.value);
      }
      this.firstStack.push(value);
    }else{
      this.firstStack.push(value);
    }
  }
  dequeue(){
    if(this.secondStack.top === null && this.firstStack.top === null){
      return null;
    }else if(this.secondStack.top === null){
      let currentNode = this.firstStack.top;
      while(currentNode !== null){
        currentNode = currentNode.next;
        let p = this.firstStack.pop();
        this.secondStack.push(p);
      }
      return this.secondStack.pop();
    }else{
      return this.secondStack.pop();
    }
  }
}

// const starTrekQ1 = new StackQueue;
// starTrekQ1.enqueue('Kirk');
// starTrekQ1.enqueue('Spock');
// starTrekQ1.enqueue('Uhura');
// starTrekQ1.enqueue('Sulu');
// starTrekQ1.enqueue('Checkov');
// console.log(starTrekQ1.dequeue());
// console.log(starTrekQ1.dequeue());
// console.log(JSON.stringify(starTrekQ1, null, 2));

const males = new Queue;
const females = new Queue;

function pairUp(person){
  const arr = person.split(' ');
  let obj = {};
  obj.name = arr[1];
  obj.sex = arr[0];
  if(obj.sex === 'F'){
    if(males.first !== null){
      let pair = males.dequeue();
      return `Female dancer is: ${obj.name} and the male dancer is: ${pair}`;
    }else{
      females.enqueue(obj.name);
      return `${obj.name} is waiting to get paired.`;
    }
  }else if(obj.sex === 'M'){
    if(females.first !== null){
      let pair = females.dequeue();
      return `Female dancer is: ${pair} and the male dancer is: ${obj.name}`;
    }else{
      males.enqueue(obj.name);
      return `${obj.name} is waiting to get paired.`;
    }
  }else{
    return 'Participant must have sex key of F or M';
  }
}

// console.log(pairUp('F Jane'));
// console.log(pairUp('M Frank'));
// console.log(pairUp('M John'));
// console.log(pairUp('M Sherlock'));
// console.log(pairUp('F Madonna'));
// console.log(pairUp('M David'));
// console.log(pairUp('M Christopher'));
// console.log(pairUp('F Beyonce'));

const longLine = new Queue;
longLine.enqueue('Bob');
longLine.enqueue('George');
longLine.enqueue('Susan');
longLine.enqueue('Phil');
longLine.enqueue('Jane');
longLine.enqueue('Carol');
longLine.enqueue('Pete');

function serveLine(){
  const chance = Math.floor(Math.random()*4+1);
  if(chance === 1){
    let p = longLine.dequeue();
    longLine.enqueue(p);
    return;
  }else{
    longLine.dequeue();
    return;
  }
}
serveLine();
console.log(display(longLine));
serveLine();
console.log(display(longLine));
serveLine();
console.log(display(longLine));
serveLine();
console.log(display(longLine));
serveLine();
console.log(display(longLine));
serveLine();
console.log(display(longLine));








