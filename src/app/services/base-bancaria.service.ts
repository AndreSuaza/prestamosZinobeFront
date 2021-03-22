import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const bankBase =  environment.baseBank;

@Injectable({
  providedIn: 'root'
})
export class BaseBancariaService {

  base: number = 0;

  constructor() {
    this.base = bankBase;
  }

  restarBase(monto: number) {
    this.base = this.base-monto;
  }

  sumarBase(monto: number) {
    this.base = this.base+monto;
  }

}
