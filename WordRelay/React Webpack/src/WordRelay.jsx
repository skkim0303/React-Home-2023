const React = require('react');

const { Component } = React;


const number = Number(prompt('참가인원수를 입력하세요'));

const WordRelay = () => {
  const [order, setOrder] = React.useState('1');
  const [word, setWord] = React.useState('');      
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const [refer, setRefer] = React.useState('');
  const inputRef = React.useRef(null);

             
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onEnter = (e) => {
    if(e.key === 'Enter') {
      onSubmitForm(e);
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const koreanPattern = /^[가-힣]{2}$/; // 한글만 선택하는 정규표현식

    if (!word) { // 첫번째 제시어가 맞다면 (input창이 공백인 상태)
      if (koreanPattern.test(value)) { // 한글인 경우
        setWord(value);
        lastWordColor();
        // wordPad.textContent = word;
        setValue('');
        updateOrder();
      } else { // 한굴외인 경우
        alert('두글자 한글로 입력하세요');
        setValue('');
      }
    } else { // 두번째 제시어부터 
      // 올바른 제시어인가? 첫번째 단어끝 = 두번재 단어 첫번째 
      if (word[word.length - 1] === value[0] && koreanPattern.test(value)) {
        setWord(value);
        lastWordColor();
        // wordPad.textContent = word;
        setValue('');
        setResult('정답');
        setRefer('상호간 이의가 있으면 국어사전을 찾아보세요');
        updateOrder();

        //updateOrder() 를 통하여 로직만들어 줌
        // 나마지 연산자 %를 사용
        // 자기자신 % 자기자신보다 큰수의 결과는 자기자신값 반환

      } else { // 올바르지 않으면 다시 입력
        alert('두글자 한글로 입력 또는 끝말에 맞추어 입력하세요');
        setValue('');
      }
    };
  };

  const lastWordColor = () => {
    const highlightedWord = 
    word.slice(0, -1) + `<span style="color: blue">${word.slice(-1)}</span>`;
    
    return <div dangerouslySetInnerHTML = {{ __html: highlightedWord }} />;
  }

  const updateOrder = () => {
    setOrder((prevOrder) => (prevOrder % number) + 1);
  }

  return(
    <>
      <div><h3>두글자 한글 끝말잇기 게임</h3></div>
      <div><h4><span id="order">{order}</span>번째 참가자</h4></div>
      <div id="word-container">
        <h3>제시어: <span id="word">{lastWordColor()}</span></h3>
      </div>
      <form onSubmit = {onSubmitForm}>
        <input 
          type="text" 
          ref={inputRef} 
          value={value} 
          onChange={onChangeInput} 
          onKeyDown ={onEnter}
        />
        <button type="submit">확인</button>
      </form>
      <div>
        <h4>
          <span id="result">{result}</span>
        </h4>
      </div>
      <div>
        <h4>
          <span id="refer">{refer}</span>
        </h4>
      </div>
    </>
  );
}

module.exports = WordRelay;