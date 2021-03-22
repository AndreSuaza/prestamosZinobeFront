import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionFormulariosService {

  constructor() { }

  errosForm(name: string, field:any, genero?:string) :string {

    if(field.hasError('required') && genero == 'f') {
      return `La ${name} es requerida`;
    }

    if(field.hasError('required')) {
      return `El ${name} es requerido`;
    }

    if(field.hasError('email')) {
      return 'Ingrese un Email valido';
    }

    return '';

  }

}
