import { TrackModel } from './../../../../core/models/tracks.model';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResults$: Observable<any> = of();

  constructor(private searchSvc: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event: string){
    this.listResults$ = this.searchSvc.searchTracks$(event);
  }
}
