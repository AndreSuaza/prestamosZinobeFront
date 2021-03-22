import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from "../../services/users.service";
import { ValidacionFormulariosService } from "../../services/validacion-formularios.service";


@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.scss']
})
export class UsuarioNuevoComponent implements OnInit {

  error: string = '';

  newUser = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email] ),
    cedula: new FormControl('', Validators.required),
  });

  constructor(public usersService: UsersService
            , private validatacionFormularios: ValidacionFormulariosService) {

    usersService.getUsers().subscribe( users => console.log(users));

  }

  ngOnInit(): void {
  }


  createUser() {
    this.usersService.createUser(this.newUser.value).subscribe( resp => {
    this.usersService.user = resp.user;
    }, (err) => {
      this.error = err.error.msg;
    });
  }


  getError(name: string, controlName: string, genero?: string): string {
    let error = '';
    const control = this.newUser.get(controlName);
    if (control.touched && control.errors != null) {
      error = this.validatacionFormularios.errosForm(name, control, genero);
    }
    return error;
  }

}
