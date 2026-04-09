let chart;
let dataPoints = [100];
let score = 100;

function runExperiment() {
    let type = document.getElementById("failureType").value;
    let blast = document.getElementById("blastRadius").value;

    if (blast === "" || blast <= 0 || blast > 100) {
        alert("Enter blast radius between 1 to 100!");
        return;
    }

    let logText = 🔥 ${type} executed with ${blast}% impact;

    let li = document.createElement("li");
    li.textContent = logText;

    document.getElementById("logs").appendChild(li);

    // Reduce score
    score -= blast * 0.2;
    if (score < 0) score = 0;

    document.getElementById("score").textContent = Math.round(score);
}
window.onload = function () {
    let ctx = document.getElementById('myChart').getContext('2d');

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Start"],
            datasets: [{
                label: 'Resilience Score',
                data: dataPoints,
                borderWidth: 2
            }]
        }
    });
};
dataPoints.push(score);
chart.data.labels.push("Test");
chart.update();