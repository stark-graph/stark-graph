import React from 'react';
import Tree from 'react-d3-tree';
import { createTree } from '../utils/BST.js';
import { buildMaxHeap, assembleHeap } from '../utils/heap.js';

const test = (treesArr, activeTree) => {
  console.log('sdfubsdf', treesArr[activeTree]);

  if (activeTree === 0 || activeTree === 1) {
    return createTree(treesArr[activeTree]);
  }
  return buildMaxHeap(treesArr[activeTree]);
  // console.log('heapdskfb', heap);
  // return assembleHeap(heap);
};

const Graph = props => {
  const { treesArr, activeTree } = props;
  return (
    <div
      className="graph"
      style={{
        width: '80%',
        height: '100%',
        borderStyle: 'solid',
        borderWidth: '2px',
      }}
    >
      Binary Search Tree
      <Tree
        // data={createTree(treesArr[activeTree])}
        data={test(treesArr, activeTree)}
        separation={{ siblings: 0.9, nonSiblings: 0.9 }}
        orientation={'vertical'}
        transitionDuration={0}
        translate={{ x: 500, y: 25 }}
        styles={{
          nodes: {
            node: {
              name: {
                fill: '#D3D3D3',
                stroke: '#D3D3D3',
                strokeWidth: 1,
              },
            },
            leafNode: {
              name: {
                fill: '#D3D3D3',
                stroke: '#D3D3D3',
                strokeWidth: 1,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Graph;
