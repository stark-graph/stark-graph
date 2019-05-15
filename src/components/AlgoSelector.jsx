import React from 'react';
// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter/prism-light';
// import jsx from 'react-syntax-highlighter/dist/esm//languages/prism/jsx';

const AlgoSelector = () => {
  return (
    <div
      className='algo'
      style={{
        width: 'auto',
        height: 'auto',
        borderStyle: 'solid',
        borderSidth: '2px',
        'overflow-y': 'auto'
      }}
    >
      {/* < language='javascript'> */}
      <code>
        {`class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(val) {
    const root = this.root;

    if (!root) {
      this.root = new Node(val);
      return;
    }

    const currentNode = root;
    const newNode = new Node(val); 

    while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
            currentNode.left = newNode;
            break;
          }
          else{
            currentNode = currentNode.left;
        }
    }
    else{
        if(!currentNode.right){
            currentNode.right = newNode;
            break;
        }
        else{
            currentNode = currentNode.right;
        }
      }
    }
  }
}`}
      </code>
    </div>
  );
};

SyntaxHighlighter.registerLanguage('jsx', jsx);
export default AlgoSelector;
