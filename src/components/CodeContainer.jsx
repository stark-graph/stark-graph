import React from 'react';
import maxHeap from './code/maxHeap';
import BST from './code/BST';

// TODO: fix syntax highlighting for maxHeap
const CodeContainer = props => {
  const { activeTree } = props;
  return (
    <div className="code-container">
      <pre>
        <code className="language-javascript">
          {activeTree === 0 ? BST.BST : maxHeap.maxHeap}
        </code>
      </pre>
    </div>
  );
};

export default CodeContainer;
