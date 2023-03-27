function drawChart(aptValue, livingScore, transportScore, infraScore, eduScore){
    var label = ["총점"]
    var data = [aptValue]      

    var colorArray = []
    var alignArray = []
    for (var i = 0; i < data.length ; i++){
      if(data[i] < 85){
        colorArray.push('black')
        alignArray.push('end')
      }
      else{
        colorArray.push('white')
        alignArray.push('start')
      }
    }    

    var ctx = document.getElementById("valueChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      plugins:[ChartDataLabels],
      data: {          
        labels: label,
        datasets: [{                
          data: data,
          backgroundColor: [
              '#ff3d38',
              '#f97f95',
              '#f97f95',
              '#f97f95',
              '#f97f95',
          ],
          borderColor: [
              'rgba(255,99,132, 0)',
              'rgba(54, 162, 235, 0)',
          ],                
          barThickness: 17,            
        }]
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,          
        plugins:{
          legend:{
            display: false
          },            
          datalabels: {
            display: true,
            color: colorArray,
            align: alignArray,
            anchor: 'end',              
            offset: 2,
            textAlign: 'center',
            font: {
              weight: 'bold'
            },              
          },                      
        },
        animation: {            
          x:{
            from: 100
          }
        },
        scales: {
          x:{
            type: 'linear',
            min: 0,
            max: 100,
          },
          myScale: {              
            position: 'left', // `axis` is determined by the position as `'y'`
          }
        }          
      }
  });
}

function drawChart_op(aptValue, transportScore, infraScore, livingScore, eduScore){
  var label = ["총점", "교통", "인프라", "주거", "교육"]
  var data = [aptValue, transportScore, infraScore, livingScore, eduScore]      
  var color = 'white'
  var align = 'start'

  if(isNaN(transportScore)){
    label = ["총점", "인프라", "주거", "교육"]
    data = [aptValue, infraScore, livingScore, eduScore]        
  }
  if(eduScore == "region"){
    label = ["총점", "공급필요", "인구수", "일자리수"]
    data = [aptValue, livingScore, transportScore, infraScore]        
  }

  var colorArray = []
  var alignArray = []
  for (var i = 0; i < data.length ; i++){
    if(data[i] < 85){
      colorArray.push('black')
      alignArray.push('end')
    }
    else{
      colorArray.push('white')
      alignArray.push('start')
    }
  }

  var ctx = document.getElementById("valueChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    plugins:[ChartDataLabels],
    data: {          
      labels: label,
      datasets: [{                
        data: data,
        backgroundColor: [
            '#293249',
            '#4f5e84',
            '#4f5e84',
            '#4f5e84',
            '#4f5e84',
        ],
        borderColor: [
            'rgba(255,99,132, 0)',
            'rgba(54, 162, 235, 0)',
        ],                
        barThickness: 17,            
      }]
    },
    options: {
      indexAxis: 'y',
      maintainAspectRatio: false,          
      plugins:{
        legend:{
          display: false
        },            
        datalabels: {
          display: true,
          color: colorArray,
          align: alignArray,
          anchor: 'end',              
          offset: 2,
          textAlign: 'center',
          font: {
            weight: 'bold'
          },              
        },                      
      },
      animation: {            
        x:{
          from: 100
        }
      },
      scales: {
        x:{
          type: 'linear',
          min: 0,
          max: 100,
        },
        myScale: {              
          position: 'left', // `axis` is determined by the position as `'y'`
        }
      }          
    }
});
}

