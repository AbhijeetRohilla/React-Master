const parent= React.createElement("div",{id:"parent"},
    [React.createElement("h1",{id:"heading1"},"I am H1 tag...."),
    React.createElement("h2",{id:"heading2"},"I am H2 tag")
],

React.createElement("h1",{id:"heading2.1"},"I am H1 tag...."),
React.createElement("h2",{id:"heading2.2"},"I am H2 tag"))



const myRoot= ReactDOM.createRoot(document.getElementById('root'));
console.log(parent)
myRoot.render(parent);