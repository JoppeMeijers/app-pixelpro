import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from './../project.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-project-desc',
  templateUrl: './add-project-desc.component.html',
  styleUrls: ['./add-project-desc.component.css']
})
export class AddProjectDescComponent implements OnInit {
    @ViewChild("pd") pd: NgForm;
    submittedForm: "bedankt voor het invullen";
  
    id;
    employee;
    title;
    desc;
  
    constructor(private ProjectService: ProjectService, private route: ActivatedRoute, private router: Router) { }
  
    ngOnInit() {
      this.route.params.subscribe(event => {
        this.id = event.id;
        this.employee = event.employee;
        this.title = event.title;
        this.desc = event.desc;
      });
    }
  
    addLog(newlog: HTMLInputElement){
      this.ProjectService.addLog(newlog, this.id);
      this.pd.resetForm();
      this.router.navigateByUrl('/project-details/' + this.id + '/' + this.employee + '/' + this.title + '/' + this.desc);
    }
  
  }
  