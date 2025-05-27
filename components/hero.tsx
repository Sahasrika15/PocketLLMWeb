import { Button } from "@/components/ui/button"
import { Shield, Smartphone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-600 ring-1 ring-slate-900/10 hover:ring-slate-900/20 dark:text-slate-400 dark:ring-slate-100/10 dark:hover:ring-slate-100/20">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              100% Privacy-First AI Assistant
            </span>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
          Your Personal AI Assistant
          <span className="block text-emerald-600 dark:text-emerald-400">Runs Entirely On-Device</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Experience the future of AI assistance with complete privacy. No internet required, no data sharing, just
          intelligent conversations and smart actions powered by advanced on-device language models.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
            <Smartphone className="mr-2 h-5 w-5" />
            Download for Android
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3">
            Learn More
          </Button>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-left text-sm font-mono">
                <div className="text-emerald-400">{">"} Hey, send a message to John</div>
                <div className="text-slate-300 mt-2">
                  AI: I'll help you send a message to John. What would you like to say?
                </div>
                <div className="text-emerald-400 mt-2">{">"} Tell him I'm running late</div>
                <div className="text-slate-300 mt-2">AI: Message sent to John: "I'm running late"</div>
                <div className="w-2 h-4 bg-emerald-400 animate-pulse inline-block ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
