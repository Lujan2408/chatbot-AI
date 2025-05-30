import { useState } from "react"
import ErrorMessage from "./ErrorMessage"
import { useAppStore } from "../stores/useAppStore"

export default function GenerateAI() {  

  const [error, setError] = useState('')
  const generateAsnwer = useAppStore(state => state.generateAnswer )

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Generate form object according to the submit we are generating 
    const form = new FormData(e.currentTarget)
    const prompt = form.get('prompt') as string

    if(prompt.trim() === '') {
      setError('¡La consulta no puede ir vacía!')
      return 
    }

    await generateAsnwer(prompt)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="text-center">
        <h1 className="text-6xl text-white font-extrabold mb-10">¡Bienvenido!</h1>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <form  
          onSubmit={handleSubmit}
          className='flex flex-col space-y-3'
        >
          <div className="relative w-[28rem] max-w-full mx-auto">
            <input 
              name="prompt" 
              id="prompt" 
              className="border border-none bg-white p-4 rounded-full w-full" 
              placeholder="¿Que deseas hacer?"
            />
            <button 
              type="submit" 
              aria-label="Enviar"
              className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className="w-8 h-8 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </form>

        <div className="py-10 whitespace-pre-wrap text-white"></div>
      </div>
    </div> 
  )
}
