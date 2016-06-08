import React    from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter  from './components/Counter';
import counter  from './reducers/counter';

const store = createStore(counter);

const onIncrement = () => {
  store.dispatch({ type: 'INCREMENT' });
};

const onDecrement = () => {
  store.dispatch({ type: 'DECREMENT' });
};


const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(<Counter value={store.getState()} onIncrement={onIncrement} onDecrement={onDecrement} />, rootEl);
}

render();
store.subscribe(render);
