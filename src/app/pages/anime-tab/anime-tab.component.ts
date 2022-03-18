import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Anime } from 'src/app/models';

@Component({
  selector: 'app-anime-tab',
  templateUrl: './anime-tab.component.html',
  styleUrls: ['./anime-tab.component.scss']
})
export class AnimeTabComponent implements OnInit {
  @Input() anime!: Anime;

  constructor() { }

  ngOnInit(): void {
  }

}