function drawSubChart(score, avgScore, label1, label2, color1, color2, className){
    var ctx = document.getElementById(className).getContext('2d');
    var color = 'white'
    var align = 'start'
    var data = [score]

    var colorArray = []
    var alignArray = []
    for (var i = 0; i < data.length ; i++){
      if(data[i] < 85){
        colorArray.push('black')
        alignArray.push('end')
      }
      else{
        colorArray.push('white')
        alignArray.push('start')
      }
    }

    var myChart = new Chart(ctx, {
      type: 'bar',
      plugins:[ChartDataLabels],
      data: {          
        labels: [label1],
        datasets: [{                
          data: data,
          backgroundColor: [
              color1,
              color2,
          ],               
          barThickness: 20,            
        }]
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,        
        plugins:{
          legend:{
            display: false
          },            
          datalabels: {
            display: true,
            color: colorArray,
            align: alignArray,
            anchor: 'end',              
            offset: 2,
            textAlign: 'center',
            font: {
              weight: 'bold'
            },              
          },                      
        },
        animation: {            
          x:{
            from: 100
          }
        },
        scales: {
          x:{
            type: 'linear',
            min: 0,
            max: 100,
          },
          myScale: {              
            position: 'left', // `axis` is determined by the position as `'y'`
          }
        }          
      }
  });
}

function drawSimulSubChart(score, avgScore, label1, label2, color1, color2, className){
  var ctx = document.getElementById(className).getContext('2d');
  var color = 'white'
  var align = 'start'
  var data = [score, avgScore]

  var colorArray = []
  var alignArray = []
  for (var i = 0; i < data.length ; i++){
    if(data[i] < 85){
      colorArray.push('black')
      alignArray.push('end')
    }
    else{
      colorArray.push('white')
      alignArray.push('start')
    }
  }

  var myChart = new Chart(ctx, {
    type: 'bar',
    plugins:[ChartDataLabels],
    data: {          
      labels: [label1, label2],
      datasets: [{                
        data: data,
        borderColor:[
          color1,
          color2
        ],
        borderWidth:[
          '2',
          '2',
        ],
        backgroundColor: [
            color1,
            color2,
        ],        
        barThickness: 20,            
      }]
    },
    options: {
      indexAxis: 'y',
      maintainAspectRatio: false,        
      plugins:{
        legend:{
          display: false
        },            
        datalabels: {
          display: true,
          color: colorArray,
          align: alignArray,
          anchor: 'end',              
          offset: 2,
          textAlign: 'center',
          font: {
            weight: 'bold'
          },              
        },                      
      },
      animation: {            
        x:{
          from: 100
        }
      },
      scales: {
        x:{
          type: 'linear',
          min: 0,
          max: 100,
        },
        myScale: {              
          position: 'left', // `axis` is determined by the position as `'y'`
        }
      }          
    }
});
}

function drawRankChart(rankMonth, rankData, totalRank){
  var label = rankMonth
  var data = rankData
  var align_number = 'start'  

  if(rankData[rankData.length-2] > totalRank/3){    
    align_number = 'top'
  }
  else{
    align_number = 'start'
  }

  var ctx = document.getElementById("rankChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],    
    data:{
      labels: label,
      datasets:[{
        data: data,        
        borderColor: "#ff3d38",
        borderWidth: 1,
        backgroundColor: "#ff3d38"
      }],
    },
    options: {      
      responsive: true,      
      maintainAspectRatio: false,
      scales:{
        y:{
          display: false,
          reverse: true,            
          suggestedMax: totalRank,
          suggestedMin: 1,
          ticks:{            
            stepSize: 1,            
          }
        },
        x: {
          ticks: {                
              maxRotation: 0,
              font: {
                size: 10
              }
          }
      } 
      },
      animation: {            
        y:{
          from: 1
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,          
        },
        datalabels: {
          display: true,          
          color: 'black',
          align: align_number,
          anchor: 'start',
          padding: 6,
          textAlign: 'center',          
          font: {
            weight: 'bold'
          },              
        }
      }
    },
});
}

