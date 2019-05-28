import React from 'react';
import maxHeap from './code/maxHeap';
import BST from './code/BST';

const AlgoSelector = props => {
  const { activeTree } = props;
  console.log('activeTree', activeTree, 'heap', maxHeap, 'bst', BST);
  return (
    <div
      className="algo"
      style={{
        width: 'auto',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <pre>
        <code className="language-javascript">
          {activeTree <= 1 ? BST.BST : maxHeap.maxHeap}
        </code>
      </pre>
    </div>
  );
};

export default AlgoSelector;
