import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Wifi, Brain, MessageSquare, Phone, Smartphone } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Complete Privacy",
    description: "Your conversations never leave your device. No cloud processing, no data collection, no tracking.",
  },
  {
    icon: Wifi,
    title: "Works Offline",
    description:
      "Full functionality without internet connection. Perfect for areas with poor connectivity or privacy concerns.",
  },
  {
    icon: Brain,
    title: "Advanced LLM",
    description:
      "Powered by quantized large language models via llama.cpp for intelligent, context-aware conversations.",
  },
  {
    icon: MessageSquare,
    title: "Smart Actions",
    description:
      "Intent-based system automatically detects when you want to send SMS, make calls, or perform other actions.",
  },
  {
    icon: Phone,
    title: "System Integration",
    description: "Seamlessly integrates with your Android system to perform real actions like calling and messaging.",
  },
  {
    icon: Smartphone,
    title: "Native Android",
    description: "Built specifically for Android with Kotlin, ensuring optimal performance and battery efficiency.",
  },
]

export function Features() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Why Choose On-Device AI?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Experience the perfect balance of intelligence, privacy, and performance with our revolutionary approach to
            AI assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-slate-900 dark:text-slate-100">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 dark:text-slate-400">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
