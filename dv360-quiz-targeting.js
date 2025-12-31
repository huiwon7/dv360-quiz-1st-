// DV360 타겟팅 전략 퀴즈
const quizData = [
    {
        question: "Customer Match를 사용하기 위한 최소 필요 데이터 개수는?",
        answers: [
            "100개",
            "500개",
            "1,000개 이상",
            "10,000개"
        ],
        correct: 2
    },
    {
        question: "Customer Match에서 사용할 수 있는 Identifier(식별자)가 아닌 것은?",
        answers: [
            "Email 주소 (hashed)",
            "전화번호 (hashed)",
            "Mobile Advertising ID (IDFA/GAID)",
            "사용자의 IP 주소"
        ],
        correct: 3
    },
    {
        question: "Customer Match의 일반적인 매칭률은?",
        answers: [
            "10-20%",
            "30-60%",
            "80-90%",
            "거의 100%"
        ],
        correct: 1
    },
    {
        question: "Contextual Targeting의 특징은?",
        answers: [
            "사용자의 과거 행동을 기반으로 타겟팅",
            "사용자가 현재 보고 있는 콘텐츠를 기반으로 타겟팅",
            "사용자의 위치 정보만 사용",
            "쿠키가 반드시 필요함"
        ],
        correct: 1
    },
    {
        question: "Lookalike Audience(유사 고객)를 만들기 위한 소스로 적합한 것은?",
        answers: [
            "무작위로 선택된 사용자",
            "전환한 고객 리스트",
            "광고를 본 모든 사용자",
            "경쟁사 고객"
        ],
        correct: 1
    },
    {
        question: "Geography Targeting에서 'Include'와 'Exclude'의 차이는?",
        answers: [
            "차이 없음",
            "Include는 해당 지역만 타겟팅, Exclude는 해당 지역 제외",
            "Include는 제외, Exclude는 포함",
            "둘 다 같은 의미"
        ],
        correct: 1
    },
    {
        question: "Demographics Targeting에서 설정할 수 있는 것이 아닌 것은?",
        answers: [
            "Age (연령)",
            "Gender (성별)",
            "Parental Status (자녀 유무)",
            "신용점수"
        ],
        correct: 3
    },
    {
        question: "Device Targeting에서 선택할 수 있는 디바이스 유형이 아닌 것은?",
        answers: [
            "Desktop",
            "Mobile",
            "Tablet",
            "Smart Watch"
        ],
        correct: 3
    },
    {
        question: "Retargeting(재타겟팅)의 목적은?",
        answers: [
            "새로운 고객 발굴",
            "사이트 방문했지만 전환하지 않은 사용자에게 재접근",
            "경쟁사 고객 타겟팅",
            "광고비 절감만을 위함"
        ],
        correct: 1
    },
    {
        question: "In-Market Audience의 특징은?",
        answers: [
            "과거에 구매한 고객",
            "현재 특정 제품/서비스를 구매할 의도가 있는 사용자",
            "브랜드 충성 고객",
            "광고를 클릭한 모든 사용자"
        ],
        correct: 1
    },
    {
        question: "1st Party Data란?",
        answers: [
            "구글이 제공하는 데이터",
            "광고주가 직접 수집한 고객 데이터",
            "타사 데이터 공급업체로부터 구매한 데이터",
            "경쟁사의 데이터"
        ],
        correct: 1
    },
    {
        question: "Cookie-less 환경에서 가장 효과적인 타겟팅 방식은?",
        answers: [
            "3rd Party Cookie 기반 타겟팅",
            "Contextual Targeting + 1st Party Data",
            "IP 주소 기반 타겟팅만 사용",
            "타겟팅 없이 전체 노출"
        ],
        correct: 1
    },
    {
        question: "Audience Segmentation에서 'Hot Leads'는?",
        answers: [
            "사이트를 한 번도 방문하지 않은 사용자",
            "최근 7일 내 상품 페이지 방문, 장바구니 추가했지만 미구매 사용자",
            "이미 구매를 완료한 고객",
            "경쟁사 사이트 방문자"
        ],
        correct: 1
    },
    {
        question: "Contextual Targeting 설정 시 사용할 수 있는 것이 아닌 것은?",
        answers: [
            "Keywords (키워드)",
            "Categories (카테고리)",
            "Topics (주제)",
            "사용자의 과거 구매 이력"
        ],
        correct: 3
    },
    {
        question: "Frequency Cap을 설정하는 이유는?",
        answers: [
            "광고비를 절감하기 위해",
            "동일한 사용자에게 광고가 너무 자주 노출되는 것을 방지",
            "타겟 오디언스 수를 늘리기 위해",
            "클릭률을 높이기 위해"
        ],
        correct: 1
    }
];

// 게임 로직 (동일)
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
const currentQuestionDisplay = document.getElementById('current-question');
const totalQuestionsDisplay = document.getElementById('total-questions');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const finalScoreDisplay = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');

function init() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    totalQuestionsDisplay.textContent = quizData.length;
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        showResults();
        return;
    }

    const question = quizData[currentQuestion];
    questionText.textContent = question.question;
    currentQuestionDisplay.textContent = currentQuestion + 1;

    answersContainer.innerHTML = '';
    selectedAnswer = null;
    nextBtn.style.display = 'none';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(index) {
    if (selectedAnswer !== null) return;

    selectedAnswer = index;
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    const correctAnswer = quizData[currentQuestion].correct;

    buttons.forEach((button, i) => {
        button.disabled = true;
        if (i === correctAnswer) {
            button.classList.add('correct');
        }
        if (i === index && i !== correctAnswer) {
            button.classList.add('incorrect');
        }
    });

    if (index === correctAnswer) {
        score++;
        scoreDisplay.textContent = score;
    }

    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    finalScoreDisplay.textContent = score;

    let message = '';
    const percentage = (score / quizData.length) * 100;

    if (percentage === 100) {
        message = '완벽합니다! 타겟팅 전략의 달인이시네요!';
    } else if (percentage >= 80) {
        message = '훌륭합니다! 고급 타겟팅 기법을 잘 이해하고 계시네요!';
    } else if (percentage >= 60) {
        message = '좋아요! Customer Match와 Lookalike를 실무에 적용해보세요!';
    } else if (percentage >= 40) {
        message = '타겟팅 옵션들을 다시 정리해보면 도움이 될 거예요!';
    } else {
        message = '타겟팅은 DV360의 핵심입니다. 학습 자료를 다시 복습해보세요!';
    }

    resultMessage.textContent = message;
}

function restart() {
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    init();
}

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restart);

init();
