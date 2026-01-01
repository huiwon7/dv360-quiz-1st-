// DV360 퀴즈 데이터
const quizData = [
    {
        question: "DV360의 정식 명칭은 무엇인가요?",
        answers: [
            "Digital Video 360",
            "Display & Video 360",
            "Dynamic Video 360",
            "Digital & Virtual 360"
        ],
        correct: 1,
        explanation: "DV360의 정식 명칭은 'Display & Video 360'입니다. 이는 구글의 통합 광고 플랫폼으로, 디스플레이 광고와 비디오 광고를 모두 관리할 수 있는 종합 솔루션입니다."
    },
    {
        question: "DV360은 어떤 유형의 플랫폼인가요?",
        answers: [
            "소셜 미디어 관리 플랫폼",
            "이메일 마케팅 플랫폼",
            "프로그래매틱 광고 플랫폼",
            "검색 엔진 최적화 도구"
        ],
        correct: 2,
        explanation: "DV360은 프로그래매틱 광고 플랫폼입니다. 자동화된 광고 구매를 통해 실시간 입찰(RTB)과 데이터 기반 타겟팅으로 효율적인 광고 집행이 가능합니다."
    },
    {
        question: "DV360에서 광고 캠페인을 구성하는 기본 단위는 무엇인가요?",
        answers: [
            "Advertiser > Campaign > Insertion Order > Line Item",
            "Campaign > Advertiser > Line Item > Creative",
            "Line Item > Campaign > Advertiser > Creative",
            "Creative > Line Item > Campaign > Advertiser"
        ],
        correct: 0,
        explanation: "DV360의 계층 구조는 Advertiser(광고주) → Campaign(캠페인) → Insertion Order(예산/일정 관리) → Line Item(실행 단위) 순서입니다. 이 구조를 이해하는 것이 DV360 운영의 기본입니다."
    },
    {
        question: "DV360에서 '인벤토리'란 무엇을 의미하나요?",
        answers: [
            "광고 소재 보관함",
            "광고가 게재될 수 있는 공간",
            "타겟 오디언스 목록",
            "광고 예산 내역"
        ],
        correct: 1,
        explanation: "인벤토리(Inventory)는 광고가 게재될 수 있는 웹사이트, 앱, 동영상 등의 광고 공간을 의미합니다. DV360에서는 다양한 인벤토리 소스에 접근하여 광고를 집행할 수 있습니다."
    },
    {
        question: "DV360의 타겟팅 옵션이 아닌 것은?",
        answers: [
            "인구통계학적 타겟팅",
            "지리적 타겟팅",
            "행동 타겟팅",
            "음성 검색 타겟팅"
        ],
        correct: 3,
        explanation: "음성 검색 타겟팅은 DV360의 기본 타겟팅 옵션이 아닙니다. DV360은 인구통계, 지역, 관심사, 행동 등 다양한 타겟팅 옵션을 제공하지만 음성 검색 타겟팅은 포함되지 않습니다."
    },
    {
        question: "DV360에서 'Line Item'의 역할은 무엇인가요?",
        answers: [
            "광고 크리에이티브를 제작하는 곳",
            "타겟팅, 입찰, 예산 등을 설정하는 실행 단위",
            "광고주 정보를 관리하는 곳",
            "리포트를 생성하는 도구"
        ],
        correct: 1,
        explanation: "Line Item은 실제 광고가 실행되는 단위로, 타겟팅(누구에게), 입찰(얼마에), 예산(얼마까지), 크리에이티브(무엇을) 등을 설정하는 핵심 요소입니다."
    },
    {
        question: "DV360에서 사용하는 입찰 전략이 아닌 것은?",
        answers: [
            "Fixed Bid (고정 입찰)",
            "Maximize Conversions (전환 최대화)",
            "Target CPA (목표 CPA)",
            "Pay Per Click Only (클릭당 지불만)"
        ],
        correct: 3,
        explanation: "DV360은 Fixed Bid, Maximize Conversions, Target CPA 등 다양한 자동화 입찰 전략을 제공합니다. 'Pay Per Click Only'는 DV360의 입찰 전략이 아니며, DV360은 주로 CPM(노출당 과금) 기반으로 작동합니다."
    },
    {
        question: "DV360에서 'Frequency Capping'의 목적은 무엇인가요?",
        answers: [
            "광고 예산을 제한하기 위해",
            "동일한 사용자에게 광고가 너무 자주 노출되는 것을 방지하기 위해",
            "광고 게재 속도를 높이기 위해",
            "타겟 오디언스 수를 늘리기 위해"
        ],
        correct: 1,
        explanation: "Frequency Capping은 같은 사용자에게 광고가 과도하게 노출되는 것을 방지하는 기능입니다. 예를 들어 '하루 3회까지만 노출'로 설정하면 광고 피로도를 줄이고 예산을 효율적으로 사용할 수 있습니다."
    },
    {
        question: "DV360과 Google Ads의 주요 차이점은?",
        answers: [
            "DV360은 검색 광고만 지원한다",
            "Google Ads는 프로그래매틱 구매를 지원하지 않는다",
            "DV360은 더 복잡한 프로그래매틱 광고 구매를 위한 엔터프라이즈 솔루션이다",
            "둘은 완전히 동일한 플랫폼이다"
        ],
        correct: 2,
        explanation: "DV360은 대규모 광고주와 에이전시를 위한 엔터프라이즈급 프로그래매틱 플랫폼입니다. Google Ads보다 고급 타겟팅, 더 많은 인벤토리 접근, 복잡한 캠페인 관리 기능을 제공합니다."
    },
    {
        question: "DV360에서 '1st Party Data'란 무엇을 의미하나요?",
        answers: [
            "구글이 제공하는 데이터",
            "광고주가 직접 수집한 고객 데이터",
            "타사 데이터 공급업체로부터 구매한 데이터",
            "경쟁사의 데이터"
        ],
        correct: 1,
        explanation: "1st Party Data는 광고주가 자사 웹사이트, 앱, CRM 등을 통해 직접 수집한 고객 데이터입니다. 가장 정확하고 신뢰할 수 있는 데이터로, DV360에서 효과적인 타겟팅에 활용할 수 있습니다."
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
const explanationBox = document.getElementById('explanation-box');
const explanationText = document.getElementById('explanation-text');

// 초기화
function init() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    totalQuestionsDisplay.textContent = quizData.length;
    loadQuestion();
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
    explanationBox.style.display = 'none';

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

    // Display explanation
    explanationText.textContent = quizData[currentQuestion].explanation;
    explanationBox.style.display = 'block';
    explanationBox.style.visibility = 'visible';
    explanationBox.style.opacity = '1';

    // Scroll to explanation on mobile
    setTimeout(() => {
        explanationBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);

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
        message = '완벽합니다! DV360 전문가시네요!';
    } else if (percentage >= 80) {
        message = '훌륭합니다! DV360에 대해 잘 알고 계시네요!';
    } else if (percentage >= 60) {
        message = '좋아요! 조금만 더 공부하면 전문가가 될 수 있어요!';
    } else if (percentage >= 40) {
        message = '괜찮아요! DV360에 대해 더 알아가는 중이시네요!';
    } else {
        message = '시작이 반입니다! DV360을 더 공부해보세요!';
    }

    resultMessage.textContent = message;

    // 점수 저장
    saveScore('초보자 퀴즈 (Level 1)', score, quizData.length);
}

// 점수 저장 함수
function saveScore(quizName, score, totalQuestions) {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return;

    const scoresKey = `scores_${currentUser}`;
    let scores = JSON.parse(localStorage.getItem(scoresKey) || '[]');

    const scoreData = {
        quizName: quizName,
        score: score,
        totalQuestions: totalQuestions,
        percentage: ((score / totalQuestions) * 100).toFixed(1),
        passed: (score / totalQuestions) >= 0.8,
        date: new Date().toISOString()
    };

    scores.push(scoreData);
    localStorage.setItem(scoresKey, JSON.stringify(scores));
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
