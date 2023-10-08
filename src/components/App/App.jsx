import { Container, Header, SearchForm, Section, Text } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTodos,
  selectLoading,
  selectError,
  selectFilter,
} from 'redux/selectors';
import TodoList from 'components/TodoList/TodoList';
import { useEffect } from 'react';
import { fetchTodos } from 'redux/operations';
import { setFilter } from 'redux/filterSlice';

export const App = () => {
  const todos = useSelector(selectTodos);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={e => dispatch(setFilter(e.target.value))}
          />
          <SearchForm />
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
