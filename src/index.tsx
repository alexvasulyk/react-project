import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from './ui/boot/router/'

ReactDOM.render(
  <React.StrictMode>
    // Тут не добре, бо в тебе App буде показуватися завжди не зналежно від навігації (Залишив комент як це виправити у файлі router)
    <App />
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
