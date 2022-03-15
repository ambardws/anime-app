import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-anime',
  templateUrl: './filter-anime.component.html',
  styleUrls: ['./filter-anime.component.scss']
})
export class FilterAnimeComponent implements OnInit {
  public sort: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
