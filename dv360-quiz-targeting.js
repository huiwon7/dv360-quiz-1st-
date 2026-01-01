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
        correct: 2,
        explanation: "Customer Match는 최소 1,000개 이상의 데이터가 필요합니다. 이는 구글의 개인정보 보호 정책 때문으로, 소수의 사용자를 특정하는 것을 방지합니다. 실무에서는 5,000개 이상을 권장하며, 데이터가 많을수록 매칭률이 높아집니다."
    },
    {
        question: "Customer Match에서 사용할 수 있는 Identifier(식별자)가 아닌 것은?",
        answers: [
            "Email 주소 (hashed)",
            "전화번호 (hashed)",
            "Mobile Advertising ID (IDFA/GAID)",
            "사용자의 IP 주소"
        ],
        correct: 3,
        explanation: "IP 주소는 Customer Match의 식별자로 사용할 수 없습니다. 사용 가능한 식별자는 해시된 이메일, 전화번호, IDFA/GAID입니다. 모든 개인정보는 SHA256으로 해싱되어 업로드해야 하며, 원본 데이터는 절대 전송되지 않습니다."
    },
    {
        question: "Customer Match의 일반적인 매칭률은?",
        answers: [
            "10-20%",
            "30-60%",
            "80-90%",
            "거의 100%"
        ],
        correct: 1,
        explanation: "Customer Match의 평균 매칭률은 30-60%입니다. 이메일 품질, 데이터 최신성, 해싱 정확도에 따라 달라집니다. 매칭률을 높이려면 최근 활동한 사용자 데이터를 사용하고, 여러 식별자(이메일+전화번호)를 함께 업로드하는 것이 좋습니다."
    },
    {
        question: "Contextual Targeting의 특징은?",
        answers: [
            "사용자의 과거 행동을 기반으로 타겟팅",
            "사용자가 현재 보고 있는 콘텐츠를 기반으로 타겟팅",
            "사용자의 위치 정보만 사용",
            "쿠키가 반드시 필요함"
        ],
        correct: 1,
        explanation: "Contextual Targeting은 사용자가 현재 보고 있는 콘텐츠(키워드, 주제, 카테고리)를 기반으로 타겟팅합니다. 쿠키가 필요 없어 프라이버시 친화적이며, Cookie-less 시대에 가장 주목받는 타겟팅 방식입니다. 뉴스 기사, 블로그 콘텐츠 등과 광고를 연관시킵니다."
    },
    {
        question: "Lookalike Audience(유사 고객)를 만들기 위한 소스로 적합한 것은?",
        answers: [
            "무작위로 선택된 사용자",
            "전환한 고객 리스트",
            "광고를 본 모든 사용자",
            "경쟁사 고객"
        ],
        correct: 1,
        explanation: "Lookalike Audience는 '전환한 고객 리스트'를 소스로 사용하는 것이 가장 효과적입니다. 실제 구매자의 패턴을 분석해 유사한 특성을 가진 새로운 잠재고객을 찾습니다. 소스 데이터가 클수록(최소 1,000명 이상 권장) 정확도가 높아집니다."
    },
    {
        question: "Geography Targeting에서 'Include'와 'Exclude'의 차이는?",
        answers: [
            "차이 없음",
            "Include는 해당 지역만 타겟팅, Exclude는 해당 지역 제외",
            "Include는 제외, Exclude는 포함",
            "둘 다 같은 의미"
        ],
        correct: 1,
        explanation: "Include는 특정 지역에만 광고를 노출하고, Exclude는 특정 지역을 제외합니다. 예를 들어 '서울 Include'는 서울에만 노출, '서울 Exclude'는 서울 외 지역에 노출됩니다. 실무에서는 주요 도시는 Include로, 전환율이 낮은 지역은 Exclude로 관리합니다."
    },
    {
        question: "Demographics Targeting에서 설정할 수 있는 것이 아닌 것은?",
        answers: [
            "Age (연령)",
            "Gender (성별)",
            "Parental Status (자녀 유무)",
            "신용점수"
        ],
        correct: 3,
        explanation: "신용점수는 개인정보 보호 때문에 타겟팅 옵션으로 제공되지 않습니다. DV360에서 설정 가능한 인구통계는 연령, 성별, 자녀 유무, 가구 소득 수준입니다. 이 데이터는 구글의 머신러닝으로 추정되므로 100% 정확하지 않을 수 있습니다."
    },
    {
        question: "Device Targeting에서 선택할 수 있는 디바이스 유형이 아닌 것은?",
        answers: [
            "Desktop",
            "Mobile",
            "Tablet",
            "Smart Watch"
        ],
        correct: 3,
        explanation: "DV360에서는 Desktop, Mobile, Tablet, Connected TV만 타겟팅 가능하며, Smart Watch는 아직 지원되지 않습니다. 디바이스별로 전환율과 CPA가 크게 다르므로, 실무에서는 디바이스별로 Line Item을 분리해서 관리하는 것이 일반적입니다."
    },
    {
        question: "Retargeting(재타겟팅)의 목적은?",
        answers: [
            "새로운 고객 발굴",
            "사이트 방문했지만 전환하지 않은 사용자에게 재접근",
            "경쟁사 고객 타겟팅",
            "광고비 절감만을 위함"
        ],
        correct: 1,
        explanation: "Retargeting은 사이트를 방문했지만 전환하지 않은 사용자에게 다시 광고를 노출해 전환율을 높이는 전략입니다. 이미 브랜드를 인지한 사용자이므로 신규 고객 대비 전환율이 3-10배 높습니다. 방문 후 1-7일 이내 재접근이 가장 효과적입니다."
    },
    {
        question: "In-Market Audience의 특징은?",
        answers: [
            "과거에 구매한 고객",
            "현재 특정 제품/서비스를 구매할 의도가 있는 사용자",
            "브랜드 충성 고객",
            "광고를 클릭한 모든 사용자"
        ],
        correct: 1,
        explanation: "In-Market Audience는 현재 특정 제품/서비스를 적극적으로 검색하고 구매를 고려 중인 사용자입니다. 구글이 검색 패턴, 사이트 방문 이력 등을 분석해 자동으로 분류합니다. 전환 의도가 높아 CPA가 낮고, 구매 직전 단계의 사용자를 효과적으로 타겟팅할 수 있습니다."
    },
    {
        question: "1st Party Data란?",
        answers: [
            "구글이 제공하는 데이터",
            "광고주가 직접 수집한 고객 데이터",
            "타사 데이터 공급업체로부터 구매한 데이터",
            "경쟁사의 데이터"
        ],
        correct: 1,
        explanation: "1st Party Data는 광고주가 자사 웹사이트, 앱, CRM에서 직접 수집한 고객 데이터입니다. 가장 정확하고 신뢰할 수 있으며, 개인정보 규제에도 안전합니다. Cookie-less 시대에 1st Party Data 활용 능력이 광고 성과를 좌우하는 핵심 요소가 되고 있습니다."
    },
    {
        question: "Cookie-less 환경에서 가장 효과적인 타겟팅 방식은?",
        answers: [
            "3rd Party Cookie 기반 타겟팅",
            "Contextual Targeting + 1st Party Data",
            "IP 주소 기반 타겟팅만 사용",
            "타겟팅 없이 전체 노출"
        ],
        correct: 1,
        explanation: "Cookie-less 환경에서는 Contextual Targeting(콘텐츠 기반)과 1st Party Data(자사 고객 데이터)를 결합하는 것이 가장 효과적입니다. 3rd Party Cookie가 사라지면서 쿠키 없이도 작동하는 타겟팅 방식이 필수가 되었습니다. 실무에서는 이 두 가지를 층층이 쌓는 전략을 사용합니다."
    },
    {
        question: "Audience Segmentation에서 'Hot Leads'는?",
        answers: [
            "사이트를 한 번도 방문하지 않은 사용자",
            "최근 7일 내 상품 페이지 방문, 장바구니 추가했지만 미구매 사용자",
            "이미 구매를 완료한 고객",
            "경쟁사 사이트 방문자"
        ],
        correct: 1,
        explanation: "Hot Leads는 최근 7일 이내 상품 페이지를 보고 장바구니에 추가했지만 구매하지 않은 사용자입니다. 전환 직전 단계로, 가장 높은 전환율을 보입니다. 실무에서는 이 세그먼트에 가장 공격적인 예산과 크리에이티브(할인 쿠폰 등)를 배치합니다."
    },
    {
        question: "Contextual Targeting 설정 시 사용할 수 있는 것이 아닌 것은?",
        answers: [
            "Keywords (키워드)",
            "Categories (카테고리)",
            "Topics (주제)",
            "사용자의 과거 구매 이력"
        ],
        correct: 3,
        explanation: "Contextual Targeting은 '콘텐츠'에 집중하므로, 사용자의 과거 구매 이력은 사용할 수 없습니다. 키워드(특정 단어 포함 페이지), 카테고리(스포츠, 뉴스 등), 주제(여행, 건강 등)만 설정 가능합니다. 사용자 행동 기반은 Audience Targeting에 해당합니다."
    },
    {
        question: "Frequency Cap을 설정하는 이유는?",
        answers: [
            "광고비를 절감하기 위해",
            "동일한 사용자에게 광고가 너무 자주 노출되는 것을 방지",
            "타겟 오디언스 수를 늘리기 위해",
            "클릭률을 높이기 위해"
        ],
        correct: 1,
        explanation: "Frequency Cap은 광고 피로도(Ad Fatigue)를 방지하기 위해 설정합니다. 같은 광고를 너무 자주 보면 사용자가 짜증을 느껴 브랜드 이미지가 나빠질 수 있습니다. 일반적으로 일일 3-5회, 주간 10-15회가 적정 수준이며, 리타게팅은 더 높게 설정할 수 있습니다."
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

    if (percentage >= 80) {
        message = '🎉 축하드립니다! 합격하셨습니다!\n\n';
        if (percentage === 100) {
            message += '완벽합니다! 타겟팅 전략의 달인이시네요!';
        } else {
            message += '훌륭합니다! 고급 타겟팅 기법을 잘 이해하고 계시네요!';
        }
    } else {
        message = '😢 아쉽네요! 불합격 하셨습니다!\n인생은 도전 아닙니까?\n\n';
        if (percentage >= 60) {
            message += '좋아요! Customer Match와 Lookalike를 실무에 적용해보세요!';
        } else if (percentage >= 40) {
            message += '타겟팅 옵션들을 다시 정리해보면 도움이 될 거예요!';
        } else {
            message += '타겟팅은 DV360의 핵심입니다. 학습 자료를 다시 복습해보세요!';
        }
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
