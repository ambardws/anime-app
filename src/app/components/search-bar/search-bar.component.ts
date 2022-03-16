import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Anime } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router, private httpServices: HttpService) { }

  // @Output() animesitemsearch = new EventEmitter<string>()
  public animesitemsearch: Anime[] = [];


  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // this.httpServices.getAnimeList(form.value.search).subscribe(AnimeList => {
    //   console.log('1')
    //   this.animesitemsearch = AnimeList.data.documents;
    // })
    this.router.navigate(['search', form.value.search], {skipLocationChange: true});
  }

}
