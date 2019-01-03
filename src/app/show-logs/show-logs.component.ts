import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'show-logs',
  templateUrl: './show-logs.component.html',
  styleUrls: ['./show-logs.component.css']
})
export class ShowLogsComponent implements OnInit {

  id;

  logsRef: AngularFireList<any>;
  logs$: Observable<any[]>;


  constructor(private db: AngularFireDatabase, private af: AngularFireDatabase, private route: ActivatedRoute) { }

   ngOnInit() {
    this.route.params.subscribe(event => {
      this.id = event.id;
    });

    this.logsRef = this.db.list('/projects/' + this.id + '/logs');
    this.logs$ = this.logsRef.valueChanges();
    console.log(this.id);
  }


}
