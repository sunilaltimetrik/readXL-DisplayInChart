import { Component,OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import ChartDataSource from 'chartjs-plugin-datasource';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ng7ChartJs By DotNet Techy';
  LineChart=[];
  BarChart=[];
  PieChart=[];

  ngOnInit()
  {

    





     // Line chart:
    this.LineChart = new Chart('lineChart', {
    type: 'line',
    data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{
        label: 'Number of Items Sold in Months',
        data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
        fill:false,
        lineTension:0.2,
        borderColor:"red",
        borderWidth: 1
    }]
    }, 
    // options: {
    //     plugins: {
    //         datasource: {
    //             url: 'sample-dataset.xlsx'
    //         }
    //     }
    // }
    options: {
    title:{
        text:"Line Chart",
        display:true
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
    }
    });

    // Bar chart:
    this.BarChart = new Chart('barChart', {
        type: 'line',
    data: {
        datasets: [{
            borderWidth: 6,
            borderColor: 'rgba(146, 242, 42, 0.85)',
            fill: false
        }, {
            borderWidth: 6,
            borderColor: 'rgba(207, 0, 15, 0.85)',
            fill: false
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: 'ENCARTUCHAMENTO 05'
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 100,
                    min: 0,
                }
            }]
        },
        plugins: {
            datasource: {
                url: 'assets/sample-index.xlsx'
            }
        }
    }
   
    });

    // pie chart:
    this.PieChart = new Chart('pieChart', {
    type: 'pie',
    data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: '# of Votes',
        data: [9,7 , 3, 5, 2, 10],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
    }, 
    options: {
    title:{
        text:"Bar Chart",
        display:true
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
    }
    });
  }
}
