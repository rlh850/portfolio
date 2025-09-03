'use client'
import React, { useState } from 'react'
import { IoSend } from 'react-icons/io5'

interface ChatInputAreaProps {
    inputText: string
    setInputText: (text: string) => void
    onSubmit: (e: React.FormEvent) => void
}

const ChatInputArea = ({
    inputText,
    setInputText,
    onSubmit,
}: ChatInputAreaProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="p-2 text-black">
            <form onSubmit={onSubmit} className="flex justify-betwen gap-1">
                <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-4 resize-none outline-none"
                    rows={2}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault()
                            onSubmit(e)
                        }
                    }}
                />
                <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="mr-6 cursor-pointer"
                    disabled={!inputText.trim()}
                >
                    <IoSend
                        size={24}
                        color={isHovered ? 'lightgreen' : 'black'}
                    />
                </button>
            </form>
        </div>
    )
}

export default ChatInputArea
