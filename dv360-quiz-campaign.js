// DV360 캠페인 구조 & 설정 퀴즈
const quizData = [
    {
        question: "DV360의 캠페인 계층 구조에서 올바른 순서는?",
        answers: [
            "Partner → Advertiser → Campaign → Insertion Order → Line Item → Creative",
            "Advertiser → Partner → Campaign → Line Item → Insertion Order → Creative",
            "Campaign → Advertiser → Insertion Order → Line Item → Creative",
            "Partner → Campaign → Advertiser → Creative → Line Item"
        ],
        correct: 0,
        explanation: "DV360은 Partner(최상위 회사 계정) → Advertiser(광고주별 분리) → Campaign(캠페인 목표) → Insertion Order(예산/일정) → Line Item(실제 광고 설정) → Creative(소재) 순서로 구성됩니다. 이 계층 구조를 이해하는 것이 DV360 운영의 기본입니다."
    },
    {
        question: "Insertion Order (IO)의 주요 역할은 무엇인가요?",
        answers: [
            "광고 소재를 제작하는 곳",
            "예산 및 일정을 관리하는 단위",
            "타겟팅 설정을 하는 곳",
            "리포트를 생성하는 도구"
        ],
        correct: 1,
        explanation: "Insertion Order(IO)는 예산과 일정을 관리하는 중간 단위입니다. 총 예산, 시작/종료 날짜, Pacing 전략 등을 설정하며, 여러 Line Item을 묶어서 관리할 수 있습니다. 실무에서는 월별, 프로모션별로 IO를 나눠서 관리합니다."
    },
    {
        question: "Line Item에서 설정할 수 있는 것이 아닌 것은?",
        answers: [
            "타겟팅 (Geography, Demographics)",
            "입찰 전략 (Bid Strategy)",
            "파트너 계정 권한 설정",
            "디바이스 타겟팅 (Device)"
        ],
        correct: 2,
        explanation: "파트너 계정 권한 설정은 최상위 Partner 레벨에서 관리됩니다. Line Item은 실제 광고가 실행되는 단위로, 타겟팅(지역, 인구통계, 디바이스), 입찰 전략, 크리에이티브 등을 설정하는 곳입니다."
    },
    {
        question: "캠페인 네이밍 규칙에서 권장되는 형식은? (예: TEST_DisplayBrand_202501_MyName)",
        answers: [
            "날짜 없이 자유롭게 작성",
            "캠페인 유형_목적_날짜_담당자 형식",
            "숫자만 사용 (예: 001, 002)",
            "광고주 이름만 사용"
        ],
        correct: 1,
        explanation: "체계적인 네이밍은 운영 효율성을 크게 높입니다. '캠페인유형_목적_날짜_담당자' 형식으로 하면 수백 개의 캠페인 중에서도 원하는 것을 빠르게 찾을 수 있고, 보고서 작성 시에도 한눈에 파악이 가능합니다."
    },
    {
        question: "첫 Display 캠페인 생성 시 Campaign Goal로 인지도 목적일 때 선택해야 하는 것은?",
        answers: [
            "Drive Action",
            "Brand Awareness",
            "Direct Response",
            "App Install"
        ],
        correct: 1,
        explanation: "Campaign Goal은 캠페인의 목적을 명확히 하는 첫 단계입니다. 브랜드 인지도가 목표라면 'Brand Awareness'를, 전환이 목표라면 'Drive Action'을 선택합니다. 이 선택에 따라 최적화 방향과 추천 입찰 전략이 달라집니다."
    },
    {
        question: "Insertion Order의 Pacing 옵션 중 'Even'의 의미는?",
        answers: [
            "예산을 최대한 빠르게 소진",
            "예산을 기간 동안 균등하게 소진",
            "예산의 50%만 사용",
            "특정 시간대에만 예산 사용"
        ],
        correct: 1,
        explanation: "Pacing 'Even'은 예산을 캠페인 기간 동안 균등하게 분배합니다. 'ASAP'는 가능한 빨리 소진하므로 조기 종료 위험이 있습니다. 대부분의 경우 'Even'이 안전하며, 일정한 노출을 유지할 수 있습니다."
    },
    {
        question: "Line Item의 'Potential Reach'가 의미하는 것은?",
        answers: [
            "실제 도달한 사용자 수",
            "타겟팅 설정에 따라 도달 가능한 예상 사용자 수",
            "광고비 총액",
            "전환 가능한 사용자 수"
        ],
        correct: 1,
        explanation: "Potential Reach는 현재 타겟팅 설정으로 도달 가능한 예상 사용자 수입니다. 이 숫자가 너무 작으면(<100만) 타겟팅이 너무 좁다는 신호이므로 조정이 필요합니다. 실무에서는 최소 100만 이상을 권장합니다."
    },
    {
        question: "Creative가 승인되기까지 일반적으로 걸리는 시간은?",
        answers: [
            "즉시 승인",
            "2-4시간",
            "24-48시간",
            "1주일"
        ],
        correct: 1,
        explanation: "Creative 승인은 보통 2-4시간 소요됩니다. 정책 위반 검토, 광고 품질 확인 등의 과정을 거칩니다. 캠페인 런칭 전날 미리 Creative를 업로드해두면 안전합니다. 거부 시 수정 후 재심사에도 같은 시간이 걸립니다."
    },
    {
        question: "Display 광고에서 가장 흔하게 사용되는 배너 크기는?",
        answers: [
            "300x250",
            "1920x1080",
            "100x100",
            "500x500"
        ],
        correct: 0,
        explanation: "300x250(Medium Rectangle)은 가장 범용적인 배너 사이즈로, PC와 모바일 모두에서 잘 작동합니다. 추가로 320x50(모바일 배너), 728x90(리더보드)도 함께 준비하면 더 많은 인벤토리에 게재할 수 있습니다."
    },
    {
        question: "캠페인을 Launch하기 전 최종 체크리스트에 포함되지 않는 것은?",
        answers: [
            "Budget이 맞게 설정되었는지 확인",
            "Dates가 미래 날짜인지 확인",
            "경쟁사 분석 완료 여부",
            "Creative가 승인 상태인지 확인"
        ],
        correct: 2,
        explanation: "경쟁사 분석은 기획 단계에서 완료해야 할 사항입니다. Launch 직전에는 기술적 설정(예산, 날짜, Creative 승인, 타겟팅, Tracking)을 최종 점검하는 것이 중요합니다. 체크리스트를 만들어 매번 확인하는 습관이 필요합니다."
    },
    {
        question: "Line Item의 Type으로 'Display'를 선택했을 때 체크해야 하는 Ad Slots는?",
        answers: [
            "Audio Slots",
            "Standard Display",
            "TV Slots",
            "Radio Slots"
        ],
        correct: 1,
        explanation: "'Standard Display'는 일반적인 배너 광고 인벤토리를 의미합니다. Audio, TV, Radio Slots는 각각 다른 광고 형식이므로 Display 캠페인에서는 선택하지 않습니다. 잘못 선택하면 광고가 게재되지 않습니다."
    },
    {
        question: "Viewability 설정 중 'Active View'에서 권장되는 설정은?",
        answers: [
            "10% in-view for 0.5 second",
            "70% in-view for 1 second",
            "100% in-view for 5 seconds",
            "Viewability 설정 불필요"
        ],
        correct: 1,
        explanation: "MRC(Media Rating Council) 표준인 '50% 이상 1초 이상'이 기본이지만, DV360에서는 '70% in-view for 1 second'가 권장됩니다. 이렇게 설정하면 실제로 사용자가 볼 가능성이 높은 노출에만 과금되어 광고비 낭비를 줄일 수 있습니다."
    },
    {
        question: "Target CPA 자동 입찰을 사용하기 위한 최소 학습 데이터는?",
        answers: [
            "최근 7일간 전환 10개",
            "최근 30일간 전환 30개 이상",
            "최근 90일간 전환 100개",
            "학습 데이터 불필요"
        ],
        correct: 1,
        explanation: "Target CPA 같은 자동 입찰은 최근 30일간 최소 30개 이상의 전환 데이터가 필요합니다. 데이터가 부족하면 알고리즘이 제대로 학습하지 못해 CPA가 불안정해집니다. 초기에는 Fixed Bid로 시작해서 데이터를 쌓은 후 전환하는 것이 안전합니다."
    },
    {
        question: "캠페인 계층 구조에서 'Partner' 레벨의 역할은?",
        answers: [
            "개별 광고 소재 관리",
            "최상위 계정으로 회사 단위 관리",
            "일일 예산 설정",
            "타겟팅 세부 설정"
        ],
        correct: 1,
        explanation: "Partner는 DV360의 최상위 계정으로, 회사 또는 에이전시 단위로 관리됩니다. 여기서 사용자 권한, 청구 정보, 브랜드 세이프티 정책 등을 총괄 관리합니다. 실무에서는 이 레벨을 거의 건드리지 않습니다."
    },
    {
        question: "Inventory Source 설정 중 첫 캠페인에서 체크하면 안 되는 것은?",
        answers: [
            "Authorized Direct",
            "Open Auction",
            "Sensitive Categories (성인/도박)",
            "Exchange Inventory"
        ],
        correct: 2,
        explanation: "'Sensitive Categories'는 성인, 도박 등 민감한 카테고리의 사이트를 포함합니다. 브랜드 이미지 보호를 위해 첫 캠페인에서는 반드시 제외해야 합니다. 'Authorized Direct'와 'Open Auction'은 안전한 인벤토리이므로 사용해도 됩니다."
    }
];

// 게임 로직 (공통)
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
const explanationBox = document.getElementById('explanation-box');
const explanationText = document.getElementById('explanation-text');

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
    explanationBox.style.display = 'none';

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
        message = '완벽합니다! 캠페인 구조를 완전히 마스터하셨네요!';
    } else if (percentage >= 80) {
        message = '훌륭합니다! DV360 캠페인 설정에 자신감을 가져도 됩니다!';
    } else if (percentage >= 60) {
        message = '좋아요! 기본은 탄탄하네요. 조금만 더 복습하면 완벽해질 거예요!';
    } else if (percentage >= 40) {
        message = '괜찮습니다! 학습 자료를 다시 한번 읽어보시면 도움이 될 거예요!';
    } else {
        message = '기초부터 차근차근 다시 학습해보세요. 캠페인 구조가 모든 것의 시작입니다!';
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
