// DV360 최적화 & 성과 분석 퀴즈
const quizData = [
    {
        question: "Display 광고에서 일반적으로 '좋은' CTR(클릭률)은?",
        answers: [
            "0.01% 이상",
            "0.3% 이상",
            "5% 이상",
            "10% 이상"
        ],
        correct: 1
    },
    {
        question: "Viewability가 70% 이상이라는 것의 의미는?",
        answers: [
            "광고의 70% 이상이 화면에 보임",
            "사용자의 70%가 광고 클릭",
            "광고비의 70%를 사용",
            "70%의 사이트에 광고 게재"
        ],
        correct: 0
    },
    {
        question: "Frequency(빈도)가 10회/주 이상일 때 취해야 할 조치는?",
        answers: [
            "예산 증액",
            "Frequency Cap 설정하여 광고 피로도 방지",
            "캠페인 중단",
            "아무 조치 불필요"
        ],
        correct: 1
    },
    {
        question: "Device 분석 결과 Mobile의 CPA가 Desktop보다 낮을 때 최적화 방법은?",
        answers: [
            "Mobile 제외",
            "Desktop만 타겟팅",
            "Mobile에 Bid Multiplier 증가 적용",
            "아무 조치 안 함"
        ],
        correct: 2
    },
    {
        question: "Time of Day 분석에서 점심시간(12-13시)의 성과가 좋을 때 조치는?",
        answers: [
            "점심시간 광고 중단",
            "점심시간 Bid 증가 (예: +30%)",
            "점심시간 타겟팅 제외",
            "변경 불필요"
        ],
        correct: 1
    },
    {
        question: "Site/App 성과 분석 중 'unknown_app'에서 CTR이 극도로 낮을 때 의심해야 할 것은?",
        answers: [
            "정상적인 트래픽",
            "봇(Bot) 트래픽 또는 저품질 인벤토리",
            "프리미엄 사이트",
            "고가치 사용자"
        ],
        correct: 1
    },
    {
        question: "A/B 테스트에서 Creative A의 CTR이 0.25%, Creative B가 0.42%일 때 조치는?",
        answers: [
            "둘 다 계속 사용",
            "Creative A 비활성화, B 유사 스타일로 추가 제작",
            "Creative B 비활성화",
            "새로운 C, D 제작"
        ],
        correct: 1
    },
    {
        question: "Full-Funnel 마케팅의 올바른 순서는?",
        answers: [
            "Conversion → Awareness → Consideration → Loyalty",
            "Awareness → Consideration → Conversion → Loyalty",
            "Loyalty → Conversion → Awareness",
            "순서 상관없음"
        ],
        correct: 1
    },
    {
        question: "Awareness 캠페인에서 가장 중요한 KPI는?",
        answers: [
            "Conversions (전환)",
            "Impressions & Reach (노출 & 도달)",
            "CPA (전환당비용)",
            "ROAS (광고수익률)"
        ],
        correct: 1
    },
    {
        question: "Conversion 캠페인에서 타겟팅해야 할 오디언스는?",
        answers: [
            "사이트 미방문자",
            "사이트 방문자 & 장바구니 포기자",
            "이미 구매한 고객만",
            "경쟁사 고객"
        ],
        correct: 1
    },
    {
        question: "Floodlight 활동 태그의 역할은?",
        answers: [
            "광고 소재 제작",
            "전환 추적 및 측정",
            "예산 관리",
            "타겟팅 설정"
        ],
        correct: 1
    },
    {
        question: "Dynamic Creative Optimization (DCO)의 주요 이점은?",
        answers: [
            "광고비 절감만 가능",
            "사용자별로 최적화된 크리에이티브를 실시간 조합",
            "광고 승인 자동화",
            "타겟팅 불필요"
        ],
        correct: 1
    },
    {
        question: "Brand Safety를 위해 사용할 수 있는 방법이 아닌 것은?",
        answers: [
            "Keyword Blocking",
            "Category Exclusions",
            "Third-party Verification Tools",
            "경쟁사 광고 자동 삭제"
        ],
        correct: 3
    },
    {
        question: "일일 성과 보고서에서 1순위로 확인해야 할 지표는?",
        answers: [
            "Reach (도달)",
            "Impressions, Clicks, CTR, Spend",
            "Video Completion Rate",
            "Frequency"
        ],
        correct: 1
    },
    {
        question: "CPA가 목표보다 30% 높을 때 취해야 할 조치는?",
        answers: [
            "예산 2배 증액",
            "전환하지 않는 Audience 제외, Bid 조정",
            "캠페인 즉시 중단",
            "아무 조치 안 함"
        ],
        correct: 1
    }
];

// 게임 로직
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
        message = '완벽합니다! 당신은 진정한 DV360 최적화 전문가입니다!';
    } else if (percentage >= 80) {
        message = '훌륭합니다! 데이터 기반 최적화를 실무에 바로 적용할 수 있겠어요!';
    } else if (percentage >= 60) {
        message = '좋아요! 성과 지표 분석과 액션 플랜 수립 능력이 탄탄합니다!';
    } else if (percentage >= 40) {
        message = '최적화 체크리스트를 다시 정리해보세요!';
    } else {
        message = '최적화는 DV360 운영의 핵심입니다. 학습 자료를 다시 복습해보세요!';
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
