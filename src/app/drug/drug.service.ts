import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drug } from './drug';

@Injectable({
  providedIn: 'root'
})
export class DrugService {
  drugs: Array<Drug>;

  constructor(private http: HttpClient) { }

  getDrugs() {
    return this.http.get<Array<Drug>>('https://my.api.mockaroo.com/uandc.json?key=df8904c0');
    // .subscribe(response => {
    //   this.drugs = response.json();
    //   return this.drugs;
    // });
    // console.log(this.drugs);

    // return this.drugs;
  }
}
