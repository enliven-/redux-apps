import React    from 'react';
import TodoList from './TodoList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        App!
        <TodoList todos={this.props.state.todos} />
      </div>
    );
  }
}