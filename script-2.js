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
        correct: 1,
        explanation: "Private Marketplace(PMP)는 퍼블리셔가 선택한 광고주만 초대하여 프리미엄 인벤토리를 경매 방식으로 판매하는 프로그래매틱 거래 방식입니다. 공개 경매보다 브랜드 세이프티가 높고 우수한 지면을 확보할 수 있습니다."
    },
    {
        question: "DV360에서 'Viewability'의 MRC 표준 기준은?",
        answers: [
            "광고의 50% 이상이 1초 이상 노출",
            "광고의 100% 전체가 1초 이상 노출",
            "광고의 50% 이상이 3초 이상 노출",
            "광고가 화면에 로드되기만 하면 됨"
        ],
        correct: 0,
        explanation: "MRC(Media Rating Council) 표준에 따르면, 디스플레이 광고는 50% 이상이 1초 이상 화면에 보여야 viewable impression으로 인정됩니다. 비디오 광고는 50% 이상이 2초 이상 노출되어야 합니다."
    },
    {
        question: "DV360의 'Floodlight'는 무엇을 위한 기능인가요?",
        answers: [
            "광고 소재의 밝기를 조절하는 기능",
            "전환 추적 및 측정을 위한 태그",
            "광고 게재 속도를 높이는 기능",
            "예산을 자동으로 배분하는 알고리즘"
        ],
        correct: 1,
        explanation: "Floodlight는 DV360과 Campaign Manager의 전환 추적 태그입니다. 웹사이트에 설치하여 구매, 가입, 다운로드 등의 전환 행동을 추적하고, 이 데이터로 캠페인 성과를 측정하고 최적화할 수 있습니다."
    },
    {
        question: "DV360에서 'Programmatic Guaranteed'의 특징은?",
        answers: [
            "실시간 입찰로 가격이 결정됨",
            "고정 가격과 고정 노출량을 보장하는 직접 거래",
            "가장 낮은 가격으로만 구매 가능",
            "자동으로 타겟이 설정되는 방식"
        ],
        correct: 1,
        explanation: "Programmatic Guaranteed는 전통적인 직접 거래(Direct Deal)를 자동화한 방식입니다. 광고주와 퍼블리셔가 미리 가격과 노출량을 협상하고, DV360을 통해 자동으로 집행됩니다. 입찰 없이 확정된 조건으로 프리미엄 인벤토리를 확보할 수 있습니다."
    },
    {
        question: "DV360의 'Audience Lists'를 만들 때 사용할 수 없는 데이터는?",
        answers: [
            "웹사이트 방문 데이터",
            "앱 사용 데이터",
            "경쟁사의 고객 데이터베이스",
            "CRM 데이터"
        ],
        correct: 2,
        explanation: "자사의 웹사이트 방문 데이터, 앱 사용 데이터, CRM 데이터는 1st Party Data로 활용할 수 있지만, 경쟁사의 고객 데이터베이스는 법적, 윤리적으로 사용할 수 없으며 개인정보보호법 위반입니다."
    },
    {
        question: "DV360에서 'Creative Rotation'의 'Optimize' 옵션은 어떻게 작동하나요?",
        answers: [
            "모든 크리에이티브를 균등하게 노출",
            "성과가 좋은 크리에이티브에 더 많은 노출 기회 제공",
            "최신 크리에이티브만 노출",
            "무작위로 크리에이티브 선택"
        ],
        correct: 1,
        explanation: "'Optimize' 옵션은 머신러닝을 사용하여 CTR, Conversion Rate 등 성과가 좋은 크리에이티브에 더 많은 노출 기회를 자동으로 배분합니다. 'Even' 옵션은 균등 노출, 'Sequential' 옵션은 순차 노출 방식입니다."
    },
    {
        question: "DV360에서 'Brand Safety'를 위해 사용할 수 있는 방법이 아닌 것은?",
        answers: [
            "Keyword Targeting/Blocking",
            "Category Exclusions",
            "Third-party Verification Tools",
            "Competitor Ad Removal"
        ],
        correct: 3,
        explanation: "Brand Safety를 위해 Keyword Blocking(부적절한 키워드 차단), Category Exclusions(민감한 카테고리 제외), Third-party Tools(IAS, DoubleVerify 등)를 사용할 수 있습니다. 경쟁사 광고 제거는 Brand Safety 기능이 아닙니다."
    },
    {
        question: "DV360의 'Automated Bidding Strategy' 중 'Maximize Conversions'의 목표는?",
        answers: [
            "클릭 수를 최대화",
            "노출 수를 최대화",
            "정해진 예산 내에서 전환 수를 최대화",
            "광고 게재 시간을 최대화"
        ],
        correct: 2,
        explanation: "'Maximize Conversions' 전략은 설정된 예산 범위 내에서 가능한 많은 전환(구매, 가입 등)을 달성하도록 자동으로 입찰가를 조정합니다. 최소 30일간 30개 이상의 전환 데이터가 필요합니다."
    },
    {
        question: "DV360에서 'Attribution Model'이 아닌 것은?",
        answers: [
            "Last Click Attribution (마지막 클릭)",
            "Data-Driven Attribution (데이터 기반)",
            "Linear Attribution (선형)",
            "Random Attribution (무작위)"
        ],
        correct: 3,
        explanation: "DV360은 Last Click(마지막 터치포인트에 100% 기여), Data-Driven(머신러닝 기반 기여도 분배), Linear(모든 터치포인트에 균등 배분) 등 다양한 Attribution Model을 제공합니다. Random Attribution은 존재하지 않습니다."
    },
    {
        question: "DV360에서 'Cross-Device Targeting'을 가능하게 하는 것은?",
        answers: [
            "IP 주소만 사용",
            "User ID와 Google 로그인 데이터 활용",
            "쿠키만 사용",
            "디바이스 MAC 주소 수집"
        ],
        correct: 1,
        explanation: "Cross-Device Targeting은 Google 계정 로그인 데이터와 User ID를 활용하여 한 사용자가 사용하는 여러 기기(PC, 스마트폰, 태블릿)를 연결합니다. 쿠키나 IP 주소만으로는 정확한 크로스 디바이스 추적이 어렵습니다."
    },
    {
        question: "DV360의 'Dynamic Creative Optimization (DCO)'의 주요 이점은?",
        answers: [
            "광고 제작 비용 절감만 가능",
            "사용자별로 최적화된 크리에이티브를 실시간으로 조합하여 보여줌",
            "광고 승인 과정을 자동화",
            "광고 소재를 자동으로 번역"
        ],
        correct: 1,
        explanation: "DCO는 사용자의 관심사, 행동, 위치 등에 따라 헤드라인, 이미지, CTA 등 광고 요소를 실시간으로 조합하여 개인화된 광고를 보여줍니다. 예를 들어 날씨에 따라 다른 제품을 표시하거나, 재방문자에게 다른 메시지를 보여줄 수 있습니다."
    },
    {
        question: "DV360에서 'Inventory Packages'의 용도는?",
        answers: [
            "광고 소재를 묶어서 관리",
            "여러 퍼블리셔의 인벤토리를 하나의 패키지로 구매",
            "예산을 패키지 단위로 할당",
            "타겟 오디언스를 그룹화"
        ],
        correct: 1,
        explanation: "Inventory Packages는 여러 퍼블리셔나 앱의 광고 인벤토리를 하나의 패키지로 묶어서 구매할 수 있는 기능입니다. 예를 들어 '뉴스 사이트 패키지'로 여러 뉴스 매체의 광고 지면을 한 번에 구매할 수 있습니다."
    },
    {
        question: "DV360에서 'Reach & Frequency' 캠페인의 특징은?",
        answers: [
            "실시간 입찰만 가능",
            "예측 가능한 도달률과 빈도를 보장",
            "가장 저렴한 비용으로만 집행",
            "검색 광고에만 사용 가능"
        ],
        correct: 1,
        explanation: "Reach & Frequency 캠페인은 캠페인 시작 전에 예상 도달 인원과 노출 빈도를 미리 확인하고 예약할 수 있습니다. 주로 브랜드 캠페인에서 사용하며, 불확실성을 줄이고 계획적인 집행이 가능합니다."
    },
    {
        question: "DV360에서 'Contextual Targeting'은 무엇을 기반으로 하나요?",
        answers: [
            "사용자의 개인 정보",
            "페이지의 콘텐츠와 주제",
            "사용자의 구매 이력",
            "사용자의 위치 정보만"
        ],
        correct: 1,
        explanation: "Contextual Targeting은 사용자가 현재 보고 있는 페이지의 내용, 키워드, 주제를 분석하여 관련성 높은 광고를 보여줍니다. 쿠키 없이도 작동하므로 개인정보보호 규제 강화 시대에 중요한 타겟팅 방법입니다."
    },
    {
        question: "DV360의 'Budget Pacing'에서 'ASAP' 옵션의 의미는?",
        answers: [
            "예산을 하루 종일 균등하게 사용",
            "가능한 한 빨리 예산을 소진하여 최대 노출 확보",
            "예산의 50%만 사용",
            "특정 시간대에만 예산 사용"
        ],
        correct: 1,
        explanation: "'ASAP(As Soon As Possible)' Pacing은 예산을 최대한 빨리 소진하여 최대 노출을 확보하는 방식입니다. 단기 이벤트나 빠른 인지도 확산이 필요할 때 유용하지만, 캠페인이 조기 종료될 위험이 있어 주의가 필요합니다. 'Even' Pacing은 예산을 기간 동안 균등하게 사용합니다."
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
        message = '완벽합니다! 🎉 DV360 마스터시네요!';
    } else if (percentage >= 80) {
        message = '훌륭합니다! 🌟 DV360 중급 지식이 탄탄하네요!';
    } else if (percentage >= 60) {
        message = '좋아요! 💪 조금만 더 공부하면 전문가가 될 수 있어요!';
    } else if (percentage >= 40) {
        message = '괜찮아요! 📚 실무 경험과 함께 학습하면 빠르게 성장할 거예요!';
    } else {
        message = '화이팅! 🚀 기초를 다시 한번 복습해보세요!';
    }

    resultMessage.textContent = message;

    // 점수 저장
    saveScore('중급자 퀴즈 (Level 2)', score, quizData.length);
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
