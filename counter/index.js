import React    from 'react';
import ReactDOM from 'react-dom';
import Counter  from './components/Counter';

const rootEl = document.getElementById('root');



const onIncrement = () => {
  console.log('increment!')
};

const onDecrement = () => {
  console.log('decrement!')
};

ReactDOM.render(<Counter onIncrement={onIncrement} onDecrement={onDecrement} />, rootEl);