import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import EditorPage from './textarea/textarea';
import TextEdit from './textarea/textEdit';


ReactDOM.render(
  <div>
    <EditorPage />
    <TextEdit />
    <App />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
