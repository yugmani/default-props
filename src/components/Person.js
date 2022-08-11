import React, { Component } from 'react';

class Person extends Component {
  render() {
    const { name, age, designation } = this.props;
    return (
      <div>
        <h3>
          {name} is {age} years old {designation}
        </h3>
      </div>
    );
  }
}

Person.defaultProps = {
  name: 'Andrew',
  age: '27',
  designation: 'full-stack developer',
};

export default Person;
