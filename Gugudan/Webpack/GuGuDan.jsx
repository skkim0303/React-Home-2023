// 본격코딩 시작되는 곳, client.jsx와 React, Module 연동 필요 
const React = require('react');
const { useState, useRef } = React;

// class GuGuDan extends React.Component를 비구조할당으로 아래와 같이 
const GuGuDan = () => {

  // state되는 항목들을 개별적으로, 초기 data값 적용 
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result1, setResult1] = useState('');
  const [result2, setResult2] = useState('');
  const inputRef = useRef();

  const onSubmitForm = (e) => { // 구구단 로직, 이벤트리스너
    e.preventDefault();
    if(parseInt(value) === first * second) {
      setResult1('제출답: ' + value);
      setResult2('정답');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus(); 
    } else {
      setResult1('제출답: ' + value);
      setResult2('Try Again!');
      setValue('');
      inputRef.current.focus();
    }
  }    

  const onChangeInput = (e) => { // input되는 방식, 이벤트리스너
    setValue(e.target.value);
  }
  
  console.log('렌더링');

  return ( // 화면 영역, 구구단 기본영역, form, input 등
    <>
      <div>{first} 곱하기 {second} = ?</div>
      <form onSubmit={onSubmitForm}>
        <input type="" ref={inputRef} value={value} onChange={onChangeInput}/>
        <button>입력</button>
      </form>
      <div id="result1">{result1}</div>          
      <div id="result2">{result2}</div>          
    </>
  );
}

// client.jsx와 연결 
module.exports = GuGuDan;


