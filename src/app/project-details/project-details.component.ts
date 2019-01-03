import { ProjectService } from './../project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
id;
employee;
title;
desc;
  constructor(private route: ActivatedRoute, private ProjectService: ProjectService, private Router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(event => {
      this.id = event.id;
      this.employee = event.employee;
      this.title = event.title;
      this.desc = event.desc;
    });
  }

  delete(id){
    this.ProjectService.delete(id);
    this.Router.navigateByUrl('/existingCustomers');
  }

}
