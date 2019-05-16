import React, { useState } from 'react';

const handleAddElement = ({ event, input, addElement, setInput }) => {
  event.preventDefault();
  if (!/^[0-9]+$/.test(input)) {
    alert('only numbers allowed!');
    return;
  }
  addElement({ val: input });
  setInput('');
};

const LeftBar = props => {
  const [input, setInput] = useState('');

  const { addElement } = props;
  return (
    <div
      className='left-bar'
      style={{
        width: '20%',
        height: '100%',
        borderStyle: 'solid',
        borderWidth: '2px'
      }}
    >
      <form>
        <input
          type='text'
          name=''
          id=''
          placeholder='add node here'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type='submit'
          onClick={event =>
            handleAddElement({ event, input, addElement, setInput })
          }
        >
          add node
        </button>
      </form>
    </div>
  );
};

export default LeftBar;
