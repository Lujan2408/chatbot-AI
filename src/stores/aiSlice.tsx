import { type StateCreator } from 'zustand'

export type AISlice = {
  chat: string
  generateAnswer: (prompt : string) => Promise<void>
}

export const createAISlice : StateCreator<AISlice, [], [], AISlice> = () => ({
  chat: '',
  generateAnswer: async (prompt) => {
    
    console.log(prompt)
  } 
})