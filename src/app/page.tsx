'use client'
import React, { useEffect } from 'react'
import Navigation from './components/Navigation'
import ChatWindow from './components/chat/ChatWindow'
import Hero from './components/Hero'

const page = () => {
    return (
        <div>
            <Navigation />
            <div className="flex justify-center p-4">
                <div className="">
                    <Hero />
                </div>
                <div className="w-1/2">
                    <ChatWindow />
                </div>
            </div>
        </div>
    )
}

export default page
