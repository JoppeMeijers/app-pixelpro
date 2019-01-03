import { NgForm } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.css']
})
export class PasswordsComponent implements OnInit {
  
  
  passwordsRef: AngularFireList<any>;
  passwords$: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private af: AngularFireDatabase) {
    this.passwordsRef = db.list('/passwords');
    this.passwords$ = this.passwordsRef.valueChanges();
  
   }
  ngOnInit() {
  }

}
