import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import TextBox from './textarea/textBox';
import TextEdit from './textarea/textEdit';


ReactDOM.render(
  <div>
    <TextBox />
    <TextEdit />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
