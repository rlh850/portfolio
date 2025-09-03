import { llmClient } from '../llm/client';

export const chatService = {
   async sendMessage(message: string, id?: string) {
      const response = await llmClient.generateText({
         prompt: message,
         previousResponseId: id,
      });
      return response;
   },
};
