import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'redux/operations';
import { useState } from 'react';
import EditModal from 'components/EditModal/EditModal';

export const Todo = ({ text, counter, id }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <DeleteButton
          style={{ top: '30px' }}
          type="button"
          onClick={toggleModal}
        >
          Edit
        </DeleteButton>
        <EditModal
          modalIsOpen={showModal}
          closeModal={toggleModal}
          text={text}
          id={id}
        />
      </TodoWrapper>
    </>
  );
};
