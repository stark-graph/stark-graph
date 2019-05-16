import React from 'react';
import Tree from 'react-d3-tree';
import { createTree } from '../utils/BST.js';

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
        data={createTree(treesArr[activeTree])}
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
