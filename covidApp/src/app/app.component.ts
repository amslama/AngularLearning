import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covidApp';
  globalData: any = {};
  allCountriesData: any = [];
  usData: any ={}
  constructor(private http : HttpClient){
    this.http.get('https://api.covid19api.com/summary')
      .subscribe((value:any) => {
        this.globalData =  value.Global;
        this.allCountriesData = value.Countries;
        this.allCountriesData.forEach((countryList) => {
        if(countryList.CountryCode == "US")
        {
         this.usData = countryList;
        }
        });
      });
    }
}
