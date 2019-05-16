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
  constructor(val, isNewest) {
    this.name = val.toString();
    this.attributes = {};
    this.isNewest = isNewest;
    this.nodeSvgShape = {
      shape: 'circle',
      shapeProps: {
        r: 10,
        x: 0,
        y: 0,
        fill: isNewest ? 'red' : 'grey'
      }
    };
    this.children = ['', ''];
  }
}

// #TODO stop null nodes from rendering
const addNewNode = (node, val, isNewest) => {
  const newNode = new Node(val, isNewest);

  if (val > parseInt(node.name)) {
    if (node.children[1] === '') {
      node.children[1] = newNode;
    } else {
      addNewNode(node.children[1], val, isNewest);
    }
  } else if (val < parseInt(node.name)) {
    if (node.children[0] === '') {
      node.children[0] = newNode;
    } else {
      addNewNode(node.children[0], val, isNewest);
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
    let isNewest = i === arr.length - 1;
    addNewNode(newTree, arr[i], isNewest);
  }
  // d3 expects an array of objects
  return [filterEmptyStrings(newTree)];
};

const data2 = [11, 16, 14, 15, 22, 12, 13, 100];
const data = createTree(data2);

const Graph = () => {
  return (
    <div
      className='graph'
      style={{
        width: '80%',
        height: '100%',
        borderStyle: 'solid',
        borderWidth: '2px'
      }}
    >
      Binary Search Tree
      <Tree
        data={data}
        separation={{ siblings: 1, nonSiblings: 1 }}
        orientation={'vertical'}
        transitionDuration={0}
        translate={{ x: 500, y: 25 }}
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
