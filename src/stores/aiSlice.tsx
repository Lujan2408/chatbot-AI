import { type StateCreator } from 'zustand'
import AIService from '../services/AIService'

export type AISlice = {
  chat: string
  generateAnswer: (prompt : string) => Promise<void>
}

export const createAISlice: StateCreator<AISlice, [], [], AISlice> = (set) => ({
  chat: "",
  generateAnswer: async (prompt) => {
    const data = await AIService.generateAnswer(prompt)

    for await (const textPart of data) {
      
      set((state) => ({
        chat: state.chat + textPart
      }))
    }
  },
});