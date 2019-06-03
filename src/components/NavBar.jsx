import React, { useState } from 'react';
import TreeTab from './TreeTab.jsx';

const handleAddElement = ({ event, input, addElement, setInput }) => {
  event.preventDefault();
  if (!input || /\D/gm.test(input)) {
    alert('only numbers allowed!');
    return;
  }
  addElement({ val: input });
  setInput('');
};

const NavBar = props => {
  const [input, setInput] = useState('');

  const { addElement, changeActiveTree, treesArr } = props;
  return (
    <div className="navbar navbar-light bg-light">
      <form className="form-inline">
        <input
          className="form-control-mr-sm"
          type="text"
          placeholder="add node here"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type="submit btn"
          className="btn btn-outline-secondary btn-sm"
          onClick={event =>
            handleAddElement({ event, input, addElement, setInput })
          }
        >
          add node
        </button>
      </form>
      <div>
        {treesArr.map((el, idx) => (
          <TreeTab
            treeIdx={idx}
            key={`tree${idx}`}
            changeActiveTree={changeActiveTree}
          />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
