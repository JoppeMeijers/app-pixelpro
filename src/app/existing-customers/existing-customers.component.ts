import { NgForm } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'existingCustomers',
  templateUrl: './existing-customers.component.html',
  styleUrls: ['./existing-customers.component.css']
})
export class ExistingCustomersComponent{


  clientsRef: AngularFireList<any>;
  clients$: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private af: AngularFireDatabase) {
    this.clientsRef = db.list('/clients');
    this.clients$ = this.clientsRef.valueChanges();
  
   }

  ngOnInit() {
  }

}
