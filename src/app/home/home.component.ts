import { Component, OnInit } from '@angular/core';
import { Career } from './career.model';
import { CareerService } from './career.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  public career: Career[];
  constructor(private careerService: CareerService) { }

  ngOnInit(): void {
    this.syncrhonize();
  }
  syncrhonize (){
    this.careerService.getCareers().subscribe(
      data=>{
        console.log(data);
        this.career=data
      }
    )
  }
}
