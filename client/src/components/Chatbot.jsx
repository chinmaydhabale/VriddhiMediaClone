import React, { useState, useEffect, useRef } from 'react';

function Chatbot({ isOpen, onClose }) {
    // Existing code remains the same
    const [messages, setMessages] = useState([
        { text: 'Hello! How can I assist you today?', sender: 'bot' },
    ]);
    const [input, setInput] = useState('');

    // Ref for the messages container to scroll to bottom
    const messagesEndRef = useRef(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();

        if (input.trim() === '') return;

        const userMessage = { text: input, sender: 'user' };
        setMessages([...messages, userMessage]);

        // Send the user's message to the backend
        try {
            const response = await fetch('http://localhost:5000/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();

            const botMessage = { text: data.reply, sender: 'bot' };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: 'Sorry, there was an error. Please try again later.', sender: 'bot' },
            ]);
        }

        setInput('');
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed bottom-16 right-4 w-80 max-w-full bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-blue-500 text-white px-4 py-2 flex justify-between items-center">
                <h3 className="text-lg">Chatbot</h3>
                <button
                    onClick={onClose}
                    className="text-white hover:text-gray-200 focus:outline-none"
                >
                    &#x2715;
                </button>
            </div>
            {/* Chat Body */}
            <div className="px-4 py-2 h-64 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
                    >
                        <span
                            className={`inline-block rounded-lg px-3 py-2 ${msg.sender === 'user'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-800'
                                }`}
                        >
                            {msg.text}
                        </span>
                    </div>
                ))}
                {/* Dummy div to scroll to bottom */}
                <div ref={messagesEndRef} />
            </div>
            {/* Input Field */}
            <form onSubmit={sendMessage} className="flex px-4 py-2">
                <input
                    type="text"
                    className="flex-grow px-3 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default Chatbot;