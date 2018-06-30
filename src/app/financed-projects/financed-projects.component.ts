import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financed-projects',
  templateUrl: './financed-projects.component.html',
  styleUrls: ['./financed-projects.component.css']
})
export class FinancedProjectsComponent implements OnInit {
  title = "Proyectos financiados"
  constructor() { }

  ngOnInit() {
  }

}
