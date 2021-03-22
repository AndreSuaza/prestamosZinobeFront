import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { RequestsService } from 'src/app/services/requests.service';
import { UserModel } from '../../models/user.model';
import { RequestModel } from '../../models/request.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  users: UserModel[] = [];
  requests: RequestModel[] = [];

  constructor(private usersServices: UsersService
            , private requestsService: RequestsService) {}

  ngOnInit(): void {
    this.usersServices.getUsers()
        .subscribe(users => {
          this.users = users;
          console.log(this.users);
        });
  }

  getRequestByUserId(userid) {

    this.requestsService.getRequestByUserId(userid)
        .subscribe(resp => {
          this.requests = resp.requests;
          console.log(this.requests);
        });

  }

}
