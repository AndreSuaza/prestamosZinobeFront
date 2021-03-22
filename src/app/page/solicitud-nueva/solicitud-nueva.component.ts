import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from "../../services/users.service";
import { RequestsService } from "../../services/requests.service";
import { ValidacionFormulariosService } from "../../services/validacion-formularios.service";
import { BaseBancariaService } from "../../services/base-bancaria.service";
import { RequestModel } from '../../models/request.model';

@Component({
  selector: 'app-solicitud-nueva',
  templateUrl: './solicitud-nueva.component.html',
  styleUrls: ['./solicitud-nueva.component.scss']
})
export class SolicitudNuevaComponent implements OnInit {

  info: string;

  searchUser = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email] ),
  });

  newRequest = new FormGroup({
    valorSolicitado: new FormControl('', Validators.required),
    fechaPagar: new FormControl(''),
  });

  constructor(public usersService: UsersService
            , public requestsService: RequestsService
            , public baseBancariaService: BaseBancariaService
            , private validatacionFormularios: ValidacionFormulariosService) { }

  ngOnInit(): void {
  }

  searchUserByEmail() {
    this.usersService.getUserByEmail(this.searchUser.get('correo').value)
        .subscribe(resp => { this.usersService.user = resp });
  }

  setValorSolicitado( amount ) {
    if(amount == 0) {
      this.newRequest.get('valorSolicitado').setValue( null );
    } else {
      this.newRequest.get('valorSolicitado').setValue( amount );
    }
  }

  sendRequest() {

    const request = new RequestModel(
            this.usersService.user._id
          , this.newRequest.get('valorSolicitado').value
          , this.newRequest.get('fechaPagar').value
          , null
          , null
          );
    console.log(request);
    this.requestsService.createRequest(request)
        .subscribe(resp => { 
          this.baseBancariaService.restarBase(resp.request.valor);
          this.info = resp.msg;
        }, 
        (err) => {
           this.info = err.error.msg;
        });
  }

  

  getErrorSearchUser(name: string, controlName: string, genero?: string): string {
    let error = '';
    const control = this.searchUser.get(controlName);
    if (control.touched && control.errors != null) {
      error = this.validatacionFormularios.errosForm(name, control, genero);
    }
    return error;
  }

  getError(name: string, controlName: string, genero?: string): string {
    let error = '';
    const control = this.newRequest.get(controlName);
    if (control.touched && control.errors != null) {
      error = this.validatacionFormularios.errosForm(name, control, genero);
    }
    return error;
  }
}
