import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { of } from 'rxjs';
import { FiltersComponent } from './components/filters/filters.component';
import { ListComponent } from './components/list/list.component';


@Component({
  selector: 'app-cars-list-page',
  standalone: true,
  imports: [
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ListComponent,
    AsyncPipe,
    FiltersComponent
  ],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss'
})
export class CarsListComponent {
  data$ = of([
    {
      unitIcon: '',
      unitTitle: '',
      status: '',
      imei: '',
      tags: '',
      lastTimePoint: ''
    }
  ]);
}
