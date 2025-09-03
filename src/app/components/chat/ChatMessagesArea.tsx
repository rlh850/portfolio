import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
   text: string;
   sender: 'user' | 'bot';
}

interface ChatMessagesAreaProps {
   messages: Message[];
}

const ChatMessagesArea = ({ messages }: ChatMessagesAreaProps) => {
   const lastMessageRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
   }, [messages]);

   return (
      <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
         {messages.map((message, index) => (
            <div
               key={index}
               ref={index === messages.length - 1 ? lastMessageRef : null}
               className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
               <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg text-gray-800`}
               >
                  <div className="text-sm prose prose-sm max-w-none">
                     <ReactMarkdown>{message.text}</ReactMarkdown>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default ChatMessagesArea;
