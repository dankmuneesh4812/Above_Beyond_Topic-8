document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Places Visited'
        },
        xAxis: {
            categories: ['Patiala', 'Panchkula', 'Rajpura','Chandigarh']
        },
        yAxis: {
            title: {
                text: 'Number of trips'
            }
        },
        series: [{
            name: 'Muneesh',
            data: [3, 5, 7, 10]
        },
        {
            name: 'Prabhat',
            data: [8, 7, 6, 3]
        },
        {
            name: 'Aryan',
            data: [4, 2, 5, 2]
        }, 
        {
            name: 'Agamjot',
            data: [2, 8, 1, 12]
        }, 
        {
            name: 'Vishal',
            data: [1, 4, 14, 9]
        },
        
        ]
    });
});
  