import { Component, OnInit } from '@angular/core';
import { Career} from '../home/career.model';
import { ActivatedRoute } from '@angular/router';
import { CareerService} from '../home/career.services';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.css']
})
export class CarrerComponent implements OnInit {
  
  static URl ='carrera/:id'
  public career: Career;
  constructor(private route: ActivatedRoute, private careerService: CareerService) { }

  ngOnInit(): void {
    this.career={cod_careers:1, campo_ocupacional: 'hola', malla_curricular: 'Malla', modalidad: 'Presencial',
    nombre: 'Contabilidad', objetivo: 'Texto', requisitos: 'Documentos', perfil_egreso:'requisitos',titulo: 'titulo', imagen: ''} 
    this.route.url.subscribe(
      data=>this.syncrhonize(data[1].path)
     
    )


  }

  syncrhonize(id:string){
    this.careerService.getCareer(id).subscribe(
      data=>{
        this.career=data
        console.log(data);
      }
    )
  }

}
