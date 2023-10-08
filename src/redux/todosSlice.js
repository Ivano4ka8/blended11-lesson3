import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  // Имя слайса
  name: 'todos',
  // Начальное состояние редюсера слайса
  initialState: { items: [] },
  // Объект редюсеров
  reducers: {
    addTodo(state, { payload }) {
      state.items.push(payload);
    },
    deleteTodo(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

// Генераторы экшенов
export const { addTodo, deleteTodo } = todosSlice.actions;
// Редюсер слайса
export const todosReducer = todosSlice.reducer;
