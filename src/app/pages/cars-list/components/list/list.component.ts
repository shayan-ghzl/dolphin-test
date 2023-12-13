import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, SimpleChanges, ViewChild } from '@angular/core';
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
export class ListComponent implements AfterViewInit {

  totalRows = 16;
  pageSize = 5;
  tablePageSizeOption = [5, 10];

  @Input({ required: true }) data: any[] | null | false = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
