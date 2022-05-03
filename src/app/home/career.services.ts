import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Career } from './career.model';

@Injectable({
    providedIn: 'root'
})
export class CareerService{

    private url='http://localhost:8080/api/v1/careers'
    constructor(private http: HttpClient) {
    }
    getCareers(): Observable < Career[] > {
        return this.http.get<Career[]>(this.url);
    }
    getCareer(id:String):Observable<Career>{
        return this.http.get<Career>(this.url+'\\'+id); 
    }
    

}