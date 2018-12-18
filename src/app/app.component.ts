import { Component } from '@angular/core';
import { Drug } from './drug/drug';
import { Http } from '@angular/http';
import { DrugService } from './drug/drug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectDrug';
  drugs: Array<Drug>;
  count = 0;
  constructor(private drugService: DrugService) {
    // this.getDrugs();
  }

  getDrugs() {
    this.drugService.getDrugs().subscribe(response => {
      this.drugs = response;
    });
  }

}
