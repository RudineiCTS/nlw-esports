import {createContext, ReactNode, useContext, useEffect, useState, } from 'react';
import api from '../server/api';
import { GameInterface } from '../types/gamesInterface';

interface GameProviderProps{
  children:ReactNode;
}

interface GameContextData {
  games: GameInterface[];
}

const GameContext = createContext({} as GameContextData);

export function GameProvider({children}:GameProviderProps){
  const [games, setGames] = useState<GameInterface[]>([])
  useEffect(()=>{
    api.get('games')
    .then(response => setGames(response.data));
  },[])

  return (
    <GameContext.Provider value={{games}}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame():GameContextData{
  const context = useContext(GameContext);
  return context
}