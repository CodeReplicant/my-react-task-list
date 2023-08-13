import { Component } from 'react';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: false
    };
  }

  handleButtonClick = () => {
    this.setState({ isCompleted: !this.state.isCompleted });
  };

  render() {
    const buttonStyle = {
      borderRadius: this.state.isCompleted ? '50%' : '0%',
      backgroundColor: this.state.isCompleted ? 'green' : 'red',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer'
    };

    return (
      <div>
        <button
          style={buttonStyle}
          onClick={this.handleButtonClick}
        >
          {this.state.isCompleted ? 'Completed' : 'Incomplete'}
        </button>
      </div>
    );
  }
}

export default ButtonComponent;

