import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Anime } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public animes: Anime[] = [];
  private routeSub!: Subscription;
  private gameSub!: Subscription;
  sort!: number;
  count!: number;
  pageSize!: number;
  currentPage!: number;

  
  constructor(private httpServices: HttpService, private activatedRoute: ActivatedRoute) { 
  }
  
  filter(sort: number) {
     this.sort = sort;
     this.searchAnimes(this.sort);
  }
  
  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['search']) {
        console.log('2')
        this.searchAnimes(undefined, params['search']);
      } else {
        this.searchAnimes();
      }
    })     
  }

  searchAnimes(sort?: number, search?: string): void {
    this.gameSub = this.httpServices.getAnimeList(sort, search).subscribe(AnimeList => {
      this.animes = AnimeList.data.documents;
      this.count = AnimeList.data.count;
      this.pageSize = AnimeList.data.last_page;
      this.currentPage = AnimeList.data.current_page;
    })
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
