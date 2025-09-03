'use client'
import React, { useState } from 'react'
import ChatMessagesArea from './ChatMessagesArea'
import ChatInputArea from './ChatInputArea'

interface Message {
    id: number
    text: string
    timestamp: Date
    sender: 'user' | 'bot'
}

const ChatWindow = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: 'Welcome to the chat!',
            timestamp: new Date(),
            sender: 'bot',
        },
    ])
    const [inputText, setInputText] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputText.trim()) {
            const newMessage: Message = {
                id: messages.length + 1,
                text: inputText,
                timestamp: new Date(),
                sender: 'user',
            }
            setMessages([...messages, newMessage])
            setInputText('')
        }
    }

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
    )
}

export default ChatWindow
