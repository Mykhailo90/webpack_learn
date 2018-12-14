import React from 'react';
import ReactDOM from 'react-dom';

import { Greeter } from './greeter.jsx';

ReactDOM.render(
    <Greeter />,
    document.querySelector('#app')
);










// import { Greeter } from './greeter.js';
// import styles from './styles.scss';
// import logo from './webpack.png';

// const greeter = new Greeter();

// const message = greeter.greet('Hello', 'Webpack');

// const app = document.querySelector('#app');

// const img = document.createElement('img');
// img.src = logo;
// img.className = styles.logo;

// const h1 =  document.createElement('h1');
// h1.className = styles.title;
// h1.textContent = 'Welcome to webpack!!!';

// app.appendChild(img);
// app.appendChild(h1);

// console.log(logo);