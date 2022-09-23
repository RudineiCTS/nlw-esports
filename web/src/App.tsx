import * as Dialog from '@radix-ui/react-dialog';
import 'keen-slider/keen-slider.min.css';
import {useKeenSlider} from 'keen-slider/react';
import {CaretLeft, CaretRight} from 'phosphor-react';

import './styles/main.css';

import logoImg from './assets/logo-esports.svg'
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/InfoBox';
import { CreateAdModal } from './components/CreateAdModal';
import { useGame } from './hooks/useGame';



function App() { 
  const {games} = useGame();
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 6,
      spacing: 15,
    },
  })
  
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20 '>
      <img src={logoImg} alt="nlw sports logo"/>

      <h1 className='text-6xl text-white font-black mt-20 '>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> esta aqui
      </h1>  

      <div className='flex items-center relative'>

    
      <CaretLeft size={30} className='absolute -left-12 text-zinc-400 mt-5'/>
      <div className='keen-slider px-4 mt-16' ref={ref}>
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
      <CaretRight size={30} className='absolute -right-12 text-zinc-400 mt-5'/>
      </div>
      <Dialog.Root>
        <CreateAdBanner/>
        <CreateAdModal />
        
      </Dialog.Root>

    </div>
  )
}

export default App
