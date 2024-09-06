const heading = React.createElement('h1',{id:'heading'},"Hello, World from React!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
/*
1) console.log(heading) - heading is a react element which is a javascript object
2) render - React Element is passed to render function as a object which is then converted to a HTML Element and hence injected to the targeting element.
*/