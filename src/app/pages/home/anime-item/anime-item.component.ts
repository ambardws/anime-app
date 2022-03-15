import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/models';

@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.scss']
})
export class AnimeItemComponent implements OnInit {

  @Input() AnimeItem: Anime[] = [];
  @Input () AnimeItemSearch: Anime[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
