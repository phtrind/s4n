import { Repository } from './../../interfaces/repository';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.sass']
})
export class RepositoriesComponent implements OnInit {
  displayedColumns: string[] = ['language', 'defaultBranch', 'urlGit', 'name', 'description'];
  dataSource: MatTableDataSource<Repository>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private propRepositories: Repository[];

  @Input()
  set repositories(repositories: Repository[]) {
    this.propRepositories = repositories;
    this.dataSource.data = repositories;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  get repositories(): Repository[] {
    return this.propRepositories;
  }

  constructor() {
    this.dataSource = new MatTableDataSource([]);
    this.dataSource.filterPredicate = (data, filter: string): boolean => {
      return data.name.toLowerCase().includes(filter);
    };
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    if (filterValue.length < 3) {
      this.dataSource.filter = '';
    } else {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.dataSource.filter = filterValue;
    }
  }
}
