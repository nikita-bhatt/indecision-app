'use strict';

console.log('This app is running');

//JSX- JavaScript XML
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
