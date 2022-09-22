import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css';

import logoImg from './assets/logo-esports.svg'
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/InfoBox';
import { CreateAdModal } from './components/CreateAdModal';
import { useGame } from './hooks/useGame';

import { GameInterface } from './interface/GameInterface';





function App() { 
  const {games} = useGame();
  
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="nlw sports logo"/>

      <h1 className='text-6xl text-white font-black mt-20 '>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> esta aqui
      </h1>  

      <div className=' grid grid-cols-6 gap-6 mt-16'>

        {
          games.map(game => {
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
        <CreateAdModal />
        
      </Dialog.Root>

    </div>
  )
}

export default App
