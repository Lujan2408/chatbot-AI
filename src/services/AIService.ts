import { streamText } from 'ai'
import openrouter from '../lib/ai'

export default {
  async generateAnswer(prompt : string) {
    
    const response = streamText({
      // model: openrouter("meta-llama/llama-4-maverick:free"), 
      // model: openrouter("google/gemma-3n-e4b-it:free"), 
      model: openrouter("deepseek/deepseek-r1-0528:free"), 
      prompt,
      system: "Eres experto en todo, amable y amigable con las personas y tus respuestas",
      temperature: 1
    }) 
    return response.textStream
  }
}