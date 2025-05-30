import { type StateCreator } from 'zustand'
import AIService from '../services/AIService'

export type AISlice = {
  chat: string
  generateAnswer: (prompt : string) => Promise<void>
}

export const createAISlice : StateCreator<AISlice, [], [], AISlice> = () => ({
  chat: '',
  generateAnswer: async (prompt) => {
    
    await AIService.generateAnswer(prompt)
  } 
})