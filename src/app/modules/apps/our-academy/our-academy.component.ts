import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import data from '../../../../assets/data/homePage.json';

@Component({
  selector: 'app-our-academy',
  templateUrl: './our-academy.component.html',
  styleUrls: ['./our-academy.component.css'],
})
export class OurAcademyComponent implements OnInit {
  getData: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/data/homePage.json').subscribe((res) => {
      this.getData = res;
      console.log(this.getData, 'res');
    });
  }
}
