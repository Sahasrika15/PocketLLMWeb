"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Wheat,          // for Agriculture
  Tractor,        // for Agriculture (optional)
  Stethoscope,    // for Medical
  Heart,          // for Medical (heartbeat alternative)
  Code            // for Coding
} from "lucide-react";
import {
  Shield,
  Smartphone,
  WifiOff,
  Brain,
  MessageSquare,
  Phone,
  Download,
  Star,
  Check,
  Zap,
  Users,
  Github,
  Twitter,
  Mail,
  Menu,
  X,
  ChevronRight,
  Play,
  Globe,
  Lock,
  Mic,
  Cpu,
  ArrowRight,
  Bot,
  Sparkles,
  AlarmClock,
  Calendar,
  Database,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: 'var(--background-color, #ffffff)' }}>
      {/* Custom CSS for animations and theme */}
      <style jsx>{`
        :root {
          --primary-color: #6b21a8; /* Main purple color */
          --primary-dark: #5b1a8f; /* Darker purple shade */
          --primary-light: #a855f7; /* Lighter purple shade */
          --background-color: #ffffff; /* White background */
          --text-primary: #1f2937; /* Dark text for contrast on white */
          --text-secondary: #4b5563; /* Lighter text for secondary elements */
          --card-bg: #f9fafb; /* Slightly off-white for cards */
          --border-color: #e5e7eb; /* Light gray border */
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        
        .typing-animation {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(20, end) infinite alternate;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ background: 'var(--primary-light, #a855f7)' }}></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 rounded-full blur-3xl animate-pulse" style={{ background: 'var(--primary-color, #6b21a8)', animationDelay: '1000ms' }}></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full blur-2xl animate-pulse" style={{ background: 'var(--primary-dark, #5b1a8f)', animationDelay: '2000ms' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b" style={{ borderColor: 'var(--border-color, #e5e7eb)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center group cursor-pointer">
                <img
                  src="/images/logo.png"
                  alt="Pocket LLM Logo"
                  className="h-10 w-auto transition-transform duration-300"
                />
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Features", "RAG", "About", "Download"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                  >
                    {item}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
              >
                <div className="relative w-6 h-6">
                  <Menu className={`h-6 w-6 absolute transition-all duration-300 ${mobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
                  <X className={`h-6 w-6 absolute transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-xl border-b" style={{ borderColor: 'var(--border-color, #e5e7eb)' }}>
            {["Features", "RAG", "About", "Download", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600 transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="animate-bounce">
              <Badge variant="secondary" className="mb-6 bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200/50 transition-all duration-300">
                <Shield className="w-4 h-4 mr-2" />
                100% Privacy-First AI
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              </Badge>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
                Your Personal AI Assistant
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Runs Entirely On-Device
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Experience the future of AI assistance with complete privacy. No internet required, no data sharing, just
              intelligent conversations and smart actions powered by advanced on-device language models.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-300">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group">
                <Smartphone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Download for Android
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-purple-700/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div
                  className="relative bg-gray-50 rounded-3xl p-6 shadow-2xl border hover:border-purple-600/50 transition-all duration-500 transform hover:scale-105"
                  style={{ transform: `translateY(${scrollY * 0.1}px) rotateX(${Math.min(scrollY * 0.05, 10)}deg)`, borderColor: 'var(--border-color, #e5e7eb)' }}
                >
                  <div className="bg-white rounded-2xl p-4 border" style={{ borderColor: 'var(--border-color, #e5e7eb)' }}>
                    <div className="flex justify-between items-center mb-4 text-xs text-gray-500">
                      <span>9:41 AM</span>
                      <div className="flex gap-1 items-center">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <WifiOff className="w-3 h-3" />
                        <div className="w-6 h-3 border border-gray-400 rounded-sm">
                          <div className="w-4 h-full bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl rounded-tl-md p-3 max-w-xs">
                          <p className="text-gray-700 text-sm">Hi! I'm your private AI assistant. How can I help you today?</p>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl rounded-tr-md p-3 max-w-xs">
                          <p className="text-white text-sm">Schedule an event in calendar at 9am tomorrow with my boss</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl rounded-tl-md p-3 max-w-xs">
                          ausp
                          <p className="text-gray-700 text-sm">Scheduled Meet with Boss tomorrow at 9:00 am</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 px-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                        <span className="text-gray-500 text-xs ml-2">AI is typing...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-xl w-full">
                <div className="bg-gray-50 rounded-xl p-6 shadow-2xl border hover:border-purple-600/50 transition-all duration-500" style={{ borderColor: 'var(--border-color, #e5e7eb)' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '100ms' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                    <span className="ml-2 text-gray-500 text-sm">AI Assistant Terminal</span>
                  </div>
                  <div className="font-mono text-sm space-y-3">
                    <div className="text-green-600 flex items-center">
                      <span>$</span>
                      <span className="ml-2 typing-animation">What is full form of API</span>
                    </div>
                    <div className="text-gray-700 flex items-start gap-2">
                      <Brain className="w-4 h-4 text-purple-600 mt-0.5 animate-pulse" />
                      <span>The full form of API is Application Programming Interface</span>
                    </div>
                    <div className="text-green-600 flex items-center">
                      <span>$</span>
                      <span className="ml-2">Call Pooja</span>
                    </div>
                    <div className="text-gray-700 flex items-start gap-2">
                      <Brain className="w-4 h-4 text-purple-600 mt-0.5 animate-pulse" />
                      <span>Calling Pooja...</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600">$</span>
                      <div className="w-2 h-4 bg-green-600 animate-pulse ml-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
                Why Choose On-Device AI?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect balance of intelligence, privacy, and performance with our revolutionary approach
              to AI assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Advanced LLM",
                description: "Powered by quantized large language models via llama.cpp for intelligent, context-aware conversations.",
                color: "from-purple-600 to-purple-700",
                delay: "delay-0"
              },
              {
                icon: Mic,
                title: "Voice Commands",
                description: "Have a conversation with the AI — use your voice to make calls, schedule calendar events, or perform tasks effortlessly in real time.",
                color: "from-purple-600 to-indigo-600",
                delay: "delay-100"
              },
              {
                icon: Phone,
                title: "Call Integration",
                description: "Seamlessly integrates with your Android system to make real phone calls instantly.",
                color: "from-red-500 to-pink-500",
                delay: "delay-200"
              },
              {
                icon: AlarmClock,
                title: "Smart Alarms",
                description: "Set and manage alarms effortlessly using natural language commands, integrated with your device's clock.",
                color: "from-blue-500 to-blue-600",
                delay: "delay-300"
              },
              {
                icon: MessageSquare,
                title: "SMS Management",
                description: "Send, receive, and manage SMS messages directly through the AI with simple voice or text instructions.",
                color: "from-green-500 to-emerald-500",
                delay: "delay-400"
              },
              {
                icon: Calendar,
                title: "Calendar Scheduling",
                description: "Easily schedule, edit, or view calendar events using intuitive AI-powered commands.",
                color: "from-indigo-500 to-purple-500",
                delay: "delay-500"
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`bg-gray-50 border hover:border-purple-600/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group ${feature.delay} animate-fade-in-up`}
                style={{ borderColor: 'var(--border-color, #e5e7eb)' }}
              >
                <CardHeader>
                  <div className="relative mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <feature.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <CardTitle className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RAG Section */}
      <section id="rag" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
                Retrieval-Augmented Generation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              Our App leverages Retrieval-Augmented Generation (RAG) to enhance responses with domain-specific knowledge. By combining on-device large language models with curated datasets, we deliver accurate and contextually relevant answers tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wheat,
                title: "Agriculture Dataset",
                description: "Access a comprehensive dataset covering crop management, soil analysis, and sustainable farming practices. Perfect for farmers and researchers seeking data-driven agricultural insights.",
                color: "from-green-500 to-emerald-500",
                delay: "delay-0"
              },
              {
                icon: Stethoscope,
                title: "Medical Dataset",
                description: "Utilize a robust medical dataset with information on diseases, treatments, and medical terminology, designed to assist healthcare professionals and students with reliable information.",
                color: "from-blue-500 to-blue-600",
                delay: "delay-100"
              },
              {
                icon: Code,
                title: "Computer Coding Dataset",
                description: "Explore a rich dataset of programming concepts, code snippets, and best practices across multiple languages, ideal for developers and students enhancing their coding skills.",
                color: "from-purple-600 to-purple-700",
                delay: "delay-200"
              },
            ].map((dataset, index) => (
              <Card
                key={index}
                className={`bg-gray-50 border hover:border-purple-600/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group ${dataset.delay} animate-fade-in-up`}
                style={{ borderColor: 'var(--border-color, #e5e7eb)' }}
              >
                <CardHeader>
                  <div className="relative mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${dataset.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <dataset.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <CardTitle className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{dataset.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    {dataset.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
                  The Future of AI is
                </span>
                <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Private and Personal
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Traditional AI assistants send your data to the cloud, creating privacy risks and requiring constant
                internet connectivity. Our on-device AI changes everything.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Zero data collection or tracking",
                  "Works completely offline",
                  "Advanced natural language understanding",
                  "Seamless Android integration",
                ].map((item, index) => (
                  <div key={index} className="flex items-center group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
              {[
                { icon: Lock, title: "Private", desc: "Your data stays on your device", color: "from-green-500 to-emerald-500" },
                { icon: Zap, title: "Fast", desc: "Instant responses, no latency", color: "from-yellow-500 to-orange-500" },
                { icon: Globe, title: "Offline", desc: "Works without internet", color: "from-purple-500 to-purple-600" },
                { icon: Cpu, title: "Efficient", desc: "Optimized for mobile hardware", color: "from-purple-600 to-purple-700" },
              ].map((item, index) => (
                <Card key={index} className="bg-gray-50 border hover:border-purple-600/50 text-center p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group" style={{ borderColor: 'var(--border-color, #e5e7eb)' }}>
                  <div className="relative mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <item.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl opacity-20 blur group-hover:opacity-30 transition-all duration-300 mx-auto w-12 h-12`}></div>
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-gray-900 mb-2 transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
              Ready to Experience
            </span>
            <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              True AI Privacy?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Download our Android app and start having intelligent conversations without compromising your privacy.
          </p>

          <Card className="bg-gray-50 border hover:border-purple-600/50 backdrop-blur-sm mb-12 max-w-2xl mx-auto transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10" style={{ borderColor: 'var(--border-color, #e5e7eb)' }}>
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center justify-center gap-2">
                <div className="relative">
                  <Download className="h-6 w-6 text-purple-600" />
                  <div className="absolute inset-0 bg-purple-600/20 rounded-full blur animate-pulse"></div>
                </div>
                Download Pocket LLM
              </CardTitle>
              <CardDescription className="text-gray-500">
                Latest version with enhanced performance and new features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    alert("APK download will be available here. Please add your download link.")
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download APK
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-black border-black hover:bg-black hover:text-white hover:border-white transition-all duration-300 hover:scale-105">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2 animate-pulse" />
                  <div className="text-gray-800 font-semibold">100% Private</div>
                  <div className="text-gray-500 text-sm">No data collection</div>
                </div>
                <div className="text-center">
                  <WifiOff className="h-8 w-8 text-purple-600 mx-auto mb-2 animate-pulse" />
                  <div className="text-gray-800 font-semibold">Completely Offline</div>
                  <div className="text-gray-500 text-sm">Uses local GGUF models</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2 animate-pulse" />
                  <div className="text-gray-800 font-semibold">Open Source</div>
                  <div className="text-gray-500 text-sm">Community driven</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-sm text-gray-500">
            <p>System Requirements: Android 24.0+ • 6GB RAM minimum</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Pocket LLM. Built with privacy in mind. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}