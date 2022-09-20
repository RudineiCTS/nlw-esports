import {useEffect, useState} from 'react';
import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css';

import logoImg from './assets/logo-esports.svg'
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/InfoBox';
import api from './services/api';
import InputGame from './components/InputGame';
import { GameController } from 'phosphor-react';
import ButtonGame from './components/ButtonGame';


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
  const [weekDaysSelected, setWeekDaysSelected] = useState([])
  
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

                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="weekDAys">Quando costuma jogar?</label>

                    <div className='grid grid-cols-4 gap-1'>
                     <ButtonGame title='Segunda' textButton='D'/>
                     <ButtonGame title='Segunda' textButton='S'/>
                     <ButtonGame title='Segunda' textButton='T'/>
                     <ButtonGame title='Segunda' textButton='Q'/>
                     <ButtonGame title='Segunda' textButton='Q'/>
                     <ButtonGame title='Segunda' textButton='S'/>
                     <ButtonGame title='Segunda' textButton='S'/>
                    </div>

                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <InputGame type="time" id="hourStart" placeholder="De"/>
                      <InputGame type="time" id="hourEnd" placeholder="Até"/>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex gap-2 text-sm">
                  <InputGame type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                  <button type="submit"
                    className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                  >
                    <GameController size={24}/>
                    Encontrar duo
                  </button>
                </footer>
              </form>       
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}

export default App
