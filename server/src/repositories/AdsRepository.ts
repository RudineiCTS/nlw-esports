import {PrismaClient} from '@prisma/client'
import { convertMinutesToHourString } from '../utils/conver-minutes-to-hour-string';
import { convertHourStringToMinutes } from '../utils/convert-hour-string-to-minute';

const prisma = new PrismaClient();

export interface AdsDto{
gameId: string;
name: string;          
yearsPlaying:number;   
discord: string;          
weekDays: number[];         
hourStart  :string;    
hourEnd  :string;      
useVoiceChannel:boolean,
}

class AdsRepository{

  async getAdsGame(gameId: string){
    const ads = await prisma.ad.findMany({
      select:{
        id:true,
        name:true,
        weekDays:true,
        useVoiceChannel:true,
        yearsPlaying:true,
        hourStart:true,
        hourEnd:true,
      },
      where:{
        gameId,
      },
      orderBy:{
        createdAt:'desc'
      }
    })

    const adsFormated = ads.map(ad => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(','),
        hourStart:convertMinutesToHourString(ad.hourStart),
        hourEnd:convertMinutesToHourString(ad.hourEnd)
      }
    })
    return adsFormated
  }

  async getDiscordAds(adId:string){
    
    const ad = await prisma.ad.findUnique({
      select:{
        discord:true,
      },where:{
        id:adId
      }
    })
    return ad;
  }

  async createAds({discord,gameId,hourEnd,hourStart,name,useVoiceChannel,weekDays,yearsPlaying}:AdsDto){
    console.log(weekDays)
    const ads = await prisma.ad.create({
      data:{
        gameId,
        discord,
        hourEnd: convertHourStringToMinutes(hourEnd),
        hourStart: convertHourStringToMinutes(hourStart),
        name,
        useVoiceChannel,
        weekDays: weekDays.join(','),
        yearsPlaying,
      }
    })

    return ads;
  }
}

export default AdsRepository;