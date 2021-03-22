import { Component, Input, OnInit } from '@angular/core';
import { RequestModel } from '../../models/request.model';
import { RequestsService } from 'src/app/services/requests.service';
import { BaseBancariaService } from 'src/app/services/base-bancaria.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {

  @Input() requests: RequestModel[] = [];
  paymentResponse: string = '';

  constructor(private requestsService: RequestsService
            , private baseBancariaService: BaseBancariaService) { }

  ngOnInit(): void {
  }

  pagar(id) {

    this.requestsService.payRequests(id)
      .subscribe(resp => {
        this.paymentResponse = resp.msg;
        this.baseBancariaService.sumarBase(resp.request.valor);
      },(err) => {
        this.paymentResponse = err.error.msg;
      });
      
  }

}
