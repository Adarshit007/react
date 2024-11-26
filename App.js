import React from 'react';
import ReactDOM from 'react-dom';

// React Element=> Object =>  HTML Element(render)

// const heading = React.createElement('h1',{id:'heading'},"Hello React From Adarshit")

//JsX - it is kind of convention that helps to write a html like markup in javascript (i.e it is not html in js)
// JSX - transpiles the code before it reacches the Js Engine -through PARCEL (Parcel through babel which is a compiler or a transpiler)


// const Title= () =>(      
//     <h1 className='head' tabIndex='5' >
//      Heading using JSX
//      </h1>
//      );



//it is not a valid js but also a valid js

//React Component
//class based components (old way of writing components)


//function based components(new way of writing components)

//Component Composition - when you  use a functional component inti another functional component it is called component composition
// const HeadingComponent =()=>{
//     return <div id='container'>
//         <Title/>
//     <h1> Namaste react Functioanl component</h1>
//     </div>
// }

const Title = ()=>{
    return <h1 className='head' tabIndex='5'>
        Hello and welcome to React
    </h1>
}

const HeadingComponent =()=>{
    return <div id='container'>
        <Title/>
        <h2> This is React</h2>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); 
root.render(<HeadingComponent/>);