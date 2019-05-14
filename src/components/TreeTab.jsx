import React from 'react';

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

// add onClick to change focusTree
const Graph = props => {
  return (
    <div className="treeTab" style={{ width: '20%', height: '100%', borderStyle: 'solid', borderSidth: '2px' }}>
      {`Tree ${props.treeId}`}
    </div>
  );
};

export default Graph;
