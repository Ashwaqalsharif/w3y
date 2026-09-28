const questions = [
    {
        title: "الصورة رقم 1",
        image: "images/training1.jpg",
        correct: "fraud",
        explanation: "الضغط على رابط عاجل وإدخال بياناتك قد يكون محاولة تصيد إلكتروني."
    },
    {
        title: "الصورة رقم 2",
        image: "images/training2.jpg",
        correct: "safe",
        explanation: "هذا المحتوى آمن ولا يطلب منك مشاركة بيانات حساسة."
    },
    {
        title: "الصورة رقم 3",
        image: "images/training3.jpg",
        correct: "fraud",
        explanation: "طلب كلمة المرور أو رمز التحقق من علامات الاحتيال. لا تشاركي هذه المعلومات مع أحد."
    },
    {
        title: "الصورة رقم 4",
        image: "images/training4.jpg",
        correct: "fraud",
        explanation: "هذه الرسالة تحتوي على مؤشرات احتيال، لذلك تجنبي الروابط والطلبات غير الموثوقة."
    },
    {
        title: "الصورة رقم 5",
        image: "images/training5.jpg",
        correct: "safe",
        explanation: "هذه الرسالة مشبوهة وقد تهدف إلى دفعك للضغط على رابط أو تقديم معلوماتك."
    },
    {
        title: "الصورة رقم 6",
        image: "images/training6.jpg",
        correct: "fraud",
        explanation: "الرسائل التي تستخدم الاستعجال أو تطلب تحديث البيانات عبر رابط قد تكون احتيالية."
    },
    {
        title: "الصورة رقم 7",
        image: "images/training7.jpg",
        correct: "fraud",
        explanation: "هذا مثال آمن ولا تظهر فيه علامات واضحة على التصيد أو طلب بيانات حساسة."
    },
    {
        title: "الصورة رقم 8",
        image: "images/training8.jpg",
        correct: "fraud",
        explanation: "انتبهي للروابط والطلبات غير المتوقعة؛ فقد تكون محاولة للحصول على بياناتك."
    },
    {
        title: "الصورة رقم 9",
        image: "images/training9.jpg",
        correct: "fraud",
        explanation: "هذه الرسالة تحمل مؤشرات احتيال، لذلك لا تضغطي على الروابط ولا تدخلي بياناتك."
    },
    {
        title: "الصورة رقم 10",
        image: "images/training10.jpg",
        correct: "safe",
        explanation: "هذا المحتوى آمن ولا يحتوي على طلبات مشبوهة أو محاولة للحصول على معلومات حساسة."
    },
    {
        title: "الصورة رقم 11",
        image: "images/training11.jpg",
        correct: "fraud",
        explanation: "الرسالة غير موثوقة وتحتوي على علامات قد تدل على محاولة احتيال."
    },
    {
        title: "الصورة رقم 12",
        image: "images/training12.jpg",
        correct: "safe",
        explanation: "هذا مثال آمن ولا يحتوي على مؤشرات واضحة للاحتيال."
    },
    {
        title: "الصورة رقم 13",
        image: "images/training13.jpg",
        correct: "safe",
        explanation: "المحتوى يبدو آمنًا ولا يطلب معلومات شخصية أو بيانات سرية."
    },
    {
        title: "الصورة رقم 14",
        image: "images/training14.jpg",
        correct: "fraud",
        explanation: "هذه الرسالة احتيالية؛ تحققي دائمًا من المرسل قبل الضغط على أي رابط."
    },
    {
        title: "الصورة رقم 15",
        image: "images/training15.jpg",
        correct: "fraud",
        explanation: "العروض أو الطلبات غير المتوقعة قد تستخدم لخداع المستخدم والحصول على بياناته."
    },
    {
        title: "الصورة رقم 16",
        image: "images/training16.jpg",
        correct: "safe",
        explanation: "هذا المحتوى آمن ولا تظهر فيه علامات واضحة على الاحتيال."
    },
    {
        title: "الصورة رقم 17",
        image: "images/training17.jpg",
        correct: "safe",
        explanation: "هذه الرسالة آمنة ولا تطلب منك الضغط على رابط مشبوه أو مشاركة معلومات حساسة."
    },
    {
        title: "الصورة رقم 18",
        image: "images/training18.jpg",
        correct: "fraud",
        explanation: "هذه الرسالة تحمل علامات احتيال؛ لا تتفاعلي معها قبل التحقق من مصدرها."
    },
    {
        title: "الصورة رقم 19",
        image: "images/training19.jpg",
        correct: "fraud",
        explanation: "الرسائل التي تطلب معلومات أو تحاول دفعك لاتخاذ إجراء سريع قد تكون محاولة تصيد."
    },
    {
        title: "الصورة رقم 20",
        image: "images/training20.jpg",
        correct: "fraud",
        explanation: "هذه الرسالة غير موثوقة وتحتوي على مؤشرات احتيالية."
    },
    {
        title: "الصورة رقم 21",
        image: "images/training21.jpg",
        correct: "safe",
        explanation: "هذا مثال آمن ولا يحتوي على طلبات مشبوهة أو مشاركة لبيانات حساسة."
    },
    {
        title: "الصورة رقم 22",
        image: "images/training22.jpg",
        correct: "fraud",
        explanation: "هذه الرسالة احتيالية؛ تجنبي الضغط على الروابط وتحققي من الجهة عبر قنواتها الرسمية."
    },
    {
        title: "الصورة رقم 23",
        image: "images/training23.jpg",
        correct: "safe",
        explanation: "هذا المحتوى آمن ولا تظهر فيه علامات واضحة على الاحتيال أو التصيد."
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