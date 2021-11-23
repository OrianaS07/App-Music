import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {

  @Input() mode: 'small' | 'big' = 'small';
  @Input() track : TrackModel = {_id:'',album:'',cover:'',name:'',url:''};

  constructor(private multimediaSvc: MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track: TrackModel){
    this.multimediaSvc.TrackInfo$.next(track);
  }

}
