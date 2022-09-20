import {InputHTMLAttributes} from 'react'

interface InputGameProps extends InputHTMLAttributes<HTMLInputElement>{}

function InputGame(props: InputGameProps){
  return (
      <input {...props}
      className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
      />
   
  )
}

export default InputGame