import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { RequestModel } from '../../models/request.model';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.scss']
})
export class ListarSolicitudesComponent implements OnInit {

  //allRequests: RequestModel[] = [];
  requests: RequestModel[];
  
  constructor(private requestsService: RequestsService) {}

  ngOnInit(): void {

  }


  filtrar(filtro:number){
    this.requestsService.getRequests()
    .subscribe(requests => {

      switch (filtro) {
        case 1:
          this.requests = requests.filter( request => request.estado == false);
          break;
        case 2:
          this.requests = requests.filter( request => (request.estado == true && request.pago == false))
          break;
        case 0:
          this.requests = requests;
      }
      
    });

  }

}
