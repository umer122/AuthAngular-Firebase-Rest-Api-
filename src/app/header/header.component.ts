import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { ServiceService } from '../Pages/services/service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isLoggedIn: boolean = false;
  constructor(private serviceService: ServiceService, private route: Router ) {

  }
  ngOnInit() {
    this.serviceService.user.subscribe(res => {
      this.isLoggedIn = res ? true : false;
    })
  }

  signOutCLick(){
    this.serviceService.signOut();
    this.route.navigate(['/login'])
  }
}
