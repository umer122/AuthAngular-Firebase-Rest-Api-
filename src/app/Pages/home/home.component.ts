import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
data:any;
  constructor(private showserviceData:ServiceService) {

  }
  ngOnInit() {
    this.getData()
  }
  getData() {
    this.showserviceData.showEmployeeData().subscribe({
      next: (res: any) => {
        console.log('show data', res);
        this.data=res;
      }
    })
  }
}
