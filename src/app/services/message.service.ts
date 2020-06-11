import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject = new Subject()
  
  constructor() { }

  sendMsg(product:any) {
    this.subject.next(product) //Triggering an event, asíncrona
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
