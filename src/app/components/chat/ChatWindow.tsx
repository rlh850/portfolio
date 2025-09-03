'use client';
import React, { useState } from 'react';
import ChatMessagesArea from './ChatMessagesArea';
import ChatInputArea from './ChatInputArea';

interface Message {
   id: number;
   text: string;
   sender: 'user' | 'bot';
}

const ChatWindow = () => {
   const [messages, setMessages] = useState<Message[]>([
      {
         id: 1,
         text: 'Welcome to the chat!',
         sender: 'bot',
      },
   ]);
   const [inputText, setInputText] = useState('');
   const [nextId, setNextId] = useState(2);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (inputText.trim()) {
         const userMessage: Message = {
            id: nextId,
            text: inputText,
            sender: 'user',
         };

         // Add user message immediately and increment ID
         setMessages((prev) => [...prev, userMessage]);
         setNextId((prev) => prev + 1);
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
               id: nextId + 1,
               text: data.text || 'Sorry, I encountered an error.',
               sender: 'bot',
            };

            // Add bot message after receiving response and increment ID
            setMessages((prev) => [...prev, botMessage]);
            setNextId((prev) => prev + 1);
         } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage: Message = {
               id: nextId + 1,
               text: 'Sorry, I encountered an error sending your message.',
               sender: 'bot',
            };
            setMessages((prev) => [...prev, errorMessage]);
            setNextId((prev) => prev + 1);
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
