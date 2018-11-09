const _Node = require('./node');

class Stack{
  constructor(){
    this.top = null;
  }
  push(data){
    if(this.top === null){
      this.top = new _Node(data,null);
      return;
    }
    const newNode = new _Node(data, this.top);
    this.top = newNode;
  }
  pop(){
    const top = this.top;
    this.top = top.next;
    return top.data;
  }
}

module.exports = Stack;