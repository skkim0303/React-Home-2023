const number = Number(prompt('참가인원수를 입력하세요'));
// alert(number);
// confirm('입력한 참가인원이 맞나요?');

const order = document.querySelector('#order');
const wordPad = document.getElementById('word');
const input = document.querySelector('input');
const button = document.querySelector('button');
const result = document.querySelector('#result');
const refer = document.querySelector('#refer');

// 첫번째 제시어의 의미 
// 아무것도 쓰여져 있지 않다 input.value = '' 
// if(!word) 가 참일때 첫단어를 입력한다. input된 내용을 wordPad에 textContent로 
// 첫단어 변수는 word  다음단어 입력 변수는 nextWord, nextWrod가 입력되면 곧 word가 됨
// 입력한다는 개념은 e.target.value가 작동한다.

let word;
let nextWord;
let currentOrder = 1;

input.value = '';
input.focus();

// input작동 콜백함수 addEventListener 이용 기입 필요
const onInput = (e) => {
  nextWord = e.target.value;
}

const onEnter = (e) => {
  if(e.key === 'Enter') {
    onClick();
  }
}

input.addEventListener('input', onInput);
input.addEventListener('keydown', onEnter);


const onClick = ( ) => {

  const koreanPattern = /^[가-힣]{2}$/; // 한글만 선택하는 정규표현식

  if(!word) { // 첫번째 제시어가 맞다면 (input창이 공백인 상태)
    if(koreanPattern.test(nextWord)) { // 한글인 경우
      word = nextWord;
      lastWordColor();
      // wordPad.textContent = word;
      input.value = '';      
      updateOrder();
    } else { // 한굴외인 경우
      alert('두글자 한글로 입력하세요');
      input.value = '';
    }

  } else { // 두번째 제시어부터 
    // 올바른 제시어인가? 첫번째 단어끝 = 두번재 단어 첫번째 
    if (word[word.length - 1] === nextWord[0] && koreanPattern.test(nextWord)) {
      word = nextWord;
      lastWordColor();
      // wordPad.textContent = word;
      input.value = '';
      result.textContent = '정답';
      refer.textContent = '상호간 이의가 있으면 국어사전을 찾아보세요'
      updateOrder();

      //updateOrder() 를 통하여 로직만들어 줌
      // 나마지 연산자 %를 사용
      // 자기자신 % 자기자신보다 큰수의 결과는 자기자신값 반환

    } else { // 올바르지 않으면 다시 입력
      alert('두글자 한글로 입력하세요');
      input.value = '';
    }
  };
};

const updateOrder = () => {
  currentOrder = (currentOrder % number) + 1;
  order.textContent = currentOrder;
}

const lastWordColor = () => {
  const highlightedWord = word.slice(0, -1) + `<span style="color: blue">${word.slice(-1)}</span>`;
  wordPad.innerHTML = highlightedWord;
}

button.addEventListener('click', onClick);