import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Select from '@radix-ui/react-select';


import { Check, GameController, CaretDown } from "phosphor-react";

import ButtonGame from "./ButtonGame";
import InputGame from "./InputGame";
import { useGame } from '../hooks/useGame';


export function CreateAdModal(){
  const {games} = useGame()


  return(
  <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>
          <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

          
              <form className='mt-8 flex flex-col gap-4'>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                  
                  <Select.Root>
                    <Select.Trigger  
                    className='bg-zinc-900 py-3 px-4 rounded text-sm flex justify-between items-center '
                    
                    >
                      <Select.Value
                       placeholder='Selecione o game que deseja jogar'
                          
                       />
                      <Select.Icon>
                        <CaretDown className='w-3 h-3 '/>
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content  className='bg-zinc-900 py-3 px-4 rounded text-sm text-white'>
                        <Select.ScrollUpButton />
                        <Select.Viewport>
                        
                        {games.map(game => {
                          return(
                            <Select.Item value={game.id} className='flex items-center gap-2 hover:bg-violet-600 py-3 px-4 rounded'>
                              <Select.ItemIndicator>
                                <Check className='w-3 h-3 text-white'/>
                              </Select.ItemIndicator>
                              <Select.ItemText>{game.title}</Select.ItemText>
                            </Select.Item>       
                          )
                        })}
                        </Select.Viewport>
                        <Select.ScrollDownButton />
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>             
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
                     <ButtonGame  title='Segunda' textButton='D'/>
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

                <div className="mt-2 flex items-center gap-2 text-sm">
                  <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
                    <Checkbox.Indicator>
                      <Check className="w-4 h-4 text-emerald-400" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
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
)}