import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { GameAdCreateData, GameInterface } from '../interface/GameInterface';
import api from '../services/api';


interface GameProviderProps {
  children: ReactNode;
}

interface GameContextData{
  games: GameInterface[]
  addGame:(data:GameAdCreateData, gameId:string) => Promise<void>
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

  async function addGame(data:GameAdCreateData, gameId:string){
    try {
      await api.post(`/games/${gameId}/ads`, data)
      alert('Anuncio criado com sucesso')
    } catch (error) {
      alert('Erro ao  criar')
    }
    
  }

  return(
    <GameContext.Provider
      value={{games,addGame}}
    >
      {children}

    </GameContext.Provider>
  )
}

export function useGame():GameContextData{
  const context = useContext(GameContext);

  return context;
}