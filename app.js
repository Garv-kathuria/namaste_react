  //create Heading with object and text
  const heading=React.createElement("H1",{id:"Heading",xyz:"hello"},"Hello World from react");
  //react dom
  const root=ReactDOM.createRoot(document.getElementById("root"));
 //insert one element to another
 root.render(heading);

 //create nested element with multiple children
 const parent=React.createElement(
    "div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag"),
        React.createElement("h3",{},"I'm an h3 tag")]

)
)
//render parent tag
root.render(parent);
