(()=>{const e=Number(prompt("참가인원수를 입력하세요")),t=document.querySelector("#order"),n=document.getElementById("word"),r=document.querySelector("input"),o=document.querySelector("button"),u=document.querySelector("#result"),l=document.querySelector("#refer");let c,d,s=1;r.value="",r.focus(),r.addEventListener("input",(e=>{d=e.target.value})),r.addEventListener("keydown",(e=>{"Enter"===e.key&&a()}));const a=()=>{const e=/^[가-힣]{2}$/;c?c[c.length-1]===d[0]&&e.test(d)?(c=d,m(),r.value="",u.textContent="정답",l.textContent="상호간 이의가 있으면 국어사전을 찾아보세요",i()):(alert("두글자 한글로 입력하세요"),r.value=""):e.test(d)?(c=d,m(),r.value="",i()):(alert("두글자 한글로 입력하세요"),r.value="")},i=()=>{s=s%e+1,t.textContent=s},m=()=>{const e=c.slice(0,-1)+`<span style="color: blue">${c.slice(-1)}</span>`;n.innerHTML=e};o.addEventListener("click",a)})();