function drawRankChart_op(rankMonth, rankData, totalRank){
  var label = rankMonth
  var data = rankData
  var align_number = 'start'  

  if(rankData[rankData.length-2] > totalRank/3){    
    align_number = 'top'
  }
  else{
    align_number = 'start'
  }

  var ctx = document.getElementById("rankChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],    
    data:{
      labels: label,
      datasets:[{
        data: data,        
        borderColor: "#293249",
        borderWidth: 1,
        backgroundColor: "#293249"
      }],
    },

    options: {      
      responsive: true,      
      maintainAspectRatio: false,
      scales:{
        y:{
          display: false,
          reverse: true,            
          suggestedMax: totalRank,
          suggestedMin: 1,
          ticks:{            
            stepSize: 1,            
          }
        },
        x: {
          ticks: {                
              maxRotation: 0,
              font: {
                size: 10
              }
          }
      } 
      },
      animation: {            
        y:{
          from: 1
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,          
        },
        datalabels: {
          display: true,          
          color: 'black',
          align: align_number,
          anchor: 'start',
          padding: 6,
          textAlign: 'center',          
          font: {
            weight: 'bold'
          },              
        }
      }
    },
});
}

function drawPriceRateChart(dateArray, salesArray, rentArray){
  var label = dateArray
  var salesData = salesArray
  var rentData = rentArray  

  var priceRate_ctx = document.getElementById("priceRateChart").getContext('2d');  
  var priceRateChart = new Chart(priceRate_ctx, {    
    type: 'line',    
    data:{
      labels: label,
      datasets:[
      {
        label: "매매지수",
        data: salesData,        
        borderColor: "#ff3d38",
        borderWidth: 1,
        backgroundColor: "#ff3d38",
        pointRadius: 1
      },
      {
        label: "전세지수",
        data: rentData,
        borderColor: "#5589c9",
        borderWidth: 1,
        backgroundColor: "#5589c9",
        pointRadius: 1
      }
    ],
    },

    options: {      
      responsive: true,      
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      scales:{
        yAxes:{
          display: true,
          min: 50,
          max: 150,
          ticks:{            
            stepSize: 50,            
          }
        },
        x: {
          ticks: {                
              maxRotation: 0,
              font: {
                size: 10
              }
          }
        },
      },
      animation: {
        delay: 500, // change delay to suit your needs.
      },
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: false,          
        }
      }
    },
});
}

var chartView = []

function drawPriceChart(duration, dataset_front, dataset, dataset_end, id_name, priceMax, n){
  var label = duration
  var data = dataset
  var ctx = document.getElementById(id_name).getContext('2d');  
  chartView[n] = new Chart(ctx, {    
    type: 'line',
    plugins:[ChartDataLabels],    
    data:{
      labels: label,
      datasets:[
        {
          data: dataset_front,        
          borderColor: "#ddd",
          borderWidth: 1,
          backgroundColor: "#ddd",
          pointRadius: 1,
          pointStyle: 'rect',
          hitRadius: 10
          //stepped: true,
        },
        {
          data: dataset,        
          borderColor: "#ff3d38",
          borderWidth: 1,
          backgroundColor: "#ff3d38",
          pointRadius: 1,
          pointStyle: 'rect',
          hitRadius: 10
          //stepped: true,
        },
        {
          data: dataset_end,        
          borderColor: "#ddd",
          borderWidth: 1,
          backgroundColor: "#ddd",
          pointRadius: 1,
          pointStyle: 'rect',
          hitRadius: 10
          //stepped: true,
        }
      ],
    },
    options: {
      interaction: {
        mode: 'index',
        intersect: false,
      },     
      responsive: true,      
      maintainAspectRatio: false,
      scales:{
        y:{
          display: false,
          beginAtZero:true,
          suggestedMax: priceMax,
          suggestedMin: 0,
        },        
        x: {
            ticks: {                
                maxRotation: 0,
                font: {
                  size: 10
                }
            }
        }     
      },
      animation: {
        y:{          
          from: priceMax
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,          
        },
        datalabels: {
          display: 'auto',
          color: 'black',
          align: 'top',
          anchor: 'center',
          padding: 3,
          textAlign: 'center',          
          font: {
            size: 9
          },              
        }        
      }
    },    
});
}