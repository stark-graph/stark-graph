import React from 'react';
import Tree from 'react-d3-tree';

const data2 = [11, 16, 14, 15, 22];
const data3 = [1, 2, 3, 4, 5];

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

const newTree = new Node(2);
for (let i = 0; i < data2.length; i++) {
  addNewNode(newTree, data2[i]);
}

const tree = filterEmptyStrings(newTree);

const TreeContainer = () => {
  // d3 expects an array of nested objects
  return <Tree data={[tree]} />;
};

export default TreeContainer;
