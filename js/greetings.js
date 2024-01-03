// 변수설정
const loginForm = document.querySelector('#login_form');
const loginInput = document.querySelector('#login_form input');
const loginButton = document.querySelector('button');
const greeting = document.querySelector('#greeting')

// string보다 변수를쓰면 오타났을때 js가 오류잡아줌 
const HIDDEN_CLASSNAME = 'hidden';
const USENAME_KEY = 'username';

// submit 이벤트 
const onLoginSubmit=(event)=>{
    //js기본동작(새로고침)을 막는 코드 
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME)
    console.log(username) 
    localStorage.setItem(USENAME_KEY, username)
    paintGreetings()
}

// 인사말 출력 함수 
const paintGreetings=()=>{
    const username = localStorage.getItem(USENAME_KEY)
    greeting.textContent = `Hello ${username}!!`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}


//  username 불러오는 변수설정 
// (username localStroge에 저장해서 새로고침해도 보여주기)
const savedUsername  = localStorage.getItem(USENAME_KEY)

if(savedUsername  == null){
    // 폼 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // submit 이벤트는 버튼,엔터를 누르때 발생
    loginForm.addEventListener('submit', onLoginSubmit)
}else{
    // greeting 보여주기
    paintGreetings()
}