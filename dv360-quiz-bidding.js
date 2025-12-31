// DV360 입찰 & 예산 관리 퀴즈
const quizData = [
    {
        question: "CPM의 정확한 의미는?",
        answers: [
            "클릭 1회당 비용",
            "1000회 노출당 비용",
            "전환 1회당 비용",
            "1시간당 비용"
        ],
        correct: 1
    },
    {
        question: "Target CPA 입찰 전략의 목표는?",
        answers: [
            "클릭 수를 최대화",
            "노출 수를 최대화",
            "정해진 전환당 비용 목표를 유지하면서 전환 수를 최대화",
            "광고비를 최소화"
        ],
        correct: 2
    },
    {
        question: "Maximize Conversions와 Target CPA의 차이점은?",
        answers: [
            "차이 없음",
            "Maximize는 CPA 상관없이 전환 극대화, Target CPA는 목표 CPA 유지하며 전환 최적화",
            "Maximize가 더 비용 효율적",
            "Target CPA가 더 많은 전환 생성"
        ],
        correct: 1
    },
    {
        question: "ROAS란 무엇인가요?",
        answers: [
            "광고 클릭률",
            "광고비 대비 수익률 (Return On Ad Spend)",
            "광고 노출 횟수",
            "광고 승인율"
        ],
        correct: 1
    },
    {
        question: "Target ROAS 300%의 의미는?",
        answers: [
            "1원을 쓸 때마다 3원 이상 벌어야 함",
            "3원을 쓸 때마다 1원 벌어야 함",
            "광고비의 300%를 할인",
            "노출 수를 300% 증가"
        ],
        correct: 0
    },
    {
        question: "Fixed Bid(고정 입찰) 전략이 적합한 경우는?",
        answers: [
            "전환 최적화가 최우선일 때",
            "첫 캠페인 또는 학습/테스트 단계",
            "ROAS 극대화가 목표일 때",
            "예산이 무제한일 때"
        ],
        correct: 1
    },
    {
        question: "Bid Multiplier의 역할은?",
        answers: [
            "예산을 배로 늘림",
            "특정 조건(시간대, 디바이스 등)에서 입찰가를 조정",
            "광고를 중단",
            "크리에이티브 교체"
        ],
        correct: 1
    },
    {
        question: "Budget Pacing의 'ASAP' 옵션 의미는?",
        answers: [
            "예산을 균등하게 소진",
            "가능한 한 빨리 예산을 소진하여 최대 노출 확보",
            "예산의 50%만 사용",
            "예산 사용 안 함"
        ],
        correct: 1
    },
    {
        question: "한국 시장에서 Display 광고의 평균 CPM 범위는?",
        answers: [
            "100-300원",
            "1,000-3,000원",
            "10,000-30,000원",
            "100,000원 이상"
        ],
        correct: 1
    },
    {
        question: "vCPM (viewable CPM)의 특징은?",
        answers: [
            "클릭만 과금",
            "광고가 실제로 화면에 보일 때만 과금",
            "전환만 과금",
            "노출 여부 상관없이 과금"
        ],
        correct: 1
    },
    {
        question: "Target CPA 자동 입찰의 학습 기간은 일반적으로?",
        answers: [
            "1-3일",
            "2-4주",
            "6개월",
            "학습 불필요"
        ],
        correct: 1
    },
    {
        question: "Target ROAS를 사용하기 위한 필수 조건은?",
        answers: [
            "클릭 데이터만 있으면 됨",
            "Floodlight에서 매출(Revenue) 추적 필수",
            "노출 1억 이상",
            "필수 조건 없음"
        ],
        correct: 1
    },
    {
        question: "Bid Strategy 중 '트래픽 증대'가 목표일 때 적합한 것은?",
        answers: [
            "Target CPA",
            "Target ROAS",
            "Maximize Clicks",
            "Fixed CPM"
        ],
        correct: 2
    },
    {
        question: "Max Avg CPM Bid를 설정하는 이유는?",
        answers: [
            "노출을 늘리기 위해",
            "자동 입찰 시 입찰가가 너무 높아지는 것을 방지",
            "광고를 중단하기 위해",
            "의미 없음"
        ],
        correct: 1
    },
    {
        question: "Programmatic Guaranteed의 특징은?",
        answers: [
            "실시간 입찰로 가격 결정",
            "고정 가격과 고정 노출량을 보장하는 직접 거래",
            "가장 낮은 가격으로만 구매",
            "무료 광고"
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
        message = '완벽합니다! 입찰 전략의 모든 것을 마스터하셨네요!';
    } else if (percentage >= 80) {
        message = '훌륭합니다! 자동 입찰을 자신있게 운영할 수 있겠어요!';
    } else if (percentage >= 60) {
        message = '좋아요! Target CPA와 ROAS의 차이를 명확히 이해하셨네요!';
    } else if (percentage >= 40) {
        message = '입찰 전략별 차이점을 다시 정리해보세요!';
    } else {
        message = '입찰은 성과의 핵심입니다. 각 전략의 특징을 다시 학습해보세요!';
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
