'use strict';

const e = React.createElement;

class clickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'You clicked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ clicked: true }) },
      'Click me'
    );
  }
}

class clickButton2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { clicked: false };
    }
  
    render() {
      if (this.state.clicked) {
        return 'You clicked this.';
      }
  
      return e(
        'button',
        { onClick: () => this.setState({ clicked: false }) },   // bug: should be true
        'Click me'
      );
    }
  }

const workingBtn = document.querySelector('#working_button');
ReactDOM.render(e(clickButton), workingBtn);

const brokenBtn = document.querySelector('#broken_button');
ReactDOM.render(e(clickButton2), brokenBtn);