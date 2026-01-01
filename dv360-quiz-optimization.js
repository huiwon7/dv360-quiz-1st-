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
        correct: 1,
        explanation: "Display 광고의 평균 CTR은 0.1-0.3% 수준이므로, 0.3% 이상이면 좋은 성과입니다. 0.5% 이상이면 매우 우수한 편입니다. 단, 타겟팅이 좁은 Retargeting은 1-2%까지도 나올 수 있습니다. Search 광고의 CTR(2-5%)과 혼동하지 마세요."
    },
    {
        question: "Viewability가 70% 이상이라는 것의 의미는?",
        answers: [
            "광고의 70% 이상이 화면에 보임",
            "사용자의 70%가 광고 클릭",
            "광고비의 70%를 사용",
            "70%의 사이트에 광고 게재"
        ],
        correct: 0,
        explanation: "Viewability 70%는 광고 면적의 70% 이상이 사용자 화면에 1초 이상 보였다는 의미입니다. MRC 기준은 50%, 하지만 DV360에서는 브랜드 캠페인의 경우 70% 이상을 권장합니다. Viewability가 낮으면 vCPM 과금이나 Viewability Targeting을 고려해야 합니다."
    },
    {
        question: "Frequency(빈도)가 10회/주 이상일 때 취해야 할 조치는?",
        answers: [
            "예산 증액",
            "Frequency Cap 설정하여 광고 피로도 방지",
            "캠페인 중단",
            "아무 조치 불필요"
        ],
        correct: 1,
        explanation: "주간 Frequency가 10회 이상이면 광고 피로도(Ad Fatigue)가 발생해 CTR이 떨어지고 부정적 브랜드 인식이 생길 수 있습니다. Frequency Cap을 일일 3-5회, 주간 10-15회로 설정해야 합니다. Retargeting은 더 높게 설정해도 되지만, 일반 Display는 엄격하게 관리해야 합니다."
    },
    {
        question: "Device 분석 결과 Mobile의 CPA가 Desktop보다 낮을 때 최적화 방법은?",
        answers: [
            "Mobile 제외",
            "Desktop만 타겟팅",
            "Mobile에 Bid Multiplier 증가 적용",
            "아무 조치 안 함"
        ],
        correct: 2,
        explanation: "Mobile의 CPA가 낮다는 것은 효율이 좋다는 의미입니다. Mobile Bid Multiplier를 +30~50% 증가시켜 Mobile에서 더 많은 노출을 가져와야 합니다. 반대로 Desktop의 Bid는 -20~30% 감소시킵니다. 디바이스별 입찰 조정은 가장 빠른 효과를 내는 최적화 방법입니다."
    },
    {
        question: "Time of Day 분석에서 점심시간(12-13시)의 성과가 좋을 때 조치는?",
        answers: [
            "점심시간 광고 중단",
            "점심시간 Bid 증가 (예: +30%)",
            "점심시간 타겟팅 제외",
            "변경 불필요"
        ],
        correct: 1,
        explanation: "특정 시간대 성과가 좋으면 Dayparting(시간대별 입찰 조정)을 활용해야 합니다. 점심시간에 +30~50% Bid Multiplier를 적용하고, 새벽 시간대(0-6시)는 -50~70% 조정합니다. 시간대별 전환율 패턴을 분석해 예산을 효율적으로 분배하는 것이 핵심입니다."
    },
    {
        question: "Site/App 성과 분석 중 'unknown_app'에서 CTR이 극도로 낮을 때 의심해야 할 것은?",
        answers: [
            "정상적인 트래픽",
            "봇(Bot) 트래픽 또는 저품질 인벤토리",
            "프리미엄 사이트",
            "고가치 사용자"
        ],
        correct: 1,
        explanation: "'unknown_app'이나 알 수 없는 도메인에서 CTR이 0.01% 미만이고 전환이 0이면 봇 트래픽이나 광고 사기(Ad Fraud)를 의심해야 합니다. 즉시 해당 사이트/앱을 Blacklist에 추가하고, IAS/DoubleVerify 같은 Third-party Verification 도구 사용을 고려해야 합니다."
    },
    {
        question: "A/B 테스트에서 Creative A의 CTR이 0.25%, Creative B가 0.42%일 때 조치는?",
        answers: [
            "둘 다 계속 사용",
            "Creative A 비활성화, B 유사 스타일로 추가 제작",
            "Creative B 비활성화",
            "새로운 C, D 제작"
        ],
        correct: 1,
        explanation: "Creative B의 CTR이 68% 높으므로, A를 비활성화하고 B의 성공 요소(색상, 카피, CTA 등)를 분석해 유사한 변형을 2-3개 더 제작해야 합니다. 승자를 찾았다면 그 방향으로 더 깊이 파고들어야 합니다. 매주 성과 하위 30% Creative는 과감하게 교체하세요."
    },
    {
        question: "Full-Funnel 마케팅의 올바른 순서는?",
        answers: [
            "Conversion → Awareness → Consideration → Loyalty",
            "Awareness → Consideration → Conversion → Loyalty",
            "Loyalty → Conversion → Awareness",
            "순서 상관없음"
        ],
        correct: 1,
        explanation: "Full-Funnel은 Awareness(인지) → Consideration(고려) → Conversion(전환) → Loyalty(충성도) 순서로 진행됩니다. 각 단계마다 다른 KPI, 타겟팅, 크리에이티브가 필요합니다. Awareness는 Reach/Impression, Consideration은 Engagement, Conversion은 CPA/ROAS, Loyalty는 LTV를 추적합니다."
    },
    {
        question: "Awareness 캠페인에서 가장 중요한 KPI는?",
        answers: [
            "Conversions (전환)",
            "Impressions & Reach (노출 & 도달)",
            "CPA (전환당비용)",
            "ROAS (광고수익률)"
        ],
        correct: 1,
        explanation: "Awareness(인지도) 캠페인의 핵심 KPI는 Impressions(노출 수)와 Reach(순 도달 사용자 수)입니다. 전환보다는 얼마나 많은 사람에게 브랜드를 노출했는지가 중요합니다. Viewability(60% 이상), Frequency(3-5회)도 함께 추적하며, CPM 과금 방식을 사용합니다."
    },
    {
        question: "Conversion 캠페인에서 타겟팅해야 할 오디언스는?",
        answers: [
            "사이트 미방문자",
            "사이트 방문자 & 장바구니 포기자",
            "이미 구매한 고객만",
            "경쟁사 고객"
        ],
        correct: 1,
        explanation: "Conversion 캠페인은 전환에 가장 가까운 사용자를 타겟팅해야 합니다. 사이트 방문자, 장바구니 포기자, 상품 페이지 열람자가 주요 타겟입니다. 이들의 전환율은 신규 사용자 대비 5-10배 높습니다. Retargeting에 70% 이상 예산을 배분하는 것이 일반적입니다."
    },
    {
        question: "Floodlight 활동 태그의 역할은?",
        answers: [
            "광고 소재 제작",
            "전환 추적 및 측정",
            "예산 관리",
            "타겟팅 설정"
        ],
        correct: 1,
        explanation: "Floodlight는 DV360의 전환 추적 시스템입니다. 사이트에 Floodlight 태그를 설치하면 구매, 회원가입 등의 전환을 추적할 수 있습니다. Counter(횟수만 추적), Sales(매출 추적) 두 가지 타입이 있으며, Target CPA/ROAS 같은 자동 입찰을 사용하려면 반드시 설정해야 합니다."
    },
    {
        question: "Dynamic Creative Optimization (DCO)의 주요 이점은?",
        answers: [
            "광고비 절감만 가능",
            "사용자별로 최적화된 크리에이티브를 실시간 조합",
            "광고 승인 자동화",
            "타겟팅 불필요"
        ],
        correct: 1,
        explanation: "DCO는 이미지, 카피, CTA 등의 요소를 실시간으로 조합해 각 사용자에게 최적화된 크리에이티브를 보여줍니다. 예를 들어 서울 거주 30대 남성에게는 '서울 배송 당일 도착', 부산 거주자에게는 '부산 지역 특가'를 자동으로 표시합니다. CTR을 30-100% 개선할 수 있습니다."
    },
    {
        question: "Brand Safety를 위해 사용할 수 있는 방법이 아닌 것은?",
        answers: [
            "Keyword Blocking",
            "Category Exclusions",
            "Third-party Verification Tools",
            "경쟁사 광고 자동 삭제"
        ],
        correct: 3,
        explanation: "경쟁사 광고 삭제는 Brand Safety 기능이 아닙니다. Brand Safety는 부적절한 콘텐츠 옆에 광고가 노출되는 것을 방지하는 기능으로, Keyword Blocking(욕설, 정치 키워드 차단), Category Exclusions(성인/폭력 카테고리 제외), IAS/DoubleVerify 같은 검증 도구를 사용합니다."
    },
    {
        question: "일일 성과 보고서에서 1순위로 확인해야 할 지표는?",
        answers: [
            "Reach (도달)",
            "Impressions, Clicks, CTR, Spend",
            "Video Completion Rate",
            "Frequency"
        ],
        correct: 1,
        explanation: "매일 아침 가장 먼저 확인할 지표는 Impressions(노출), Clicks(클릭), CTR(클릭률), Spend(지출)입니다. 이 4가지로 캠페인이 정상 작동하는지 빠르게 파악할 수 있습니다. 전날 대비 급격한 변화가 있다면 즉시 원인을 분석해야 합니다. CPA/ROAS는 주간 단위로 추적합니다."
    },
    {
        question: "CPA가 목표보다 30% 높을 때 취해야 할 조치는?",
        answers: [
            "예산 2배 증액",
            "전환하지 않는 Audience 제외, Bid 조정",
            "캠페인 즉시 중단",
            "아무 조치 안 함"
        ],
        correct: 1,
        explanation: "CPA가 목표보다 30% 높으면 즉시 최적화가 필요합니다. 1) 전환 0인 사이트/앱 차단, 2) 전환하지 않는 Audience 세그먼트 제외, 3) 고CPA 디바이스/시간대 Bid 감소, 4) 성과 좋은 크리에이티브만 유지합니다. 캠페인 중단은 최후의 수단이며, 데이터 기반 액션이 우선입니다."
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
