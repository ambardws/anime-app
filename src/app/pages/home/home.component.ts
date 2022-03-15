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

  constructor(private httpServices: HttpService, private activatedRoute: ActivatedRoute) { 
  }


  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['search']) {
        this.searchAnimes(params['search']);
      } else {
        this.searchAnimes();
      }
    })
    this.searchAnimes();    
  }

  searchAnimes(search?: string): void {
    this.gameSub = this.httpServices.getAnimeList(search).subscribe(AnimeList => {
      this.animes = AnimeList.data.documents;
      console.log(this.animes)
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
