import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  trendingTracks: Array<TrackModel>=[];
  randomTracks: Array<TrackModel>=[];

  listObservers$: Array<Subscription>=[];

  constructor(private tracksSvc: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
  }

  loadDataAll(): void {
    this.tracksSvc.getAllTracks$()
    .subscribe((data: TrackModel[]) =>{
      this.trendingTracks = data
    });
  }

  loadDataRandom(): void{
    this.tracksSvc.getAllRamdon$()
    .subscribe((data: TrackModel[]) =>{
      this.randomTracks = data
    });
  }

  ngOnDestroy(): void {
  }

}
