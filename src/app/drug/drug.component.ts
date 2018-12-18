import { Component, OnInit, Input } from '@angular/core';
import { Drug } from './drug';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {
  @Input() drug: Drug;
  isHidden = true;

  constructor() { }

  ngOnInit() {
  }

}
