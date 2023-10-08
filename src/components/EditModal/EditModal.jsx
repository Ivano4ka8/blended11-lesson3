import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTodo } from 'redux/operations';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const EditModal = ({ modalIsOpen, closeModal, text, id }) => {
  const [query, setQuery] = useState(text);
  const dispatch = useDispatch();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const todo = { id, text: query };

    dispatch(editTodo(todo));
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
      </form>
    </Modal>
  );
};

export default EditModal;
