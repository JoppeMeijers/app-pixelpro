import { NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-change-company',
  templateUrl: './change-company.component.html',
  styleUrls: ['./change-company.component.css']
})
export class ChangeCompanyComponent implements OnInit {
  @ViewChild("c") c: NgForm;
  companyName;
  clientName;
  email;
  phone;
  destination;
  location;
  id;




  constructor(private route: ActivatedRoute, private ClientService: ClientService, private router: Router) { }

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
      });

      
  }

  update(updateclient: HTMLInputElement, id){
  this.ClientService.update(updateclient, id);
  this.router.navigateByUrl('/existingCustomers');
  }

}
