import {ButtonHTMLAttributes} from 'react'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
textButton:string
}

function ButtonGame(props: ButtonProps){
  return(
    <button 
    title={props.title}
    className='w-8 h-8 rounded bg-zinc-900'
    {...props}
    >
      {props.textButton}
    </button>
  )
}

export default ButtonGame;