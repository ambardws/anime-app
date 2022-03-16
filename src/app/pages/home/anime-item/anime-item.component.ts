import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/models';

@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.scss']
})
export class AnimeItemComponent implements OnInit {

  @Input() AnimeItem: Anime[] = [];
  @Input() length!: number;
  @Input() pageSize!: number;
  @Input() currentPage!: number;

  constructor() { }

  onPage(page: number) {
    console.log(page)
  }

  ngOnInit(): void {
  }

}
