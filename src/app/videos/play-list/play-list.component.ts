import { Component, OnInit, Input } from '@angular/core';
import { AppState } from "../../shared/app-state.service";
import {Video} from "../shared";



@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {
  initState: number[] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  playList: Video[] = [];

  constructor(private appState: AppState) {

   }

  convertState(index: number){
      this.initState[index] = 1 - this.initState[index];

  }

  clickToPlay(playlistIndex:number, videoIndex:number){
    this.appState.activeVideo = this.appState.playLists[playlistIndex][videoIndex];
   }

  addList(){
    this.appState.playLists.push(this.playList = []);

  }

  removeFromList(playlistIndex:number, videoIndex:number){
  	this.appState.playLists[playlistIndex].splice(videoIndex,1);

  }

  ngOnInit() {


  }

}
