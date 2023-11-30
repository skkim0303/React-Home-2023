// 기본적으로 모든 코드는 이곳에, 양이 많을 경우 별도 코드 분리

const React = require('react');
const ReactDOM = require('react-dom');

// 분리
const GuGuDan = require('./GuGuDan.jsx');


ReactDOM.createRoot(document.querySelector('#root')).render(<GuGuDan />);