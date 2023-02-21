import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlise';
import { contactsReducer } from './contactsSlise';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
