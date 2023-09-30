import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  mensaje:BehaviorSubject<string> = new BehaviorSubject('')

  getMensaje(){
    return this.mensaje.asObservable();
  }

  set setMensaje(mensaje:string){
    this.mensaje.next(mensaje)
  }
  
  constructor() { }
}
