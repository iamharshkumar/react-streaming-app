import React from 'react';
import Modal from '../Modal'

const StreamDelete = () => {
  const actions = (
    <div>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </div>
  );

  return (
      <Modal
        title="Delete Stream"
        content="Are you sure you want delete this stream?"
        actions={actions}
      />
  )
};

export default StreamDelete;
