import React, { useState } from 'react';
import Serch from '../components/todoList/Serch';
import TodoList from '../components/todoList/TodoList';
import { CampWrapper, ItemWrapper } from '../Styles';
import { DarkModeProvider } from '../context/DarkModeContext';
const filters = ['all', 'active', 'completed'];

export default function Todo() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <CampWrapper>
        <ItemWrapper>
          <Serch filters={filters} filter={filter} onFilterChange={setFilter} />
          <TodoList filter={filter} />
        </ItemWrapper>
      </CampWrapper>
    </DarkModeProvider>
  );
}
