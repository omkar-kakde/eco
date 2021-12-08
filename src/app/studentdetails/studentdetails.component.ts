import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
data:any= ['om','prathm','ak'];
  constructor() { }

  ngOnInit(): void {
  }

}
