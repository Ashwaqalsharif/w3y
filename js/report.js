const history = JSON.parse(localStorage.getItem("w3yHistory")) || [];

const attempts = document.getElementById("attempts");
const bestScore = document.getElementById("best-score");
const lastScore = document.getElementById("last-score");
const historyBox = document.getElementById("history");

if (history.length > 0) {
    const scores = history.map(item => item.percentage);

    attempts.textContent = history.length;
    bestScore.textContent = Math.max(...scores) + "%";
    lastScore.textContent = scores[scores.length - 1] + "%";

    historyBox.innerHTML = history
       .map((item, index) => `<p>المحاولة ${index + 1}<br><strong>${item.percentage}%</strong></p>`)
        .join("");

    const ctx = document.getElementById("progressChart");

    new Chart(ctx, {
        type: "bar",
        plugins: [ChartDataLabels],
        data: {
            labels: history.map((item, index) => `المحاولة ${index + 1}`),
        datasets: [{
    label: "مستوى الوعي",
    data: scores,
    backgroundColor: "rgba(34, 211, 238, 0.75)",
    borderColor: "#67e8f9",
    borderWidth: 2,
    borderRadius: 10,
    barThickness: 65
}]
        },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
        legend: {
    display: false
},
        datalabels: {
            formatter: (value) => value + "%",
            anchor: "end",
            align: "top",
            color: "#ffffff",
            font: {
                weight: "bold",
                size: 14
            }
        }
    },

    scales: {
        x: {
    ticks: {
        color: "#ffffff",
        font: {
            size: 13,
            weight: "bold"
        }
    }
},
        y: {
            beginAtZero: true,
            max: 100,
            ticks: {
                color: "#ffffff",
                callback: (value) => value + "%"
            }
        }
    }
}
        
    });
}
const analysisText = document.getElementById("awareness-analysis");

if (history.length > 0) {
    const latestScore = history[history.length - 1].percentage;

    if (latestScore >= 80) {
        analysisText.textContent =
            "🟢 مستوى وعيك مرتفع، استمري على هذا المستوى الممتاز.";
    } else if (latestScore >= 50) {
        analysisText.textContent =
            "🟡 مستوى وعيك متوسط، لديك معرفة جيدة وتحتاجين إلى المزيد من التدريب.";
    } else {
        analysisText.textContent =
            "🔴 مستوى وعيك يحتاج إلى تطوير، ننصحك بإعادة التدريب وقراءة النصائح.";
    }
} else {
    analysisText.textContent =
        "ابدئي التدريب أولًا ليتم تحليل مستوى وعيك.";
}