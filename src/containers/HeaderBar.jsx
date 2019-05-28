import React from 'react';
import TreeTab from '../components/TreeTab.jsx';

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
      }}
    >
      {treesArr.map((el, idx) => (
        <TreeTab treeIdx={idx} key={idx} changeActiveTree={changeActiveTree} />
      ))}
    </div>
  );
};

export default HeaderBar;
