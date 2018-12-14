
import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  backupsRef: AngularFireList<any>;
  backups$: Observable<any[]>;
  idGenerate = 0;




  constructor(private db: AngularFireDatabase) { 

        this.backupsRef = db.list('/backups');
        this.backups$ = this.backupsRef.valueChanges();
        this.backups$.subscribe(res=> console.log(res));
        console.log(this.backups$);

   }

  

  add(backup: HTMLInputElement){
      this.db.object('/backups/' + this.idGenerate).set({
      naam: (backup.value),
      url: "test.nl",
      datum: "01-01-2019",
      id: this.idGenerate
    });
    backup.value = '';
    this.idGenerate ++;
  }

  delete(backup){
    this.db.object('/backups/' + backup).remove()
    
  }


}
