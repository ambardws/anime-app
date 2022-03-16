import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-filter-anime',
  templateUrl: './filter-anime.component.html',
  styleUrls: ['./filter-anime.component.scss']
})
export class FilterAnimeComponent implements OnInit {
  public sort!: number;
  @Output() filter = new EventEmitter<number>();

  constructor(private httpServices: HttpService) { }

  ngOnInit(): void {
  }

  filterAnimes(sort: number): void {
    // this.httpServices.currentStatus.subscribe(sort => this.sort = sort)
    // this.httpServices.changeStatus(sort)
    this.filter.emit(sort)
  }

}
