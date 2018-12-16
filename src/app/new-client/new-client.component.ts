import { NewClientService } from './../new-client.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'newClient',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent{
  @ViewChild("f") f: NgForm;
submittedForm: "bedankt voor het invullen";

constructor(private NewClientService: NewClientService) { }

save(newclient: HTMLInputElement){
 this.NewClientService.create(newclient);
 this.f.resetForm();
}


}
