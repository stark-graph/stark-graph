import React from 'react';
import Tree from 'react-d3-tree';

// Tree instance
/*
<Tree
  data={[this.findChildren(focusComponent, components, tree)]}
  // data={[this.generateComponentTree(focusComponent.id, components)]}
  separation={{ siblings: 0.3, nonSiblings: 0.3 }}
  transitionDuration={0}
  translate={this.state.translate}
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
*/

class Node {
  constructor(val) {
    this.name = val.toString();
    this.attributes = {};
    this.children = ['', ''];
  }
}

// #TODO stop null nodes from rendering
const addNewNode = (node, val) => {
  const newNode = new Node(val);

  if (val > parseInt(node.name)) {
    if (node.children[0] === '') {
      node.children[0] = newNode;
    } else {
      addNewNode(node.children[0], val);
    }
  } else if (val < parseInt(node.name)) {
    if (node.children[1] === '') {
      node.children[1] = newNode;
    } else {
      addNewNode(node.children[1], val);
    }
  }
  return node;
};

const filterEmptyStrings = obj => {
  for (let key in obj) {
    if (key === 'children') {
      obj[key].forEach((node, i) => {
        if (node === '') {
          obj[key][i] = { name: 'null' };
        } else {
          filterEmptyStrings(obj[key][i]);
        }
      });
    }
  }
  return obj;
};

const createTree = arr => {
  const newTree = new Node(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    addNewNode(newTree, arr[i]);
  }
  // d3 expects an array of objects
  return [filterEmptyStrings(newTree)];
};

const data2 = [11, 16, 14, 15, 22, 12, 13, 100, 50];
const data = createTree(data2);

const Graph = () => {
  return (
    <div
      className='graph'
      style={{
        width: '80%',
        height: '100%',
        borderStyle: 'solid',
        borderSidth: '2px'
      }}
    >
      Binary Search Tree
      <Tree
        data={data}
        separation={{ siblings: 0.3, nonSiblings: 0.3 }}
        transitionDuration={0}
        translate={{ x: 200, y: 300 }}
        styles={{
          nodes: {
            node: {
              name: {
                fill: '#D3D3D3',
                stroke: '#D3D3D3',
                strokeWidth: 1
              }
            },
            leafNode: {
              name: {
                fill: '#D3D3D3',
                stroke: '#D3D3D3',
                strokeWidth: 1
              }
            }
          }
        }}
      />
    </div>
  );
};

export default Graph;
