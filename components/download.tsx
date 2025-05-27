"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DownloadIcon, Shield, Zap, Users } from "lucide-react"

export function Download() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-900 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
          Ready to Experience True AI Privacy?
        </h2>
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
          Download our Android app and start having intelligent conversations without compromising your privacy.
        </p>

        <Card className="bg-slate-800 border-slate-700 mb-12">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-center gap-2">
              <DownloadIcon className="h-6 w-6" />
              Download AI Assistant
            </CardTitle>
            <CardDescription className="text-slate-300">
              Latest version with enhanced performance and new features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
                onClick={() => {
                  // This will be where you add your APK download link
                  alert("APK download will be available here. Please add your download link.")
                }}
              >
                <DownloadIcon className="mr-2 h-5 w-5" />
                Download APK (Coming Soon)
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Shield className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-white font-semibold">100% Private</div>
                <div className="text-slate-400 text-sm">No data collection</div>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Lightning Fast</div>
                <div className="text-slate-400 text-sm">Optimized performance</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Open Source</div>
                <div className="text-slate-400 text-sm">Community driven</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-sm text-slate-400">
          <p>System Requirements: Android 7.0+ • ARM64 processor recommended • 2GB RAM minimum</p>
        </div>
      </div>
    </section>
  )
}
