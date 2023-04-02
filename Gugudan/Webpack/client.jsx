const React = require('react');
const ReactDOM = require('react-dom');

/* client.jsx에서 본격코딩이 일어나지만 용량이 커질수 있으니 필요한 
파일만 취해서 client,jsx에서 반영 */
const GuGuDan = require('./GuGuDan.jsx');

ReactDOM.createRoot(document.querySelector('#root')).render(<GuGuDan />);