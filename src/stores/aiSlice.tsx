import { type StateCreator } from 'zustand'
import AIService from '../services/AIService'

export type AISlice = {
  chat: string
  generateAnswer: (prompt : string) => Promise<void>
  isGenerating: boolean
}

export const createAISlice: StateCreator<AISlice> = (set) => ({
  chat: "",
  isGenerating: false,
  generateAnswer: async (prompt) => {
    set({chat: "", isGenerating: true})
    const data = await AIService.generateAnswer(prompt);

    for await (const textPart of data) {
      set((state) => ({
        chat: state.chat + textPart,
      }));
    }
    set({
      isGenerating: false
    })
  },
});