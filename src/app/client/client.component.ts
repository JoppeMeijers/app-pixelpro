import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  companyName;
  clientName;
  email;
  phone;
  destination;
  location;
  id;
  kvk;
  btw;



  constructor(private route: ActivatedRoute, private ClientService: ClientService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params =>{
        this.companyName = params.get('companyname');
        this.clientName = params.get('clientname');
        this.email = params.get('email');
        this.phone = params.get('phone');
        this.destination = params.get('destination');
        this.location = params.get('location');
        this.id = params.get('id');
        this.kvk = params.get('kvk');
        this.btw = params.get('btw');

       // service.getProfile(clientName);
      })
      


  }

//  update(client){
  //  this.ClientService.update(client);
   //}

  delete(id){
    this.ClientService.delete(id);
  }

}
