import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App';

const state = {
  todos : [
            { id: 1, text: 'First Task',  completed: false },
            { id: 2, text: 'Second Task', completed: true },
          ],
  visibilityFilter : 'SHOW_ALL'
}

ReactDOM.render(
  <App state={state} />,
  document.getElementById('root')
);