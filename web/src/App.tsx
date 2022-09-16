
import './styles/main.css';

import logoImg from './assets/logo-esports.svg'
import CardGameBox from './components/CardGameBox';
import InfoBox from './components/InfoBox';

function App() {  
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="nlw sports logo"/>

      <h1 className='text-6xl text-white font-black mt-20 '>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> esta aqui
      </h1>  

      <div className=' grid grid-cols-6 gap-6 mt-16'>
       <CardGameBox/>
       <CardGameBox/>
       <CardGameBox/>
       <CardGameBox/>
       <CardGameBox/>
       <CardGameBox/>
      </div>

      <InfoBox/>

    </div>
  )
}

export default App
