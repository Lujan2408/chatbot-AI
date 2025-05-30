import { type StateCreator } from 'zustand'

export type AISlice = {
  chat: string
}

export const createAISlice : StateCreator<AISlice, [], [], AISlice> = () => ({
  chat: ''
})