// src/COMPONENT/ChatBot/ChatBot.jsx
import React, { useState } from 'react';
import './ChatBot.css';
import { FaRobot, FaUser, FaShoppingBag } from 'react-icons/fa';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I’m SHOPPER 🛍️ — Ask me anything!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

function formatMessage(text) {
  if (typeof text !== 'string') return ''; // ✅ Prevent .replace() crash

  // Convert markdown-style links to clickable HTML
  const linkified = text.replace(
    /\[([^\]]+)]\((https?:\/\/[^\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  return linkified.replace(/\n/g, '<br />'); // Add line breaks
}



const sendMessage = async () => {
  if (!input.trim()) return;

  const newMessages = [...messages, { from: 'user', text: input }];
  setMessages(newMessages);
  setInput('');
  setLoading(true);

  try {
    const res = await fetch("http://localhost:3001/chat-query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setMessages([...newMessages, { from: 'bot', text: data.response }]);
  } catch (error) {
    setMessages([...newMessages, { from: 'bot', text: "❌ Couldn't get response from AI." }]);
  }

  setLoading(false);
};


  return (
    <div className={`chatbot-container ${open ? 'open' : ''}`}>
      {open && (
        <div className="chat-window">
          <div className="chat-header">🧠 SHOPPER AI</div>
          <div className="chat-body">
            {messages?.map((msg, i) => (
              <div key={i} className={`message-row ${msg.from}`}>
                <div className="avatar">
                  {msg.from === 'bot' ? <FaRobot /> : <FaUser />}
                </div>
                <div
  className="message"
  dangerouslySetInnerHTML={{ __html: formatMessage(msg?.text) }}

></div>

              </div>
            ))}
            {loading && (
              <div className="message-row bot">
                <div className="avatar"><FaRobot /></div>
                <div className="message typing">SHOPPER is typing...</div>
              </div>
            )}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={input}
              placeholder="Ask something like 'shoes under ₹1000'"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        <FaShoppingBag />
      </button>
    </div>
  );
};

export default ChatBot;
