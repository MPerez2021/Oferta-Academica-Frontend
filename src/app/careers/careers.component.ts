import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
static URL = 'carreras-pregrado';

  constructor() { }

  ngOnInit(): void {
  }

}
