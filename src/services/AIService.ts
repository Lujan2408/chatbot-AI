import { streamText } from 'ai'
import openrouter from '../lib/ai'

export default {
  async generateAnswer(prompt : string) {
    
    const response = streamText({
      model: openrouter("meta-llama/llama-4-maverick:free"), 
      prompt 
    }) 
    return response.textStream
  }
}