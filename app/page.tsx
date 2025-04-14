"use client";
import React, { useState } from "react";
import Hero from "./Components/Hero";
import SimliElevenlabs from "./SimliElevenlabs";
import DottedFace from "./Components/DottedFace";
import ChatInterface from "./Components/ChatInterface";
// Customize your avatar here
const avatar = {
  // Replace with your own ElevenLabs agent ID
  // You can create an agent in the ElevenLabs dashboard: https://elevenlabs.io/agents
  elevenlabs_agentid: "PWQMfyLnU0FHkeFd9MBf",
  simli_faceid: "e279cc3c-cbc4-47af-8d45-eb34eb443f3e",
};

const Demo: React.FC = () => {
  const [showDottedFace, setShowDottedFace] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [botResponse, setBotResponse] = useState<string>("");
  const [conversation, setConversation] = useState<any>(null);

  const onStart = () => {
    console.log("Setting setshowDottedface to false...");
    setShowDottedFace(false);
  };

  const onClose = () => {
    console.log("Setting setshowDottedface to true...");
    setShowDottedFace(true);
    setBotResponse("");
  };

  const handleSendMessage = (message: string) => {
    setIsProcessing(true);
    
    // Send message to ElevenLabs conversation
    if (conversation) {
      conversation.sendMessage(message);
    }
  };

  const handleBotResponse = (response: string) => {
    setBotResponse(response);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <main className="flex-grow pt-8 pb-16 px-4 md:px-8">
        <Hero />
        
        <div className="max-w-7xl mx-auto mt-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            <div className="w-full lg:w-1/2 glass-effect rounded-2xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-center">Your AI Avatar</h2>
              {showDottedFace && <DottedFace />}
              <SimliElevenlabs
                agentId={avatar.elevenlabs_agentid}
                simli_faceid={avatar.simli_faceid}
                onStart={onStart}
                onClose={onClose}
                showDottedFace={showDottedFace}
                onConversationReady={(conv) => setConversation(conv)}
                onMessage={handleBotResponse}
              />
            </div>
            
            {/* <div className="w-full lg:w-1/2 glass-effect rounded-2xl p-6 shadow-xl h-[600px] flex flex-col">
              <h2 className="text-2xl font-bold mb-6 text-center">Chat with Your Avatar</h2>
              <ChatInterface 
                onSendMessage={handleSendMessage} 
                isProcessing={isProcessing}
                botResponse={botResponse}
              />
            </div> */}
          </div>
        </div>
      </main>
      
      <footer className="py-6 text-center text-gray-400 text-sm">
        <p>© 2023 AI Avatar Chatbot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Demo;
