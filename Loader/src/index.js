import { hello, add } from './util';
import './style.css';
import './header.css';


const text = hello('<h1>어렵지만 할수있다.더 해보자</h1>');
const num = add(1, 2);


document.getElementById('root').innerHTML = text + num;