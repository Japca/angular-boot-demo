import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatTableModule} from '@angular/material';
import {Item} from '../../../model/Item';
import {ItemService} from '../../../service/itemService';
import {first, publish, take} from 'rxjs/operators';
import {Page} from '../../../model/Page';

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

  public pageSize = 10;
  // public pageIndex = 0;
  public length = 0;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.getPage({pageIndex: 0, pageSize: this.pageSize});
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPage(e: any) {
 //   this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.itemService.getPage(e.pageIndex, e.pageSize).pipe(take(1)).subscribe((page: Page) => {
      this.dataSource.data = page.content;
      this.length = parseInt(page.totalElements, 10);
    });
  }

}
