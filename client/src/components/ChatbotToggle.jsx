import React from 'react';

function ChatbotToggle({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
        >
            {/* Chat Bubble Icon */}
            <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    d="M2 5.5A2.5 2.5 0 0 1 4.5 3h11A2.5 2.5 0 0 1 18 5.5v6A2.5 2.5 0 0 1 15.5 14H5.707l-2.353 2.354A.5.5 0 0 1 3 16V5.5z"
                />
            </svg>
        </button>
    );
}

export default ChatbotToggle;