/* globals Chart:false, feather:false */

(function start () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
        'Sunday',
        'Monday',
      ],
      datasets: [{
        data: [
          15339,
          21345,
        ],
        lineTension: 0,
        backgroundColor: ['blue','green'],
        borderColor: '#007bff',
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {

      legend: {
        display: false
      }
    }
  });
  
  Chart.pluginService.register({
  beforeDraw: function(chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = "75%",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
});
    
    
  var ctx2 = document.getElementById('myLineChart')
  // eslint-disable-next-line no-unused-vars
  var myLineChart = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
      ],
      datasets: [{
        data: [
          15339,
          21345,
        ],
        lineTension: 0,
        backgroundColor: ['blue','green'],
        borderColor: '#007bff',
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {

      legend: {
        display: false
      }
    }
  });
    
    
})()


