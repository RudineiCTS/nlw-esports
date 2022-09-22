import react from 'react';

export interface GameInterface{
  id:string;
  title:string;
  bannerUrl:string;
  _count:{
    Ads:number
  }
}

export interface GameAdCreateData {
discord:string, 
hourEnd: string
hourStart: string
name: string
useVoiceChannel: boolean
weekDays: number[]
yearsPlaying: number
}