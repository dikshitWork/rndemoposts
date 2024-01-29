import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: gDM => gDM({serializableCheck: false}),
});

export default store;
