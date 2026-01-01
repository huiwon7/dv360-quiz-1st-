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
        correct: 1,
        explanation: "CPM은 Cost Per Mille(1000회 노출당 비용)을 의미합니다. 'Mille'은 라틴어로 1000이라는 뜻입니다. 브랜드 인지도 캠페인에서 주로 사용하는 과금 방식으로, 실제 클릭이나 전환과 관계없이 광고가 1000번 노출될 때마다 비용이 청구됩니다."
    },
    {
        question: "Target CPA 입찰 전략의 목표는?",
        answers: [
            "클릭 수를 최대화",
            "노출 수를 최대화",
            "정해진 전환당 비용 목표를 유지하면서 전환 수를 최대화",
            "광고비를 최소화"
        ],
        correct: 2,
        explanation: "Target CPA는 목표 전환당 비용(Cost Per Acquisition)을 설정하면, 구글 AI가 그 범위 내에서 최대한 많은 전환을 가져오도록 입찰가를 자동 조정합니다. 예를 들어 Target CPA를 5,000원으로 설정하면, 평균 CPA 5,000원을 유지하며 전환 수를 극대화합니다."
    },
    {
        question: "Maximize Conversions와 Target CPA의 차이점은?",
        answers: [
            "차이 없음",
            "Maximize는 CPA 상관없이 전환 극대화, Target CPA는 목표 CPA 유지하며 전환 최적화",
            "Maximize가 더 비용 효율적",
            "Target CPA가 더 많은 전환 생성"
        ],
        correct: 1,
        explanation: "Maximize Conversions는 예산 내에서 CPA에 상관없이 전환 수만 최대화합니다. 전환당 비용이 높아질 수 있습니다. Target CPA는 목표 CPA를 지키면서 전환을 최적화하므로 효율성이 중요할 때 사용합니다. Maximize는 초기 데이터 수집용, Target CPA는 안정기 운영용입니다."
    },
    {
        question: "ROAS란 무엇인가요?",
        answers: [
            "광고 클릭률",
            "광고비 대비 수익률 (Return On Ad Spend)",
            "광고 노출 횟수",
            "광고 승인율"
        ],
        correct: 1,
        explanation: "ROAS는 Return On Ad Spend(광고비 대비 수익률)입니다. 광고비 1원당 얼마의 매출을 올렸는지를 나타냅니다. 예를 들어 100만원을 쓰고 300만원 매출이 발생하면 ROAS는 300%입니다. 이커머스 캠페인에서 가장 중요한 KPI입니다."
    },
    {
        question: "Target ROAS 300%의 의미는?",
        answers: [
            "1원을 쓸 때마다 3원 이상 벌어야 함",
            "3원을 쓸 때마다 1원 벌어야 함",
            "광고비의 300%를 할인",
            "노출 수를 300% 증가"
        ],
        correct: 0,
        explanation: "Target ROAS 300%는 광고비 1원당 3원의 매출을 목표로 한다는 뜻입니다. 100만원 광고비로 300만원 매출을 기대하는 것입니다. 실무에서는 업종별로 적정 ROAS가 다르며, 이커머스는 보통 300-500%, 서비스업은 200-300%를 목표로 설정합니다."
    },
    {
        question: "Fixed Bid(고정 입찰) 전략이 적합한 경우는?",
        answers: [
            "전환 최적화가 최우선일 때",
            "첫 캠페인 또는 학습/테스트 단계",
            "ROAS 극대화가 목표일 때",
            "예산이 무제한일 때"
        ],
        correct: 1,
        explanation: "Fixed Bid는 입찰가를 고정하여 수동으로 관리하는 방식입니다. 자동 입찰을 사용하기 전 데이터를 수집하거나, 특정 인벤토리의 가치를 정확히 알 때 사용합니다. 첫 캠페인에서는 2-4주간 Fixed Bid로 데이터를 쌓은 후, 자동 입찰로 전환하는 것이 안전합니다."
    },
    {
        question: "Bid Multiplier의 역할은?",
        answers: [
            "예산을 배로 늘림",
            "특정 조건(시간대, 디바이스 등)에서 입찰가를 조정",
            "광고를 중단",
            "크리에이티브 교체"
        ],
        correct: 1,
        explanation: "Bid Multiplier는 기본 입찰가에 곱하는 비율로, 조건별로 입찰가를 조정합니다. 예를 들어 모바일에서 전환율이 낮으면 -30% 조정, 오후 7-9시에 전환율이 높으면 +50% 조정할 수 있습니다. 디바이스, 시간대, 지역별로 세밀하게 효율을 개선하는 핵심 기능입니다."
    },
    {
        question: "Budget Pacing의 'ASAP' 옵션 의미는?",
        answers: [
            "예산을 균등하게 소진",
            "가능한 한 빨리 예산을 소진하여 최대 노출 확보",
            "예산의 50%만 사용",
            "예산 사용 안 함"
        ],
        correct: 1,
        explanation: "ASAP(As Soon As Possible)은 예산을 최대한 빨리 소진하여 노출을 극대화하는 옵션입니다. 프로모션이나 이벤트처럼 단기간에 최대 도달이 중요할 때 사용합니다. 단, 조기 종료 위험이 있으므로 일반 캠페인에서는 'Even' Pacing을 권장합니다."
    },
    {
        question: "한국 시장에서 Display 광고의 평균 CPM 범위는?",
        answers: [
            "100-300원",
            "1,000-3,000원",
            "10,000-30,000원",
            "100,000원 이상"
        ],
        correct: 1,
        explanation: "한국 Display 광고의 평균 CPM은 1,000-3,000원 수준입니다. 타겟팅이 좁고 경쟁이 치열한 세그먼트(예: 30대 남성, 서울 거주)는 5,000원 이상도 가능합니다. Contextual Targeting은 보통 낮은 범위, Audience Retargeting은 높은 범위에 형성됩니다."
    },
    {
        question: "vCPM (viewable CPM)의 특징은?",
        answers: [
            "클릭만 과금",
            "광고가 실제로 화면에 보일 때만 과금",
            "전환만 과금",
            "노출 여부 상관없이 과금"
        ],
        correct: 1,
        explanation: "vCPM(Viewable CPM)은 광고가 실제로 사용자 화면에 보일 때만 과금되는 방식입니다. MRC 기준(50% 이상 화면에 1초 이상 노출)을 충족해야 비용이 발생합니다. 일반 CPM 대비 10-30% 비싸지만, 실제로 본 노출만 과금되어 브랜드 캠페인에 효과적입니다."
    },
    {
        question: "Target CPA 자동 입찰의 학습 기간은 일반적으로?",
        answers: [
            "1-3일",
            "2-4주",
            "6개월",
            "학습 불필요"
        ],
        correct: 1,
        explanation: "Target CPA는 일반적으로 2-4주의 학습 기간이 필요합니다. 이 기간 동안 AI가 전환 패턴을 학습하며 CPA가 불안정할 수 있습니다. 학습 기간 동안 Target CPA나 예산을 자주 변경하면 학습이 초기화되므로, 최소 2주는 유지하는 것이 좋습니다."
    },
    {
        question: "Target ROAS를 사용하기 위한 필수 조건은?",
        answers: [
            "클릭 데이터만 있으면 됨",
            "Floodlight에서 매출(Revenue) 추적 필수",
            "노출 1억 이상",
            "필수 조건 없음"
        ],
        correct: 1,
        explanation: "Target ROAS를 사용하려면 Floodlight에서 전환 시 매출 값(Revenue)을 반드시 전송해야 합니다. 매출 데이터가 없으면 ROAS를 계산할 수 없기 때문입니다. 최근 30일간 전환 30개 이상, 총 매출 데이터가 충분히 쌓여야 Target ROAS가 안정적으로 작동합니다."
    },
    {
        question: "Bid Strategy 중 '트래픽 증대'가 목표일 때 적합한 것은?",
        answers: [
            "Target CPA",
            "Target ROAS",
            "Maximize Clicks",
            "Fixed CPM"
        ],
        correct: 2,
        explanation: "트래픽(사이트 방문자) 증대가 목표라면 'Maximize Clicks' 전략이 적합합니다. 예산 내에서 클릭 수를 최대화하도록 입찰가를 조정합니다. 신규 브랜드의 초기 인지도 확대나, 콘텐츠 사이트의 방문자 증대에 효과적입니다. 단, 전환 품질은 보장하지 않습니다."
    },
    {
        question: "Max Avg CPM Bid를 설정하는 이유는?",
        answers: [
            "노출을 늘리기 위해",
            "자동 입찰 시 입찰가가 너무 높아지는 것을 방지",
            "광고를 중단하기 위해",
            "의미 없음"
        ],
        correct: 1,
        explanation: "Max Avg CPM Bid는 자동 입찰 전략 사용 시 입찰가의 상한선을 설정하는 기능입니다. 특정 고가 인벤토리에 과도하게 예산이 소진되는 것을 방지합니다. 예를 들어 평균 CPM이 2,000원인데 일부 프리미엄 사이트가 10,000원이면, Max를 3,000원으로 설정해 비효율을 막을 수 있습니다."
    },
    {
        question: "Programmatic Guaranteed의 특징은?",
        answers: [
            "실시간 입찰로 가격 결정",
            "고정 가격과 고정 노출량을 보장하는 직접 거래",
            "가장 낮은 가격으로만 구매",
            "무료 광고"
        ],
        correct: 1,
        explanation: "Programmatic Guaranteed는 퍼블리셔와 사전에 고정 가격과 노출량을 협상한 후, DV360를 통해 자동으로 집행하는 방식입니다. 프리미엄 인벤토리를 보장받으면서도 수동 IO 없이 자동화할 수 있습니다. 대형 브랜드 캠페인에서 주요 포털 메인 배너를 확보할 때 주로 사용합니다."
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
            message += '완벽합니다! 입찰 전략의 모든 것을 마스터하셨네요!';
        } else {
            message += '훌륭합니다! 자동 입찰을 자신있게 운영할 수 있겠어요!';
        }
    } else {
        message = '😢 아쉽네요! 불합격 하셨습니다!\n인생은 도전 아닙니까?\n\n';
        if (percentage >= 60) {
            message += '좋아요! Target CPA와 ROAS의 차이를 명확히 이해하셨네요!';
        } else if (percentage >= 40) {
            message += '입찰 전략별 차이점을 다시 정리해보세요!';
        } else {
            message += '입찰은 성과의 핵심입니다. 각 전략의 특징을 다시 학습해보세요!';
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
