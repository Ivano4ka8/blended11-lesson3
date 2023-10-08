import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo } from './operations';

const todosSlice = createSlice({
  // Имя слайса
  name: 'todos',
  // Начальное состояние редюсера слайса
  initialState: { items: [], loading: false, error: null },
  extraReducers: {
    //fetchAll
    [fetchTodos.pending](state) {
      state.loading = true;
    },
    [fetchTodos.fulfilled](state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    [fetchTodos.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    //addTodo
    [addTodo.pending](state) {
      state.loading = true;
    },
    [addTodo.fulfilled](state, action) {
      state.loading = false;
      state.items.push(action.payload);
    },
    [addTodo.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    //deleteTodo
    [deleteTodo.pending](state) {
      state.loading = true;
    },
    [deleteTodo.fulfilled](state, action) {
      state.loading = false;
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    [deleteTodo.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Редюсер слайса
export const todosReducer = todosSlice.reducer;
