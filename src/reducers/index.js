import { combineReducers } from 'redux';
import BooksReducer from './reducer__books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
