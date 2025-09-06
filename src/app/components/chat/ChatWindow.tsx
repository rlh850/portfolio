'use client';
import React, { useRef, useState } from 'react';
import ChatMessagesArea from './ChatMessagesArea';
import ChatInputArea from './ChatInputArea';

interface Message {
   text: string;
   sender: 'user' | 'bot';
}

const ChatWindow = () => {
   const [messages, setMessages] = useState<Message[]>([
      {
         text: 'Welcome!',
         sender: 'bot',
      },
   ]);
   const [inputText, setInputText] = useState('');

   const chatId = useRef(crypto.randomUUID());

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
                  id: chatId.current,
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
      <div className="mt-5 font-mono">
         <div className="gradient-border w-full max-w-2xl mx-auto rounded-2xl">
            <div className="bg-white h-80 md:h-96 rounded-2xl flex flex-col">
               <ChatMessagesArea messages={messages} />
               <ChatInputArea
                  inputText={inputText}
                  setInputText={setInputText}
                  onSubmit={handleSubmit}
               />
            </div>
         </div>
      </div>
   );
};

export default ChatWindow;
