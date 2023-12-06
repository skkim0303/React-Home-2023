const React = require('react');
// const { Component } = React;



// 구구단 코드 
const GuGuDan = () => {
  // data area: 변수 set변수 = react.useState(초기값);
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState('');
  const [result1, setResult1] = React.useState('');
  const [result2, setResult2] = React.useState('');
  const inputRef = React.useRef(null);

  const onSubmitForm = (e) => { // submit이 되었을때 구구단 로직에 맞는 결과표시
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult1('제출한 답: ' + value);
      setResult2('Correct!');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus();
    } else {
      setResult1('제출한 답: ' + value);
      setResult2('Try Again!');
      setValue('');
      inputRef.current.focus();
    }
  }

  const onChangeInput = (e) => { // 초기값에서 수동으로 바꾸어 줌: setValue
    setValue(e.target.value);
  }

  return ( // logic & screen area : setStae역할 => setValue가
    <>
      <div>{first} 곱하기 {second}는? </div>
      <form onSubmit = {onSubmitForm}>
        <input 
          type="number" value = {value} onChange = {onChangeInput} 
          ref={inputRef}
        />
        <button>확인</button>
      </form>          
      <div className={result2 === 'Correct!' ? 'correct' : 'incorrect'}>{result1}</div>
      <div className={result2 === 'Correct!' ? 'correct' : 'incorrect'}>{result2}</div>
    </>  
  );
}

module.exports = GuGuDan;