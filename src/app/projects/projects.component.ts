import { ActivatedRoute } from '@angular/router';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  id;

  projectsRef: AngularFireList<any>;
  projects$: Observable<any[]>;


  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) { 
    this.projectsRef = db.list('/projects');
    this.projects$ = this.projectsRef.valueChanges();

    

  }

  ngOnInit() {
    this.route.params.subscribe(event => {
      this.id = event.id;
    });
  }
  
}
