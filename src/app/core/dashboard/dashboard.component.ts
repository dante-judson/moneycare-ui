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
    revenues: 0,
    expenses: 0,
    total: 0
  };

  chartType = 'doughnut';
  chartData = [];
  chartLabels = ['Receita', 'Despesa'];
  chartColor = [{ backgroundColor: ["#09B97C", "#DF2935"] }];

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
    this.dashboardService.monthSumary().subscribe(res => {
      this.monthSumary = res;
      this.monthSumary.total = this.monthSumary.revenues - this.monthSumary.expenses
      this.createChart();
    });
  }

  createChart() {
    this.chartData = [this.monthSumary.revenues, this.monthSumary.expenses];
  }

}
