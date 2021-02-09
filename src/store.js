import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

// function reduser(state = [], action){
//     return state;
// }


export default () => {
    const store = createStore (rootReducer, applyMiddleware(logger))
    return store;
}
// const store = create();
// function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([action.text])
//     default:
//       return state
//   }
// }

// const store = createStore(todos, ['Use Redux'])

// store.dispatch({
//   type: 'ADD_TODO',
// //   text: 'Read the docs'
// })

// console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]