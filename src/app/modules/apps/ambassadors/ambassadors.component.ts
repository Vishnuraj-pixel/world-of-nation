import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ambassadors',
  templateUrl: './ambassadors.component.html',
  styleUrls: ['./ambassadors.component.css']
})
export class AmbassadorsComponent implements OnInit {
  getData: any = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/data/ambassador.json').subscribe((res) => {
      console.log(res, 'res')
      this.getData = res
    })
  }

}
