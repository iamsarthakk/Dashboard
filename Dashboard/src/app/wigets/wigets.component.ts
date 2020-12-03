import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';


@Component({
  selector: 'app-wigets',
  templateUrl: './wigets.component.html',
  styleUrls: ['./wigets.component.css']
})
export class WigetsComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  }
  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

  ngOnInit(): void {
  //   var myPieChart = new Chart(ctx, {
  //     type: 'doughnut',
  //     data: {
  //       labels: ["Direct", "Referral", "Social"],
  //       datasets: [{
  //         data: [55, 30, 15],
  //         backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
  //         hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
  //         hoverBorderColor: "rgba(234, 236, 244, 1)",
  //       }],
  //     },
  //     options: {
  //       maintainAspectRatio: false,
  //       tooltips: {
  //         backgroundColor: "rgb(255,255,255)",
  //         bodyFontColor: "#858796",
  //         borderColor: '#dddfeb',
  //         borderWidth: 1,
  //         xPadding: 15,
  //         yPadding: 15,
  //         displayColors: false,
  //         caretPadding: 10,
  //       },
  //       legend: {
  //         display: false
  //       },
  //       cutoutPercentage: 80,
  //     },
  //   });
  }

}
