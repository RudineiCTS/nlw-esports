import {useEffect, useState} from 'react';
import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css';

import logoImg from './assets/logo-esports.svg'
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/InfoBox';
import api from './services/api';
import InputGame from './components/InputGame';


interface GameResponse{
  id:string;
  title:string;
  bannerUrl:string;
  _count:{
    Ads:number
  }
}

function App() { 
  const [listGames, setListGames] = useState<GameResponse[]>([]);
  
  useEffect(()=>{
     api.get('/games')
    .then(response => {
      setListGames(response.data);
    })
    .catch(console.error);

     
  },[]);
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="nlw sports logo"/>

      <h1 className='text-6xl text-white font-black mt-20 '>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> esta aqui
      </h1>  

      <div className=' grid grid-cols-6 gap-6 mt-16'>

        {
          listGames.map(game => {
            return (
              <GameBanner key={game.id} 
                title={game.title} 
                bannerUrl={game.bannerUrl} 
                adsCount={game._count.Ads}
              />
            )
          })
        }
      
      </div>

      <Dialog.Root>
        <CreateAdBanner/>

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>
          <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

            <Dialog.Content>
              <form className='mt-8 flex flex-col gap-4'>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                    <InputGame id='game' placeholder='Selecione o game que deseja jogar'/>                
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="name" className='font-semibold'>Seu nome (ou nickname)</label>
                    <InputGame id='name' placeholder='Como te chamam dentro do game?'/>                
                </div>
                
                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                      <InputGame id='yearsPlaying' type='number' placeholder='Tudo bem ser ZERO'/>                
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="discord">Qual é seu discord?</label>
                      <InputGame id='discord' type='text' placeholder='Usuario#4444'/>                
                  </div>
                </div>

                <div>
                  
                </div>
              </form>
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}

export default App
