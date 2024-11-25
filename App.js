import React from 'react';
import ReactDOM from 'react-dom';

// React Element=> Object =>  HTML Element(render)

const heading = React.createElement('h1',{id:'heading'},"Hello React From Adarshit")

//JsX - it is kind of convention that helps to write a html like markup in javascript (i.e it is not html in js)


const jsxheading= <h1> Heading using JSX</h1>
//it is not a valid js but also a valid js

console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxheading);  