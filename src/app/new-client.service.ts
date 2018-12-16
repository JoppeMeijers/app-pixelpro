import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewClientService {

  constructor(private db:AngularFireDatabase) { }

  create(newclient){
   
   return this.db.list('/clients').push(newclient);
   
  }
}
