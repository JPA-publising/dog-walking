let joinCanvas = document.getElementById('weekly-join-chart');

let data = {
    labels: [

        '1','2','3','4','5','6','7'
    ],
    datasets: [{
        label: '일별 회원가입',
        data: [21,33,35,36,45,39, 99],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2
    }]
};

let myLineChart = new Chart(joinCanvas.getContext('2d'), {
    type: 'bar',
    data: data
});




