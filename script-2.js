// DV360 중급 퀴즈 데이터
const quizData = [
    {
        question: "DV360에서 'Private Marketplace (PMP)' 거래의 특징은?",
        answers: [
            "누구나 참여할 수 있는 공개 경매",
            "초대받은 광고주만 참여할 수 있는 비공개 경매",
            "고정 가격으로만 구매 가능한 방식",
            "오프라인에서만 거래되는 방식"
        ],
        correct: 1
    },
    {
        question: "DV360에서 'Viewability'의 MRC 표준 기준은?",
        answers: [
            "광고의 50% 이상이 1초 이상 노출",
            "광고의 100% 전체가 1초 이상 노출",
            "광고의 50% 이상이 3초 이상 노출",
            "광고가 화면에 로드되기만 하면 됨"
        ],
        correct: 0
    },
    {
        question: "DV360의 'Floodlight'는 무엇을 위한 기능인가요?",
        answers: [
            "광고 소재의 밝기를 조절하는 기능",
            "전환 추적 및 측정을 위한 태그",
            "광고 게재 속도를 높이는 기능",
            "예산을 자동으로 배분하는 알고리즘"
        ],
        correct: 1
    },
    {
        question: "DV360에서 'Programmatic Guaranteed'의 특징은?",
        answers: [
            "실시간 입찰로 가격이 결정됨",
            "고정 가격과 고정 노출량을 보장하는 직접 거래",
            "가장 낮은 가격으로만 구매 가능",
            "자동으로 타겟이 설정되는 방식"
        ],
        correct: 1
    },
    {
        question: "DV360의 'Audience Lists'를 만들 때 사용할 수 없는 데이터는?",
        answers: [
            "웹사이트 방문 데이터",
            "앱 사용 데이터",
            "경쟁사의 고객 데이터베이스",
            "CRM 데이터"
        ],
        correct: 2
    },
    {
        question: "DV360에서 'Creative Rotation'의 'Optimize' 옵션은 어떻게 작동하나요?",
        answers: [
            "모든 크리에이티브를 균등하게 노출",
            "성과가 좋은 크리에이티브에 더 많은 노출 기회 제공",
            "최신 크리에이티브만 노출",
            "무작위로 크리에이티브 선택"
        ],
        correct: 1
    },
    {
        question: "DV360에서 'Brand Safety'를 위해 사용할 수 있는 방법이 아닌 것은?",
        answers: [
            "Keyword Targeting/Blocking",
            "Category Exclusions",
            "Third-party Verification Tools",
            "Competitor Ad Removal"
        ],
        correct: 3
    },
    {
        question: "DV360의 'Automated Bidding Strategy' 중 'Maximize Conversions'의 목표는?",
        answers: [
            "클릭 수를 최대화",
            "노출 수를 최대화",
            "정해진 예산 내에서 전환 수를 최대화",
            "광고 게재 시간을 최대화"
        ],
        correct: 2
    },
    {
        question: "DV360에서 'Attribution Model'이 아닌 것은?",
        answers: [
            "Last Click Attribution (마지막 클릭)",
            "Data-Driven Attribution (데이터 기반)",
            "Linear Attribution (선형)",
            "Random Attribution (무작위)"
        ],
        correct: 3
    },
    {
        question: "DV360에서 'Cross-Device Targeting'을 가능하게 하는 것은?",
        answers: [
            "IP 주소만 사용",
            "User ID와 Google 로그인 데이터 활용",
            "쿠키만 사용",
            "디바이스 MAC 주소 수집"
        ],
        correct: 1
    },
    {
        question: "DV360의 'Dynamic Creative Optimization (DCO)'의 주요 이점은?",
        answers: [
            "광고 제작 비용 절감만 가능",
            "사용자별로 최적화된 크리에이티브를 실시간으로 조합하여 보여줌",
            "광고 승인 과정을 자동화",
            "광고 소재를 자동으로 번역"
        ],
        correct: 1
    },
    {
        question: "DV360에서 'Inventory Packages'의 용도는?",
        answers: [
            "광고 소재를 묶어서 관리",
            "여러 퍼블리셔의 인벤토리를 하나의 패키지로 구매",
            "예산을 패키지 단위로 할당",
            "타겟 오디언스를 그룹화"
        ],
        correct: 1
    },
    {
        question: "DV360에서 'Reach & Frequency' 캠페인의 특징은?",
        answers: [
            "실시간 입찰만 가능",
            "예측 가능한 도달률과 빈도를 보장",
            "가장 저렴한 비용으로만 집행",
            "검색 광고에만 사용 가능"
        ],
        correct: 1
    },
    {
        question: "DV360에서 'Contextual Targeting'은 무엇을 기반으로 하나요?",
        answers: [
            "사용자의 개인 정보",
            "페이지의 콘텐츠와 주제",
            "사용자의 구매 이력",
            "사용자의 위치 정보만"
        ],
        correct: 1
    },
    {
        question: "DV360의 'Budget Pacing'에서 'ASAP' 옵션의 의미는?",
        answers: [
            "예산을 하루 종일 균등하게 사용",
            "가능한 한 빨리 예산을 소진하여 최대 노출 확보",
            "예산의 50%만 사용",
            "특정 시간대에만 예산 사용"
        ],
        correct: 1
    }
];

// 게임 상태 변수
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// DOM 요소
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

// 초기화
function init() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    totalQuestionsDisplay.textContent = quizData.length;

    // 문제 순서를 랜덤으로 섞기 (선택사항)
    shuffleArray(quizData);

    loadQuestion();
}

// 배열 섞기 함수
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 문제 로드
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

// 답변 선택
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

// 다음 문제
function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

// 결과 표시
function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    finalScoreDisplay.textContent = score;

    let message = '';
    const percentage = (score / quizData.length) * 100;

    if (percentage === 100) {
        message = '완벽합니다! 당신은 진정한 DV360 전문가입니다! 🏆';
    } else if (percentage >= 80) {
        message = '훌륭합니다! 중급 수준을 완벽히 이해하고 계시네요! 🎯';
    } else if (percentage >= 60) {
        message = '좋아요! DV360의 핵심 개념들을 잘 파악하고 계십니다! 💪';
    } else if (percentage >= 40) {
        message = '괜찮아요! 조금만 더 공부하면 전문가가 될 수 있어요! 📚';
    } else {
        message = '중급 내용은 조금 어려울 수 있어요. 기초부터 다시 복습해보세요! 🌱';
    }

    resultMessage.textContent = message;
}

// 재시작
function restart() {
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    init();
}

// 이벤트 리스너
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restart);

// 게임 시작
init();
