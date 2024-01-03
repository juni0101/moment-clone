const clock = document.querySelector('h2#clock');

const getClock =()=>{
    // date object는 현재시간을 알려줌
    const date = new Date();
    // padStart를사용해서 2자리수로 표현하기위해서는 number를  string으로 변환해야함
    //  padStart(2, '0')메서드는 시, 분, 초의 문자열 표현 길이가 항상 최소 2자인지 확인하는 데 사용됨. 값이 한 자리이면 앞에 0이 추가됨.
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText =`${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000)

