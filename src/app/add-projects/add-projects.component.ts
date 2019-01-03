import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from './../project.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})

export class AddProjectsComponent implements OnInit {
  @ViewChild("p") p: NgForm;
  submittedForm: "bedankt voor het invullen";

  id;
  employee;
  title;
  desc;

  constructor(private ProjectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(event => {
      this.id = event.id;
    });
  }

  add(newProject: HTMLInputElement){
    this.ProjectService.add(newProject, this.id);
    this.p.resetForm();
  }

}
