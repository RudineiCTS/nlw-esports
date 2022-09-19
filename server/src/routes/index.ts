import { Router } from "express";import AdsRepository from "../repositories/AdsRepository";
import GamesRepository from "../repositories/GamesRepository";
 'express';

const routes = Router();


routes.get('/games',async (request, response) => {
  const gamesRepository = new GamesRepository();

  const games = await gamesRepository.getAllGames();
  console.log(games);

  return response.json(games);
})

routes.post('/games/:gamesId/ads',async (request, response) => {
  const gameId =request.params.gamesId;

  const {
    name,
    yearsPlaying,
    discord,
    weekDays,
    hourStart,
    hourEnd,
    useVoiceChannel
  } = request.body

  const adsRepository = new AdsRepository();
  const newAds = await adsRepository.createAds({
    gameId,
    name,
    yearsPlaying,
    discord, 
    weekDays, 
    hourStart, 
    hourEnd, 
    useVoiceChannel
  })

  return response.json(newAds);
})

routes.get('/games/:id/ads',async (request, response) => {
  const gameId= request.params.id;

  const adsRepository = new AdsRepository();

  const game = await adsRepository.getAdsGame(gameId);
  return response.json(game);
})


routes.get('/ads/:id/discord',async (request, response) => {
  const gameId = request.params.id;

  const adsRepository = new AdsRepository();

  const ads = await adsRepository.getDiscordAds(gameId);
  return response.json(ads);
})


export default routes;




