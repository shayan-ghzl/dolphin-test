import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatPaginatorModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  totalRows = 100;
	pageSize = 10;
  tablePageSizeOption = [];

  @Input({ required: true }) data: any[] | null | false = null;

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator) {
    // note that paginator is in ngif so it should be set after ngif resolved
    if (paginator) {
      this.dataSource.paginator = paginator;
    }
  }

  dataSource = new MatTableDataSource();

  tableColumns = [
    'unitIcon',
    'unitTitle',
    'status',
    'imei',
    'tags',
    'lastTimePoint',
    'operation'
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'].currentValue) {
      this.dataSource.data = changes['data'].currentValue;
    }
  }

}
