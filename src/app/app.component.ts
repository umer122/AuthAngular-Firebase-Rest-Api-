import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './Pages/services/service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SharedModule],
  providers: [
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FireBase Authentication';

  constructor(private serviceService:ServiceService){

  }
  ngOnInit(): void {
 this.serviceService.autoSignin()
    
  }
}
