import React from 'react';

export default class Todo extends React.Component {
  render() {
    const { id, text, completed } = this.props;
    return (
      <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </li>
    )
  }
}