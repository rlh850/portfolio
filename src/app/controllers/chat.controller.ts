import { chatService } from '../services/chat.service';
import z from 'zod';

const sendMessageSchema = z.object({
   message: z
      .string()
      .min(1, 'Message cannot be empty')
      .max(1000, 'Message too long'),
   id: z.string().optional(),
});

export const chatController = {
   async sendMessage(message: string, id?: string) {
      try {
         const validatedData = sendMessageSchema.safeParse({ message, id });

         if (!validatedData.success) {
            return {
               error: 'Validation failed',
               details: validatedData.error.errors.map((err) => ({
                  field: err.path.join('.'),
                  message: err.message,
               })),
            };
         }

         const response = await chatService.sendMessage(
            validatedData.data.message,
            validatedData.data.id
         );
         return response;
      } catch (error) {
         return { error: 'Failed to generate a response.' };
      }
   },
};
