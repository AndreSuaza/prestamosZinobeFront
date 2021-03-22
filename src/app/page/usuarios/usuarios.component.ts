import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from '../../models/user.model';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  users: UserModel[] = [];

  constructor(private usersServices: UsersService) {

    usersServices.getUsers()
        .subscribe(users => {
          this.users = users;
          console.log(this.users);
        });

  }

  ngOnInit(): void {
  }

}
