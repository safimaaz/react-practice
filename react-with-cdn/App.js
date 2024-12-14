const heading =  React.createElement("h1", {}, 'Asalam o alikum this is React');
const paragraph = React.createElement('p', {className: "para"}, "This is a testing paragraph");
const div = React.createElement('div', {style: {background: 'pink'}}, [heading, paragraph]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);