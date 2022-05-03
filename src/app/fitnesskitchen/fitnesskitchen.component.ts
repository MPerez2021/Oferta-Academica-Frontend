import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fitnesskitchen',
  templateUrl: './fitnesskitchen.component.html',
  styleUrls: ['./fitnesskitchen.component.css']
})
export class FitnesskitchenComponent implements OnInit {
  static URL = 'cocina-fitness'
  constructor() { }

  ngOnInit(): void {
  }

}
