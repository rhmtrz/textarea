import React, { Component } from 'react';
//import { MyInput, MyAnotherInput } from 'myInputs'



class TextBox extends Component {
  constructor(props) {
    super(props)
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this)
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this)
  }

  handleOnKeyDown(e) {
    e.preventDefault()
  }

  handleOnKeyUp(e) {
    e.preventDefault()
  }

  handleOnKeyPress(e) {
    e.preventDefault()

    if (e.nativeEvent.keyCode === 13) {
      console.log('This is enter!')
    }
  }

  render() {
    const style = {
      padding: 30,
    }
    return (
      <div style={style}>
      <input
        onKeyDown={ this.handleOnKeyDown }
        onKeyUp={this.handleOnKeyUp}
        onKeyPress={ this.handleOnKeyPress }
      />
      </div>
    );
  }
}
export default TextBox;
