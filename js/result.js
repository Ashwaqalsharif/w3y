const score = Number(sessionStorage.getItem("w3yScore"));
const total = Number(sessionStorage.getItem("w3yTotal"));
document.getElementById("total-count").textContent = total;
document.getElementById("correct-count").textContent = score;
document.getElementById("wrong-count").textContent = Math.max(0, total - score);
if (total > 0) {
    document.getElementById("score").textContent =
        score + " من " + total;

    const percentage = (score / total) * 100;
    const roundedPercentage = Math.round(percentage);

const history = JSON.parse(localStorage.getItem("w3yHistory")) || [];

history.push({
    percentage: roundedPercentage,
    date: new Date().toLocaleDateString("ar-SA")
});

localStorage.setItem("w3yHistory", JSON.stringify(history));
document.getElementById("score-percentage").textContent = Math.round(percentage) + "%";
document.getElementById("score-circle").style.setProperty("--percentage", percentage + "%");
    let level;
let levelColor;
let learningMessage;
    if (percentage >= 80) {
        level = "مستوى وعي مرتفع";
        levelColor = "#10b981";
       learningMessage = "ممتاز! لديك قدرة عالية على اكتشاف محاولات الاحتيال الإلكتروني."; 
    } else if (percentage >= 50) {
        level = "مستوى وعي متوسط";
        levelColor = "#ffd43b";
        learningMessage = "جيد! لديك وعي أمني جيد، لكن تحتاج إلى مزيد من الانتباه لبعض علامات الاحتيال.";
    } else {
        level = "يحتاج إلى مزيد من التدريب";
        levelColor = "#ef4444";
      learningMessage = "تحتاج إلى مزيد من التدريب للتعرّف على علامات الاحتيال الإلكتروني وتجنبها.";  
    }

    document.getElementById("level").textContent = level;
    document.getElementById("learning-message").textContent = learningMessage;
    document.getElementById("level").style.setProperty("background", levelColor, "important");
} else {
    document.getElementById("score").textContent =
        "لم يتم إكمال التدريب بعد";

    document.getElementById("level").textContent =
        "ابدئي التدريب لعرض مستواك";   
}