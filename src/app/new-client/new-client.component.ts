import { AngularFireDatabase } from 'angularfire2/database';
import { ClientService } from './../client.service';
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


constructor(private ClientService: ClientService) { 

}

save(newclient: HTMLInputElement){
 this.ClientService.add(newclient);
 this.f.resetForm();
}


}
