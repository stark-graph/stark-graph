import React from 'react';
import TreeTab from '../components/TreeTab.jsx';

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

const HeaderBar = props => {
  const { changeActiveTree, treesArr } = props;
  return (
    <div
      className="header-bar"
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        borderStyle: 'solid',
        borderWidth: '2px',
      }}
    >
      {treesArr.map((el, idx) => (
        <TreeTab treeIdx={idx} key={idx} changeActiveTree={changeActiveTree} />
      ))}
    </div>
  );
};

export default HeaderBar;
