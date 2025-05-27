"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Sparkles
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Custom CSS for animations */}
      <style jsx>{`
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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2000ms' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center group cursor-pointer">
                <img
                  src="/images/logo.jpg"
                  alt="Pocket LLM Logo"
                  className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Features", "About", "Download", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                  >
                    {item}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-950/95 backdrop-blur-xl border-b border-blue-900/30">
            {["Features", "About", "Download", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-blue-400 transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
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
              <Badge variant="secondary" className="mb-6 bg-blue-950/50 text-blue-300 border-blue-800/50 hover:bg-blue-900/50 transition-all duration-300">
                <Shield className="w-4 h-4 mr-2" />
                100% Privacy-First AI
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              </Badge>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                Your Personal AI Assistant
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Runs Entirely On-Device
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Experience the future of AI assistance with complete privacy. No internet required, no data sharing, just
              intelligent conversations and smart actions powered by advanced on-device language models.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-300">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
                <Smartphone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Download for Android
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div
                  className="relative bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800 hover:border-blue-800/50 transition-all duration-500 transform hover:scale-105"
                  style={{ transform: `translateY(${scrollY * 0.1}px) rotateX(${Math.min(scrollY * 0.05, 10)}deg)` }}
                >
                  <div className="bg-slate-950 rounded-2xl p-4 border border-slate-700">
                    <div className="flex justify-between items-center mb-4 text-xs text-slate-400">
                      <span>9:41 AM</span>
                      <div className="flex gap-1 items-center">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <WifiOff className="w-3 h-3" />
                        <div className="w-6 h-3 border border-slate-400 rounded-sm">
                          <div className="w-4 h-full bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-slate-800 rounded-2xl rounded-tl-md p-3 max-w-xs">
                          <p className="text-slate-200 text-sm">Hi! I'm your private AI assistant. How can I help you today?</p>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl rounded-tr-md p-3 max-w-xs">
                          <p className="text-white text-sm">Send a message to John saying I'm running late</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-slate-800 rounded-2xl rounded-tl-md p-3 max-w-xs">
                          <p className="text-slate-200 text-sm">Message sent to John: "I'm running late for our meeting" ✓</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 px-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                        <span className="text-slate-400 text-xs ml-2">AI is typing...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-xl w-full">
                <div className="bg-slate-900 rounded-xl p-6 shadow-2xl border border-slate-800 hover:border-blue-800/50 transition-all duration-500">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '100ms' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                    <span className="ml-2 text-slate-400 text-sm">AI Assistant Terminal</span>
                  </div>
                  <div className="font-mono text-sm space-y-3">
                    <div className="text-green-400 flex items-center">
                      <span>$</span>
                      <span className="ml-2 typing-animation">What's the weather like?</span>
                    </div>
                    <div className="text-slate-300 flex items-start gap-2">
                      <Brain className="w-4 h-4 text-blue-400 mt-0.5 animate-pulse" />
                      <span>Checking local weather data... It's 72°F and sunny today.</span>
                    </div>
                    <div className="text-green-400 flex items-center">
                      <span>$</span>
                      <span className="ml-2">Remind me about the meeting at 3pm</span>
                    </div>
                    <div className="text-slate-300 flex items-start gap-2">
                      <Brain className="w-4 h-4 text-blue-400 mt-0.5 animate-pulse" />
                      <span>Reminder set for 3:00 PM today ✓</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400">$</span>
                      <div className="w-2 h-4 bg-green-400 animate-pulse ml-2"></div>
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
              <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                Why Choose On-Device AI?
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the perfect balance of intelligence, privacy, and performance with our revolutionary approach
              to AI assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Complete Privacy",
                description: "Your conversations never leave your device. No cloud processing, no data collection, no tracking.",
                color: "from-green-500 to-emerald-500",
                delay: "delay-0"
              },
              {
                icon: WifiOff,
                title: "Works Offline",
                description: "Full functionality without internet connection. Perfect for areas with poor connectivity or privacy concerns.",
                color: "from-blue-500 to-cyan-500",
                delay: "delay-100"
              },
              {
                icon: Brain,
                title: "Advanced LLM",
                description: "Powered by quantized large language models via llama.cpp for intelligent, context-aware conversations.",
                color: "from-purple-500 to-violet-500",
                delay: "delay-200"
              },

              {
                icon: Mic,
                title: "Voice Commands",
                description: " Have a conversation with the AI — use your voice to make calls, schedule calendar events, or perform tasks effortlessly in real time.",
                color: "from-purple-600 to-indigo-600",
                delay: "delay-300"
              },

              {
                icon: Phone,
                title: "System Integration",
                description: "Seamlessly integrates with your Android system to perform real actions like calling and scheduling.",
                color: "from-red-500 to-pink-500",
                delay: "delay-400"
              },
              {
                icon: Smartphone,
                title: "Native Android",
                description: "Built specifically for Android with Kotlin, ensuring optimal performance and battery efficiency.",
                color: "from-indigo-500 to-blue-500",
                delay: "delay-500"
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`bg-slate-900/50 border-slate-800 hover:border-blue-800/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group ${feature.delay} animate-fade-in-up`}
              >
                <CardHeader>
                  <div className="relative mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <feature.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl opacity-20 blur group-hover:opacity-30 group-hover:blur-md transition-all duration-300`}></div>
                  </div>
                  <CardTitle className="text-slate-200 group-hover:text-white transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  The Future of AI is
                </span>
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Private and Personal
                </span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Traditional AI assistants send your data to the cloud, creating privacy risks and requiring constant
                internet connectivity. Our on-device AI changes everything.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Zero data collection or tracking",
                  "Works completely offline",
                  "Lightning-fast responses",
                  "Advanced natural language understanding",
                  "Seamless Android integration",
                ].map((item, index) => (
                  <div key={index} className="flex items-center group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
                Learn More About Our Technology
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
              {[
                { icon: Lock, title: "Private", desc: "Your data stays on your device", color: "from-green-500 to-emerald-500" },
                { icon: Zap, title: "Fast", desc: "Instant responses, no latency", color: "from-yellow-500 to-orange-500" },
                { icon: Globe, title: "Offline", desc: "Works without internet", color: "from-blue-500 to-cyan-500" },
                { icon: Cpu, title: "Efficient", desc: "Optimized for mobile hardware", color: "from-purple-500 to-violet-500" },
              ].map((item, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-blue-800/50 text-center p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group">
                  <div className="relative mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <item.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl opacity-20 blur group-hover:opacity-30 transition-all duration-300 mx-auto w-12 h-12`}></div>
                  </div>
                  <h3 className="font-semibold text-slate-200 group-hover:text-white mb-2 transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              Ready to Experience
            </span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              True AI Privacy?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Download our Android app and start having intelligent conversations without compromising your privacy.
          </p>

          <Card className="bg-slate-900/80 border-slate-800 hover:border-blue-800/50 backdrop-blur-sm mb-12 max-w-2xl mx-auto transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
            <CardHeader>
              <CardTitle className="text-slate-200 flex items-center justify-center gap-2">
                <div className="relative">
                  <Download className="h-6 w-6 text-blue-400" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur animate-pulse"></div>
                </div>
                Download Pocket LLM
              </CardTitle>
              <CardDescription className="text-slate-400">
                Latest version with enhanced performance and new features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    alert("APK download will be available here. Please add your download link.")
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download APK (Coming Soon)
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-black border-black hover:bg-black hover:text-white hover:border-white transition-all duration-300 hover:scale-105">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2 animate-pulse" />
                  <div className="text-slate-200 font-semibold">100% Private</div>
                  <div className="text-slate-400 text-sm">No data collection</div>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-blue-400 mx-auto mb-2 animate-pulse" />
                  <div className="text-slate-200 font-semibold">Lightning Fast</div>
                  <div className="text-slate-400 text-sm">Optimized performance</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-blue-400 mx-auto mb-2 animate-pulse" />
                  <div className="text-slate-200 font-semibold">Open Source</div>
                  <div className="text-slate-400 text-sm">Community driven</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-sm text-slate-400">
            <p>System Requirements: Android 24.0+ • 6GB RAM minimum</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img
                  src="/path-to-pocket-llm-logo.png"
                  alt="Pocket LLM Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                The future of AI assistance is here - completely private, fully offline, and incredibly intelligent.
                Your personal AI that respects your privacy.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-200">Features</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                    On-Device Processing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                    Offline Functionality
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                    Intent Recognition
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                    System Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                    Privacy First
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-200">Support</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-900/30">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2025 Pocket LLM. Built with privacy in mind. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                  Privacy
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                  Terms
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}