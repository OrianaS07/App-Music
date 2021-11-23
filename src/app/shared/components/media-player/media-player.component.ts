import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  state: string = 'paused';
  listObservables$: Array<Subscription> = [];

  constructor(public multimediaSvc: MultimediaService) { }

  ngOnInit(): void {
    const observer1$ = this.multimediaSvc.playerStatus$
      .subscribe(status => this.state = status);

      this.listObservables$ = [observer1$];
  }

  ngOnDestroy():void{
    this.listObservables$.forEach(u => u.unsubscribe());
  }

  handlePosition(event: MouseEvent){
    const {clientX} = event;
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const {x,width} = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentageFronX = (clickX*100)/width;
    this.multimediaSvc.seekAudio(percentageFronX);
  }

}
