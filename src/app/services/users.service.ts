import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';

const apiUrl =  environment.API_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: UserModel;

  constructor(private http: HttpClient) { }
  
  getUsers() {      
    return this.http.get<UserModel>(apiUrl+'users')
    .pipe(
      map((users: any) => users = users.users)
    );
  }

  getUserByEmail(email) {      
    return this.http.get<UserModel>(apiUrl+`users/${email}`)
    .pipe(
      map((user: any) => user = user.user)
    );
  }

  createUser(user: UserModel) {      
    return this.http.post<any>(apiUrl+'users', user );
  }
}
