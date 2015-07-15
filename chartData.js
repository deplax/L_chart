var randomScalingFactor = function () {
    return Math.round(Math.random() * 20)
};

var barChartData = {
    labels: ["07/01", "07/02", "07/03", "07/04", "07/05", "07/06", "07/07", "07/08", "07/09", "07/10", "07/11", "07/12", "07/13", "07/14", "07/15"],
    datasets: [
        {
            fillColor: "rgb(58, 195, 193)",
            strokeColor: "rgba(220,220,220,0)",
            highlightFill: "rgba(251,148,122,1)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
   }
  ]

}

var data = [
    {
        value: 200,
        color: "rgb(251,148,122)",
        highlight: "#FF5A5E",
        label: "남성"
    },
    {
        value: 220,
        color: "rgb(58, 195, 193)",
        highlight: "#5AD3D1",
        label: "여성"
    },
    {
        value: 80,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "알수없음"
    }
];

var setminData = function () {
    var len = barChartData.datasets[0].data.length;
    var data = [];
    var sum = 0;
    for(var i = 0; i < len; i++){
        data.push(sum);
        sum = sum + barChartData.datasets[0].data[i];
    }
    return data;
};

var setAccData = function () {
    var len = barChartData.datasets[0].data.length;
    var sum = 0;
    for(var i = 0; i < len; i++){
        sum += barChartData.datasets[0].data[i];
    }
    var data = [];
    for(var i = 0; i < len; i++){
        data.push(sum);
        sum = sum - barChartData.datasets[0].data[i];
    }
    return data;
};

var lineChartData = {
    labels:  ["07/01", "07/02", "07/03", "07/04", "07/05", "07/06", "07/07", "07/08", "07/09", "07/10", "07/11", "07/12", "07/13", "07/14", "07/15"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(58, 195, 193, 0.5)",
            strokeColor: "rgba(220,220,220,0)",
            pointColor: "rgba(220,220,220,0)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: setminData()
    },
        {
            label: "My Second dataset",
            fillColor: "rgba(251,148,122, 0.5)",
            strokeColor: "rgba(151,187,205,0)",
            pointColor: "rgba(151,187,205,0)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: setAccData()
    }
   ]
}



window.onload = function () {
    var ctx1 = document.getElementById("chart01").getContext("2d");
    window.myBar = new Chart(ctx1).Bar(barChartData, {
        responsive: true,
        animation: true,
        showScale: true,

        scaleOverride: false,
        scaleSteps: 10,
        scaleStepWidth: 5,
        scaleStartValue: 0,
        scaleShowLabels: true,

        barValueSpacing: 0,
        barDatasetSpacing: 0,
        barShowStroke: false,

        scaleShowGridLines: true,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
    });

    var ctx2 = document.getElementById("chart02").getContext("2d");
    new Chart(ctx2).Doughnut(data, {
        animateScale: true,
        percentageInnerCutout: 50,
        segmentStrokeWidth: 0,
    });

    var ctx3 = document.getElementById("chart03").getContext("2d");
    window.myLine = new Chart(ctx3).Line(lineChartData, {
        responsive: true,
        showTooltips: true,
        bezierCurve : false,
        datasetStroke : false,
        pointDot : false,
    });
}