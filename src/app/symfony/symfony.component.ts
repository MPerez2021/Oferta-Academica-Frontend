import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symfony',
  templateUrl: './symfony.component.html',
  styleUrls: ['./symfony.component.css']
})
export class SymfonyComponent implements OnInit {
  static URL = 'symfony'
  constructor() { }

  ngOnInit(): void {
  }

}
