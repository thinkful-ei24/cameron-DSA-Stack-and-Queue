const _Node = require('./queueNode');

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(value){
    const node = new _Node(value);
    if(this.first === null){
      this.first = node;
    }
    if(this.last){
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }

  dequeue(){
    if(this.first === null){
      return;
    }
    const node = this.first;
    this.first = node.prev;
    if(this.last === node){
      this.last === null;
    }
    return node.value;
  }
}

module.exports = Queue;