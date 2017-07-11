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
  editBox: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  playlistCount: number = 1;


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
    this.appState.playListsName.push("Playlist "+ (this.playlistCount+1)); 
    this.editBox[this.playlistCount] = 1;
    this.playlistCount = this.playlistCount+1;

  }

  removeFromList(playlistIndex:number, videoIndex:number){
  	this.appState.playLists[playlistIndex].splice(videoIndex,1);

  }


  showEditbox(playlistIndex:number){
    this.editBox[playlistIndex] = 1;


  }

  addNewPlaylistName(newName:string, playlistIndex:number){
    if (playlistIndex != 0 && newName.length > 0){
      this.appState.playListsName[playlistIndex] = newName;}
    else if (newName.length > 0){
      this.appState.playListsName[playlistIndex] = newName + ' (default)';
    }

     this.editBox[playlistIndex] = 0;

  }

  ngOnInit() {


  }

}
