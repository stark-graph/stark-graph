import React from 'react';
import Tree from 'react-d3-tree';
import { createTree } from '../utils/BST.js';
import { buildMaxHeap } from '../utils/heap.js';

const Graph = props => {
  const { treesArr, activeTree } = props;

  return (
    <div className="graph col-9">
      <Tree
        data={
          activeTree === 0
            ? createTree(treesArr[activeTree])
            : buildMaxHeap(treesArr[activeTree])
        }
        separation={{ siblings: 0.9, nonSiblings: 0.9 }}
        orientation="vertical"
        transitionDuration={0}
        translate={{ x: 550, y: 250 }}
        styles={{
          nodes: {
            node: {
              name: {
                fill: '#999',
                stroke: '#999',
              },
            },
            leafNode: {
              name: {
                fill: '#999',
                stroke: '#999',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Graph;
