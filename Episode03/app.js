import React from "react";
import ReactDOM from "react-dom/client";

// react element
// const heading = React.createElement('h1',{id:'heading'},'Hello World');

// jsx element
// const heading = <h1 id='heading'>Hello World</h1>;

// react component

/*
const HeadingComponent = () => {
    return (
        <h1 id="heading">Hello World</h1>
    );
}
*/

// component composition

const Title = <h1 id='title'>Namaste React</h1>;
const Description = <p id='description'>This is a react course by akshay saini</p>;
const Syllabus = () => (<p id="syllabus"> React, ReactDOM, Redux, Tailwind</p>);
const Course = () => {
    return (
        <>
            {Title}
            {Description}
            <Syllabus />
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
// root.render(HeadingComponent())
// root.render(<HeadingComponent />);

root.render(<Course />);
