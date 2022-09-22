import * as ToggleGroup from '@radix-ui/react-toggle-group';

interface GroupButtonProps{
  weekDays: string[]
  onSelectWeekDays:(day:any)=>void;
}

export function GroupButton({onSelectWeekDays,weekDays }: GroupButtonProps){
  return(
  <ToggleGroup.Root 
  type='multiple' 
  className='grid grid-cols-4 gap-1'
  onValueChange={onSelectWeekDays}
  value={weekDays}
  >
  <ToggleGroup.Item
    title='Domingo'
    value='0'
    className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500':' bg-zinc-900 '}`}
    >
        D
    </ToggleGroup.Item>
  <ToggleGroup.Item
   title='Segunda'
   value='1'
   className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500':' bg-zinc-900 '}`}
   >
        S
  </ToggleGroup.Item>
  <ToggleGroup.Item
   title='Terça'
   value='2'
   className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500':' bg-zinc-900 '}`}
   >
        T
  </ToggleGroup.Item>
  <ToggleGroup.Item
   title='Quarta'
   value='3'
   className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500':' bg-zinc-900 '}`}
   >
        Q
  </ToggleGroup.Item>
  <ToggleGroup.Item
   title='Quinta'
   value='4'
   className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500':' bg-zinc-900 '}`}
   >
        Q
  </ToggleGroup.Item>
  <ToggleGroup.Item
   title='Sexta'
   value='5'
   className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500':' bg-zinc-900 '}`}
   >
   
        S   
  </ToggleGroup.Item>
  <ToggleGroup.Item
   title='Sábado'
   value='6'
   className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500':' bg-zinc-900 '}`}
   >
   
        S
  </ToggleGroup.Item>
</ToggleGroup.Root>  
)}