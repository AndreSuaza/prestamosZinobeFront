import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { RequestModel } from '../models/request.model';

const apiUrl =  environment.API_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) {}

  createRequest(request: RequestModel) {      
    return this.http.post<any>(apiUrl+'requests', request );
  }
}
