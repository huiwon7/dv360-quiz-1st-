// DV360 캠페인 구조 & 설정 퀴즈 (Gemini AI 해설 포함)
const quizData = [
    {
        question: "DV360의 캠페인 계층 구조에서 올바른 순서는?",
        answers: [
            "Partner → Advertiser → Campaign → Insertion Order → Line Item → Creative",
            "Advertiser → Partner → Campaign → Line Item → Insertion Order → Creative",
            "Campaign → Advertiser → Insertion Order → Line Item → Creative",
            "Partner → Campaign → Advertiser → Creative → Line Item"
        ],
        correct: 0
    },
    {
        question: "Insertion Order (IO)의 주요 역할은 무엇인가요?",
        answers: [
            "광고 소재를 제작하는 곳",
            "예산 및 일정을 관리하는 단위",
            "타겟팅 설정을 하는 곳",
            "리포트를 생성하는 도구"
        ],
        correct: 1
    },
    {
        question: "Line Item에서 설정할 수 있는 것이 아닌 것은?",
        answers: [
            "타겟팅 (Geography, Demographics)",
            "입찰 전략 (Bid Strategy)",
            "파트너 계정 권한 설정",
            "디바이스 타겟팅 (Device)"
        ],
        correct: 2
    },
    {
        question: "캠페인 네이밍 규칙에서 권장되는 형식은? (예: TEST_DisplayBrand_202501_MyName)",
        answers: [
            "날짜 없이 자유롭게 작성",
            "캠페인 유형_목적_날짜_담당자 형식",
            "숫자만 사용 (예: 001, 002)",
            "광고주 이름만 사용"
        ],
        correct: 1
    },
    {
        question: "첫 Display 캠페인 생성 시 Campaign Goal로 인지도 목적일 때 선택해야 하는 것은?",
        answers: [
            "Drive Action",
            "Brand Awareness",
            "Direct Response",
            "App Install"
        ],
        correct: 1
    },
    {
        question: "Insertion Order의 Pacing 옵션 중 'Even'의 의미는?",
        answers: [
            "예산을 최대한 빠르게 소진",
            "예산을 기간 동안 균등하게 소진",
            "예산의 50%만 사용",
            "특정 시간대에만 예산 사용"
        ],
        correct: 1
    },
    {
        question: "Line Item의 'Potential Reach'가 의미하는 것은?",
        answers: [
            "실제 도달한 사용자 수",
            "타겟팅 설정에 따라 도달 가능한 예상 사용자 수",
            "광고비 총액",
            "전환 가능한 사용자 수"
        ],
        correct: 1
    },
    {
        question: "Creative가 승인되기까지 일반적으로 걸리는 시간은?",
        answers: [
            "즉시 승인",
            "2-4시간",
            "24-48시간",
            "1주일"
        ],
        correct: 1
    },
    {
        question: "Display 광고에서 가장 흔하게 사용되는 배너 크기는?",
        answers: [
            "300x250",
            "1920x1080",
            "100x100",
            "500x500"
        ],
        correct: 0
    },
    {
        question: "캠페인을 Launch하기 전 최종 체크리스트에 포함되지 않는 것은?",
        answers: [
            "Budget이 맞게 설정되었는지 확인",
            "Dates가 미래 날짜인지 확인",
            "경쟁사 분석 완료 여부",
            "Creative가 승인 상태인지 확인"
        ],
        correct: 2
    },
    {
        question: "Line Item의 Type으로 'Display'를 선택했을 때 체크해야 하는 Ad Slots는?",
        answers: [
            "Audio Slots",
            "Standard Display",
            "TV Slots",
            "Radio Slots"
        ],
        correct: 1
    },
    {
        question: "Viewability 설정 중 'Active View'에서 권장되는 설정은?",
        answers: [
            "10% in-view for 0.5 second",
            "70% in-view for 1 second",
            "100% in-view for 5 seconds",
            "Viewability 설정 불필요"
        ],
        correct: 1
    },
    {
        question: "Target CPA 자동 입찰을 사용하기 위한 최소 학습 데이터는?",
        answers: [
            "최근 7일간 전환 10개",
            "최근 30일간 전환 30개 이상",
            "최근 90일간 전환 100개",
            "학습 데이터 불필요"
        ],
        correct: 1
    },
    {
        question: "캠페인 계층 구조에서 'Partner' 레벨의 역할은?",
        answers: [
            "개별 광고 소재 관리",
            "최상위 계정으로 회사 단위 관리",
            "일일 예산 설정",
            "타겟팅 세부 설정"
        ],
        correct: 1
    },
    {
        question: "Inventory Source 설정 중 첫 캠페인에서 체크하면 안 되는 것은?",
        answers: [
            "Authorized Direct",
            "Open Auction",
            "Sensitive Categories (성인/도박)",
            "Exchange Inventory"
        ],
        correct: 2
    }
];

