import React from 'react';
import ReactDOM from 'react-dom';

// React Element=> Object =>  HTML Element(render)

const heading = React.createElement('h1',{id:'heading'},"Hello React From Adarshit")
//jsx

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);  