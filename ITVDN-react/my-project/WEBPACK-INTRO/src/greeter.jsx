import React from 'react';
import ReactDOM from 'react-dom';
export class Greeter extends React.Component {
    render () {
        return (<h1>Hello React from Webpack</h1>);
    }
}

// export class Greeter {
//     prefix = 'GREETER:';

//     greet(greeting, object){
//         return `${this.prefix} ${greeting}, ${object}!!!!`;
//     }
// }