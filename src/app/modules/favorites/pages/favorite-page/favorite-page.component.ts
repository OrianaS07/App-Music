import { TrackService } from './../../../tracks/services/track.service';
import { SearchService } from './../../../history/services/search.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {

  tracks$: Observable<any> = of();

  constructor(private tracksSvc: TrackService) { }

  ngOnInit(): void {
    this.tracks$ = this.tracksSvc.getAllTracks$();
  }

}
