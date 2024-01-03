// quote set
const quotes = [
    {quote: "하루하루를 마지막이라고 생각하라. 그러면 예측할 수 없는 시간은  그대에게 더 많은 시간을 줄 것이다.",
    author:"호레스 ",
    },
    {quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author:"괴테",
    },
    {quote: "내일이란 오늘의 다른 이름일 뿐이다.",
    author:"호레스 ",
    },
    {quote: " 화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아붓는 사랑의 정도이다.",
    author:"머더 테레사 ",
    },
    {quote: " 마음만을 가지고 있어서는 안 된다. 반드시 실천하여야 한다",
    author:"이소룡 ",
    },
    {quote: " 시간은 우리 각자가 가진 고유의 재산이요, 유일한 재산이다. 그것을 어떻게 사용할 것인지 결정할 수 있는 것은 오로지 우리 자신뿐이다. 결코 그 재산을 남이 우리 대신 사용하지 않도록 조심해라.",
    author:"칼 샌드버그 ",
    },
    {quote: "건강에 대한 지나친 걱정만큼 건강에 치명적인 것은 없다",
    author:"벤자민 프랭클린 ",
    },
    {quote: " 아침에 상쾌한 기분으로 일찍 일어나는 사람은 드물다. 대부분의 사람들은 그냥 일찍 일어날 뿐이다.",
    author:"P.P.  ",
    },
    {quote: "나는 매일 저녁 모든 근심 걱정을 하나님께 넘겨 드린다. 어차피 하나님은 밤에도 안 주무실 테니까.",
    author:"메리 C. 크라울리  ",
    },
    {quote: "오늘 일어나는 것이 무엇이든 간에 참고 견디라. 이것이 내일을 찬미케 하는 유일한 길이다.",
    author:"R. L 캘리엔  ",
    },
]

///변수
const quote = document.querySelector('#quote p:first-child');
const author = document.querySelector('#quote p:last-child');

// 변수 렌덤설정
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

// 명언 화면출력
quote.textContent = todaysQuote.quote;
author.textContent = todaysQuote.author;
