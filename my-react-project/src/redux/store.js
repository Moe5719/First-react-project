// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './reducer.js';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
