import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnChanges {
@Input() usData :any = {};
  constructor() { }

  ngOnChanges(): void {
  }

}
