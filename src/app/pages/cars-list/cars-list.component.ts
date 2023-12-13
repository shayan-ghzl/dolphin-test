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
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 102',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 103',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 104',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 105',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 106',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 107',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 108',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 109',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 110',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 111',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 112',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 113',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 114',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 115',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
    {
      unitIcon: 'one/icon.png',
      unitTitle: 'Unit 116',
      status: 'Connected',
      imei: '127836945',
      tags: 'test',
      lastTimePoint: '15 min ago'
    },
  ]);
}
