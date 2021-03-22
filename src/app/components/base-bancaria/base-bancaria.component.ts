import { Component, OnInit } from '@angular/core';
import { BaseBancariaService } from "../../services/base-bancaria.service";
@Component({
  selector: 'app-base-bancaria',
  templateUrl: './base-bancaria.component.html',
  styleUrls: ['./base-bancaria.component.scss']
})
export class BaseBancariaComponent implements OnInit {



  constructor(public baseBancariaService: BaseBancariaService) { 
   
  }

  ngOnInit(): void {
  }

}
