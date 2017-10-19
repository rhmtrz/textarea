
import React, { Component } from 'react';


class EditorPage extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const style = {
      padding: 50,
      fontSize: 30,
    }
    return (
      <div style={style}>
        <textarea type="text" placeholder="Enter your text!"  />
      </div>
    );
  }
}

export default EditorPage;
