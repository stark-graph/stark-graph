import React from 'react';
import Tree from 'react-d3-tree';

const dummyTrees = [
  [
    {
      name: 'App1',
      attributes: {},
      children: [
        { name: 'Image', attributes: {}, children: [] },
        {
          name: 'Board',
          attributes: {},
          children: [
            {
              name: 'Row',
              attributes: {},
              children: [
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
              ],
            },
            {
              name: 'Row',
              attributes: {},
              children: [
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
              ],
            },
            {
              name: 'Row',
              attributes: {},
              children: [
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  [
    {
      name: 'App2',
      attributes: {},
      children: [
        { name: 'Image', attributes: {}, children: [] },
        {
          name: 'Board',
          attributes: {},
          children: [
            {
              name: 'Row',
              attributes: {},
              children: [
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
              ],
            },
            {
              name: 'Row',
              attributes: {},
              children: [
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
              ],
            },
            {
              name: 'Row',
              attributes: {},
              children: [
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
                {
                  name: 'Box',
                  attributes: {},
                  children: [{ name: 'Button', attributes: {}, children: [] }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  {
    name: 'App1',
    attributes: {},
    children: [
      { name: 'Image', attributes: {}, children: [] },
      {
        name: 'Board',
        attributes: {},
        children: [
          {
            name: 'Row',
            attributes: {},
            children: [
              {
                name: 'Box',
                attributes: {},
                children: [{ name: 'Button', attributes: {}, children: [] }],
              },
              {
                name: 'Box',
                attributes: {},
                children: [{ name: 'Button', attributes: {}, children: [] }],
              },
              {
                name: 'Box',
                attributes: {},
                children: [{ name: 'Button', attributes: {}, children: [] }],
              },
            ],
          },
          {
            name: 'Row',
            attributes: {},
            children: [
              {
                name: 'Box',
                attributes: {},
                children: [{ name: 'Button', attributes: {}, children: [] }],
              },
              {
                name: 'Box',
                attributes: {},
                children: [{ name: 'Button', attributes: {}, children: [] }],
              },
              {
                name: 'Box',
                attributes: {},
                children: [{ name: 'Button', attributes: {}, children: [] }],
              },
            ],
          },
          {
            name: 'Row',
            attributes: {},
            children: [
              {
                name: 'Box',
                attributes: {},
                children: [{ name: 'Button', attributes: {}, children: [] }],
              },
              {
                name: 'Box',
                attributes: {},
                children: [{ name: 'Button', attributes: {}, children: [] }],
              },
              {
                name: 'Box',
                attributes: {},
                children: [{ name: 'Button', attributes: {}, children: [] }],
              },
            ],
          },
        ],
      },
    ],
  },
];

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

const Graph = () => {
  return (
    <div className="graph" style={{ width: '80%', height: '100%', borderStyle: 'solid', borderSidth: '2px' }}>
      Graph
      <Tree
        data={dummyTrees[0]}
        separation={{ siblings: 0.3, nonSiblings: 0.3 }}
        transitionDuration={0}
        translate={{ x: 200, y: 300 }}
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
