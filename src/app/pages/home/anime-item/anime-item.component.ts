import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/models';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  openAnimeDetails(id: number) {
    this.router.navigate(['details', id])
  }

  onPage(page: number) {
    console.log(page)
  }

  ngOnInit(): void {
  }

}
