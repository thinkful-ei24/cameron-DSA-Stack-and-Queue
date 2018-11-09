const Stack = require('./stack');

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
starTrek.pop();


function peek(stack) {
  return stack.top;
}

function display(stack) {
  let currentNode = stack.top;
  while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
  return;
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stack = new Stack;
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  let reverse = '';
  let currentNode = stack.top;
  while (currentNode !== null) {
    reverse += currentNode.data;
    currentNode = currentNode.next;
  }
  if (s === reverse) {
    return true;
  }
  return false;
}

// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

function parenthesisMatch(str) {
  const stack = new Stack;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
    } if (str[i] === ')') {
      if (stack.top === null) {
        return `Extra closing parenthesis at location ${i}`;
      }
      stack.pop();
    }
  } if (stack.top !== null) {
    return `Unclosed parenthesis at location ${stack.top.data}`;
  }
}

// console.log(parenthesisMatch('(a((cdf)))())'));

// max, previousMax
// count inside of while loop so we know how many times to add to new stack
function sortStack(stack) {
  // first find absolute max and min of stack
  let absMax = stack.top.data;
  let currentNode = stack.top;
  let count = 0;
  while (currentNode !== null) {
    if (currentNode.data > absMax) {
      count = 1;
      absMax = currentNode.data;
    } else if (currentNode.data === absMax) {
      count++;
    }
    currentNode = currentNode.next;
  }
  let absMin = stack.top.data;
  currentNode = stack.top;
  while (currentNode !== null) {
    if (currentNode.data < absMin) {
      absMin = currentNode.data;
    }
    currentNode = currentNode.next;
  }
  // add absMax to new stack
  let newStack = new Stack;
  function addToStack(data, count) {
    for (let i = 0; i < count; i++) {
      newStack.push(data);
    }
  }
  addToStack(absMax, count);
  let previousMax = absMax;
  while (previousMax !== absMin) {
    let node = stack.top;
    let max = absMin;
    count = 0;
    while (node !== null) {
      if (node.data > max && node.data < previousMax) {
        count = 1;
        max = node.data;
      } else if (node.data === max) {
        count++;
      }
      node = node.next;
    }
    addToStack(max, count);
    previousMax = max;
  }
  return newStack;
}

const stack = new Stack;
stack.push(1);
stack.push(9);
stack.push(11);
stack.push(0);
stack.push(-2);
stack.push(8);
stack.push(13);




