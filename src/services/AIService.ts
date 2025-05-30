import { openrouter } from '@openrouter/ai-sdk-provider'
import { streamText } from 'ai'

export default {
  async generateAnswer(prompt : string) {
    
    const response = streamText({
      model: openrouter('google/gemini-2.0-flash-exp:free'), 
      prompt 
    }) 
    return response.textStream
  }
}