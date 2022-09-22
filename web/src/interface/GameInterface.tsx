import react from 'react';

export interface GameInterface{
  id:string;
  title:string;
  bannerUrl:string;
  _count:{
    Ads:number
  }
}