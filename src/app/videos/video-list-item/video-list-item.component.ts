import {Component, Input} from "@angular/core";
import {Video} from "../shared";
import {AppState} from "../../shared/app-state.service";
import {ElementRef, AfterViewInit, ViewChild} from '@angular/core';


@Component({
  selector: 'dl-video-list-item',
  templateUrl: 'video-list-item.component.html',
  styleUrls: ['video-list-item.component.css']
})



export class VideoListItemComponent{
  @Input() video: Video;
  @ViewChild('playlists') el:ElementRef;
  exist: boolean = false;

  constructor(private appState: AppState) {}


  ngAfterViewInit() {
      this.el.nativeElement.value = "";
  }

  onClick(){
    this.appState.activeVideo = this.video;
  }

  showAlert(){
   //show box msg
   this.exist = true;
   //wait 2 Seconds and hide
   setTimeout(function() {
       this.exist = false;
       console.log(this.edited);
   }.bind(this), 400);

  }
  
  
    // add to playlist

  /*
  AddToPlaylist(){
    this.appState.playList.push(this.video);
*/
    //console.log(this.appState.playList);

  
   AddToPlaylist(index: number){
    if(this.appState.playLists[index].indexOf(this.video)== -1){
      this.appState.playLists[index].push(this.video);
      this.ngAfterViewInit();
    }
    else
     this.showAlert();
  }

}




