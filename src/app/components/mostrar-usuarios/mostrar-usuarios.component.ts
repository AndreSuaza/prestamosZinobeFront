import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.scss']
})
export class MostrarUsuariosComponent implements OnInit {

  user: any  = {};

  constructor(private usersService: UsersService) {

    this.user = usersService.user;
    console.log(this.user);

  }

  ngOnInit(): void {
  }

}
