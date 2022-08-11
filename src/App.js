import React from 'react';
import './style.css';
import Person from './components/Person';

export default function App() {
  return (
    <div>
      <h1>Default Props!</h1>
      <Person name="John" />
      <Person name="Jasmine" age="23" />
      <Person age="33" designation="software engineer" />
    </div>
  );
}
