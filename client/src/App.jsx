import { useState } from "react";
import AnalyticalData from "./components/AnalyticalData";
import Calendly from "./components/Calendly";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TextSlider from "./components/TextSlider";
import ChatbotToggle from "./components/ChatbotToggle";

export default function App() {

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleToggleChatbot = () => {
    setIsChatbotOpen((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      <div className='container mx-auto px-24'>
        <Hero />
        <Services />
        <AnalyticalData />
        <Calendly />
        <TextSlider />
      </div>
      <Chatbot isOpen={isChatbotOpen} onClose={handleToggleChatbot} />
      <ChatbotToggle onClick={handleToggleChatbot} />
      <Footer />
    </>
  )
}