// Gemini API 설정
let geminiApiKey = localStorage.getItem('geminiApiKey') || '';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

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
const explanationContent = document.getElementById('explanation-content');
const apiModal = document.getElementById('api-modal');

// API 키 모달 표시
function showApiKeyModal() {
    if (!geminiApiKey) {
        apiModal.style.display = 'block';
    }
}

// API 키 저장
function saveApiKey() {
    const apiKeyInput = document.getElementById('api-key-input');
    const key = apiKeyInput.value.trim();

    if (key) {
        geminiApiKey = key;
        localStorage.setItem('geminiApiKey', key);
        apiModal.style.display = 'none';
        console.log('API 키 저장됨:', key.substring(0, 10) + '...');
        alert(`API 키가 저장되었습니다!\n키 앞부분: ${key.substring(0, 10)}...\n틀린 문제에 대해 AI 해설을 받을 수 있습니다.`);
    } else {
        alert('API 키를 입력해주세요.');
    }
}

// API 키 건너뛰기
function skipApiKey() {
    apiModal.style.display = 'none';
}

// Gemini API로 해설 생성
async function getExplanation(question, userAnswer, correctAnswer, allAnswers) {
    if (!geminiApiKey) {
        return '💡 AI 해설을 사용하려면 API 키를 설정해주세요.';
    }

    const prompt = `당신은 DV360(Display & Video 360) 전문가입니다.
다음 문제에 대해 틀린 답을 선택한 학습자에게 명확하고 친절한 해설을 제공해주세요.

**질문:** ${question}

**정답:** ${correctAnswer}
**사용자가 선택한 답:** ${userAnswer}

**모든 선택지:**
${allAnswers.map((a, i) => `${i + 1}. ${a}`).join('\n')}

다음 형식으로 해설해주세요:
1. 왜 틀렸는지 간단히 설명 (1-2문장)
2. 정답이 맞는 이유 (2-3문장)
3. 실무에서의 활용 팁 (1-2문장)

한국어로 작성하고, 200자 이내로 간결하게 작성해주세요.`;

    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${geminiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 500
                }
            })
        });

        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json();
            } catch (e) {
                errorData = await response.text();
            }
            console.error('API Error Details:', errorData);
            console.error('API Key (first 10 chars):', geminiApiKey.substring(0, 10) + '...');
            throw new Error(`API 요청 실패 (${response.status}): ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();

        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            console.error('Unexpected API response:', data);
            throw new Error('응답 형식 오류');
        }

        const explanation = data.candidates[0].content.parts[0].text;
        return explanation;
    } catch (error) {
        console.error('Gemini API Error:', error);
        return `❌ 해설을 불러오는데 실패했습니다.<br>
                오류: ${error.message}<br>
                API 키가 올바른지 확인하고, 브라우저 Console(F12)에서 상세 오류를 확인해주세요.`;
    }
}

function init() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    totalQuestionsDisplay.textContent = quizData.length;
    showApiKeyModal();
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
    explanationBox.classList.remove('show');

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
}

async function selectAnswer(index) {
    if (selectedAnswer !== null) return;

    selectedAnswer = index;
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    const correctAnswer = quizData[currentQuestion].correct;
    const question = quizData[currentQuestion];

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
        explanationContent.innerHTML = '<p style="color: #28a745;">✅ 정답입니다! 잘하셨어요!</p>';
        explanationBox.classList.add('show');
    } else {
        // 오답일 경우 Gemini AI 해설 요청
        explanationContent.innerHTML = '<p class="loading">💭 AI가 해설을 작성 중입니다...</p>';
        explanationBox.classList.add('show');

        const explanation = await getExplanation(
            question.question,
            question.answers[index],
            question.answers[correctAnswer],
            question.answers
        );

        explanationContent.innerHTML = `<p>${explanation}</p>`;
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

// API 키 재설정
function resetApiKey() {
    localStorage.removeItem('geminiApiKey');
    geminiApiKey = '';
    apiModal.style.display = 'block';
    document.getElementById('api-key-input').value = '';
}

// 윈도우 객체에 함수 등록
window.saveApiKey = saveApiKey;
window.skipApiKey = skipApiKey;
window.resetApiKey = resetApiKey;

init();
