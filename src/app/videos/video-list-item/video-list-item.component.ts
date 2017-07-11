import {Component, Input} from "@angular/core";
import {Video} from "../shared";
import {AppState} from "../../shared/app-state.service";

@Component({
  selector: 'dl-video-list-item',
  templateUrl: 'video-list-item.component.html',
  styleUrls: ['video-list-item.component.css']
})
export class VideoListItemComponent {
  @Input() video: Video;

  constructor(private appState: AppState) {}

  onClick(){
    this.appState.activeVideo = this.video;
  }
    // **  add to playlist

  /*
  AddToPlaylist(){
    this.appState.playList.push(this.video);
*/
    //console.log(this.appState.playList);

  
   AddToPlaylist(index: number){
    
      this.appState.playLists[index].push(this.video);

  }

}




