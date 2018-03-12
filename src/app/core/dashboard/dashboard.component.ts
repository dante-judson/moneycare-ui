import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Desembro'];

  monthSumary = {
    sumRevenues: 0,
    sumExpenses: 0,
    expenses: '',
    total: 0
  };

  loading = false;

  progressChart = {
    data: [],
    colors: [],
    labels: [],
    options: new Object()
  };
  
  pieChart = {
    data: [],
    labels : ['Receita', 'Despesa'],
    colors : [{ backgroundColor: ["#09B97C", "#DF2935"] }]
  };

  categoryChart = {
    data: [],
    labels : [],
    colors : [{ backgroundColor: [] }]
  }

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.getMonthSumary();
  }

  currentMonth() {
    return this.months[new Date().getMonth()];
  }

  getMonthSumary() {
    this.loading = true;
    this.dashboardService.monthSumary().subscribe(res => {
      
      this.loading = false;
      this.monthSumary = res;
      this.monthSumary.total = this.monthSumary.sumRevenues - this.monthSumary.sumExpenses;
      
      this.createProgressChart(this.monthSumary.expenses);
      this.createCategoryChart(this.monthSumary.expenses);
      this.createChart();
     
    });
  }

  createChart() {
    this.pieChart.data = [this.monthSumary.sumRevenues, this.monthSumary.sumExpenses];
  }

  createProgressChart(expenses){
    
    let value = 0;
    let data = [];

    expenses.forEach(element => {
      let date: Date = new Date(element.createdDate);
      this.progressChart.labels.push(`${date.getDate()} ${this.months[date.getMonth()]} ${date.getUTCHours()}:${date.getMinutes()}`);
      data.push(value += element.value);
    });    
    
    this.progressChart.colors = [{ 
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];

    this.progressChart.options = {
      legend: {
        display : false
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }

    this.progressChart.data.push({
      data: data,
      lineTension: 0,
      label: 'Gastos',
      yAxisID: 0
    });
  }


  createCategoryChart(expenses){
    
    let labels = [];
    let data = [];
    let colors = [];

    expenses.forEach(element => {

      let index = labels.findIndex((label) => { return label == element.category });

      if(index >= 0){
        data[index] += element.value;
        
      } else {
        labels.push(element.category);
        data.push(element.value);
        // colors.push(this.generateColor());
      }

    });

    console.log(colors);
    

    this.categoryChart.data = data;
    this.categoryChart.labels = labels;
    this.categoryChart.colors[0].backgroundColor = ['#006E90','#F18F01','#ADCAD6','#99C24D','#41BBD9','#253031','#315659','#BCAB79'];

  }

  generateColor(){
    let hex = '0123456789ABCDEF';
    var color = '#';
  
    for (var i = 0; i < 6; i++ ) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
