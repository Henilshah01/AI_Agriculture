import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram } from "lucide-react";
import { FaVideo, FaCode, FaChartBar, FaUsers, FaComments } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 overflow-y-auto">
      <header className="text-center py-20 w-full max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Build your Future With AI</h1>
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">Enhance your interview preparation with AI-powered features.</p>
        <Button className="mt-6 px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-white">Get Started</Button>
      </header>
      
      <section className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto p-4">
        <Card className="p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <FaVideo className="text-blue-600 dark:text-blue-400 text-4xl mx-auto mb-4" />
          <CardTitle className="text-xl">Live Video & Facial Analysis</CardTitle>
          <CardContent className="text-gray-600 dark:text-gray-300">Practice with real-time video and AI-based facial expression analysis.</CardContent>
        </Card>
        
        <Card className="p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <FaCode className="text-green-600 dark:text-green-400 text-4xl mx-auto mb-4" />
          <CardTitle className="text-xl">Built-in Code Editor</CardTitle>
          <CardContent className="text-gray-600 dark:text-gray-300">Solve coding problems with an interactive code editor.</CardContent>
        </Card>
        
        <Card className="p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <FaChartBar className="text-yellow-600 dark:text-yellow-400 text-4xl mx-auto mb-4" />
          <CardTitle className="text-xl">Data Visualization</CardTitle>
          <CardContent className="text-gray-600 dark:text-gray-300">Get insights into your performance with AI-powered analysis.</CardContent>
        </Card>
      </section>
      
      <section className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto p-4">
        <Card className="p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <FaUsers className="text-purple-600 dark:text-purple-400 text-4xl mx-auto mb-4" />
          <CardTitle className="text-xl">Mock Interviews</CardTitle>
          <CardContent className="text-gray-600 dark:text-gray-300">Simulate real interview scenarios with AI-driven responses.</CardContent>
        </Card>

        <Card className="p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <FaComments className="text-red-600 dark:text-red-400 text-4xl mx-auto mb-4" />
          <CardTitle className="text-xl">AI Feedback</CardTitle>
          <CardContent className="text-gray-600 dark:text-gray-300">Receive instant AI-generated feedback on your answers.</CardContent>
        </Card>
      </section>
      
      <section className="text-center mt-16">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Have questions or need support? Reach out to us!
        </p>
      </section>
      
      <footer className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {/* Left Section */}
        <div>
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-2 rounded-full border border-white bg-transparent text-white placeholder-gray-300"
          />
          <button className="mt-2 w-full bg-blue-500 rounded-full py-2 text-white font-semibold flex items-center justify-center">
            <span>Contact</span>
          </button>
          <p className="flex items-center space-x-2 mt-2">
            📞 +91 97973 59144
          </p>
          <p className="flex items-center space-x-2">
            ✉️ Edtech.in@gmail.com
          </p>
          <p className="flex items-center space-x-2">
            📍 Ahmedabad
          </p>
        </div>

        {/* Right Section */}
        <div>
          <p>Our Team</p>
          <p>Privacy</p>
          <p>Terms & Conditions</p>
          <p>FAQ</p>
          <p className="mt-4 font-semibold">Follow Us</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
    </div>
    
  );
}
