'use client';
import React, { useState } from 'react';
import ChatMessagesArea from './ChatMessagesArea';
import ChatInputArea from './ChatInputArea';

interface Message {
   text: string;
   sender: 'user' | 'bot';
}

const ChatWindow = () => {
   const [messages, setMessages] = useState<Message[]>([
      {
         text: 'Welcome to the chat!',
         sender: 'bot',
      },
   ]);
   const [inputText, setInputText] = useState('');

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (inputText.trim()) {
         const userMessage: Message = {
            text: inputText,
            sender: 'user',
         };

         setMessages((prev) => [...prev, userMessage]);
         setInputText('');

         try {
            const res = await fetch('/api/chat', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                  message: inputText,
               }),
            });

            const data = await res.json();
            console.log(data);

            const botMessage: Message = {
               text: data.text || 'Sorry, I encountered an error.',
               sender: 'bot',
            };

            setMessages((prev) => [...prev, botMessage]);
         } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage: Message = {
               text: 'Sorry, I encountered an error sending your message.',
               sender: 'bot',
            };
            setMessages((prev) => [...prev, errorMessage]);
         }
      }
   };

   return (
      <div className="flex justify-center mt-5 font-mono">
         <div className="bg-gray-100 w-full max-w-2xl h-96 rounded-2xl border border-gray-300 flex flex-col">
            <ChatMessagesArea messages={messages} />
            <ChatInputArea
               inputText={inputText}
               setInputText={setInputText}
               onSubmit={handleSubmit}
            />
         </div>
      </div>
   );
};

export default ChatWindow;
