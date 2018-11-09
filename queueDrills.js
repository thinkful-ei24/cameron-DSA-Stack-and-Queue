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
    this.first = this.firstStack.top;
    this.last = this.secondStack.top;
  }

  enqueue(value){
    if(this.first === null){
      this.firstStack.push(value);
    }
  }
}



