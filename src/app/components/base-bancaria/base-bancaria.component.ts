import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const bankBase =  environment.baseBank;

@Component({
  selector: 'app-base-bancaria',
  templateUrl: './base-bancaria.component.html',
  styleUrls: ['./base-bancaria.component.scss']
})
export class BaseBancariaComponent implements OnInit {

  base:number = 0;

  constructor() { 
    this.base = bankBase
  }

  ngOnInit(): void {
  }

}
