import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatTableModule} from '@angular/material';
import {Item} from '../../../model/Item';
import {ItemService} from '../../../service/itemService';
import {first, publish, take} from 'rxjs/operators';

@Component({
  selector: 'h-item-table',
  templateUrl: './item-table.html',
  styleUrls: ['./item-table.scss']
})
export class ItemTableComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'name', 'description'];
  dataSource = new MatTableDataSource<Item>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.listItems().pipe(take(10)).subscribe((items: Array<Item>) => {
      this.dataSource.data = items;
    });

  }

  ngAfterViewInit(): void {
    debugger;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPage(value) {
    this.itemService.listItems().pipe(take(10)).subscribe((items: Array<Item>) => {
      this.dataSource.data = items;
    });
  }

}
