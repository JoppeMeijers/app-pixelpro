import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { controllers } from 'chart.js';
import { defineBase } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ProjectService{


  projectsRef: AngularFireList<any>;
  projects$: Observable<any[]>;
  idProject;
  idLog;

  constructor(private db: AngularFireDatabase,private router: Router) { 

    this.projectsRef = db.list('/projects');
    this.projects$ = this.projectsRef.valueChanges();     
  }

  add(newproject, clientId){
    this.idProject = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);

    this.db.object('/projects/' + this.idProject).set({
      projectId: (this.idProject),
      title: (newproject.projectName),
      desc: (newproject.description),
      employee: (newproject.employee),
      isActive: true,
      id: (clientId)
  });

}

addLog(newlog, projectId){
  this.idLog = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);

  this.db.object('/projects/' + projectId + '/logs/' + this.idLog).set({
    projectId: (projectId),
    title: (newlog.logName),
    desc: (newlog.log),
    id: (this.idLog)
});


}

  update(client, id){
    console.log(id);
    this.db.object('/clients/' + id).update({
      clientName: (client.clientName),
      companyName: (client.companyName),
      destination: (client.destination),
      email: (client.email),
      location: (client.location),
      notes: (client.notes),
      phonenumber: (client.phonenumber),
      kvk: (client.kvk),
      btw: (client.btw)
    })
  }

  delete(id){
    this.db.object('/projects/' + id).update({
      isActive: false,
    });
    this.router.navigateByUrl('/existingCustomers');
  }
}






