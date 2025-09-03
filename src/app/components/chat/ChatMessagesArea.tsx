import React from 'react';

interface Message {
   text: string;
   sender: 'user' | 'bot';
}

interface ChatMessagesAreaProps {
   messages: Message[];
}

const ChatMessagesArea = ({ messages }: ChatMessagesAreaProps) => {
   return (
      <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
         {messages.map((message, index) => (
            <div
               key={index}
               className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
               <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg text-gray-800`}
               >
                  <p className="text-sm">{message.text}</p>
               </div>
            </div>
         ))}
      </div>
   );
};

export default ChatMessagesArea;
