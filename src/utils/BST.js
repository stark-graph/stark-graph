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
        fill: isNewest ? '#f08d49' : '#cc99cd',
      },
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
  for (const key of Object.keys(obj)) {
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

export const createTree = arr => {
  const newTree = new Node(arr[0]);
  for (let i = 1; i < arr.length; i += 1) {
    const isNewest = i === arr.length - 1;
    addNewNode(newTree, arr[i], isNewest);
  }
  // d3 expects an array of objects
  return [filterEmptyStrings(newTree)];
};
