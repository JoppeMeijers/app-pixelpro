import { NewClientService } from './../new-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'newClient',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent{

constructor(private NewClientService: NewClientService) { }

save(newclient){
 this.NewClientService.create(newclient);
 newclient.value = '';
}


}
