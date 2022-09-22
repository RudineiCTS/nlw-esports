import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { GameInterface } from '../interface/GameInterface';
import api from '../services/api';


interface GameProviderProps {
  children: ReactNode;
}

interface GameContextData{
  games: GameInterface[]
}

const GameContext = createContext<GameContextData>({} as GameContextData);

export function GameProvider({children}:GameProviderProps){
  const [games, setGames] = useState<GameInterface[]>([]);

  useEffect(()=>{
     api.get('/games')
    .then(response => {
      setGames(response.data);
    })
    .catch(console.error);


  },[]);

  return(
    <GameContext.Provider
      value={{games}}
    >
      {children}

    </GameContext.Provider>
  )
}

export function useGame():GameContextData{
  const context = useContext(GameContext);

  return context;
}