const questions = [
    {
        title: "الصورة رقم 1",
        image: "images/training1.jpg",
        correct: "fraud",
        explanation: "الرسائل التي تطلب منك الضغط على رابط عاجل وإدخال بياناتك قد تكون محاولة تصيد إلكتروني."
    },
    {
        title: "الصورة رقم 2",
        image: "images/training2.jpg",
        correct: "safe",
        explanation: "في هذا المثال التدريبي، المحتوى آمن ولا يطلب منك مشاركة بيانات حساسة."
    },
    {
        title: "الصورة رقم 3",
        image: "images/training3.jpg",
        correct: "fraud",
        explanation: "طلب كلمة المرور أو رمز التحقق من علامات الاحتيال. لا تشاركي هذه المعلومات مع أحد."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function showQuestion() {
    const question = questions[currentQuestion];

    document.getElementById("question-title").textContent = question.title;
    document.getElementById("question-progress").textContent =
    `السؤال ${currentQuestion + 1} من ${questions.length}`;
    document.getElementById("training-image").src = question.image;
    document.getElementById("feedback").textContent = "";
document.getElementById("feedback").className = "";
    answered = false;
    document.getElementById("next-btn").hidden = true;
}

function checkAnswer(answer) {
    if (answered) return;

    answered = true;
    document.getElementById("next-btn").hidden = false;

    const question = questions[currentQuestion];
    const feedback = document.getElementById("feedback");

    if (answer === question.correct) {
    score++;
    feedback.textContent = "✅ إجابة صحيحة! " + question.explanation;
    feedback.className = "feedback-correct";
} else {
    feedback.textContent = "❌ إجابة غير صحيحة. " + question.explanation;
    feedback.className = "feedback-wrong";
}
}

function nextQuestion() {
    if (!answered) {
        alert("اختاري إجابة أولًا.");
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        sessionStorage.setItem("w3yScore", score);
        sessionStorage.setItem("w3yTotal", questions.length);
        window.location.href = "result.html";
    }
}

window.addEventListener("DOMContentLoaded", showQuestion);