import { Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">On-Device AI Assistant</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-md">
              The future of AI assistance is here - completely private, fully offline, and incredibly intelligent. Your
              personal AI that respects your privacy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>On-Device Processing</li>
              <li>Offline Functionality</li>
              <li>Intent Recognition</li>
              <li>System Integration</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>Documentation</li>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
            © 2024 On-Device AI Assistant. Built with privacy in mind.
          </p>
        </div>
      </div>
    </footer>
  )
}
