import './App.css'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">⚡</span>
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ContractForge
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">
                Features
              </a>
              <Link to="/pricing" className="text-slate-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                About
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <button className="px-6 py-2 text-white hover:text-blue-400 transition-colors font-medium">
                Sign In
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
                  <span className="text-blue-400 text-sm font-medium">✨ Welcome to the Future</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight space-y-2">
                  <span className="block">Smart Contract</span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Management
                  </span>
                </h1>
              </div>

              <p className="text-xl text-slate-400 leading-relaxed">
                Create, sign, and manage contracts in one elegant platform. Built for teams that demand security, speed, and simplicity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/dashboard"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25 text-center"
                >
                  Start Free Trial
                </Link>
                <button className="px-8 py-3 border border-slate-600 hover:border-slate-400 rounded-lg font-semibold transition-colors text-slate-300 hover:text-white">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-slate-800">
                <div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-slate-400 text-sm">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-slate-400 text-sm">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-slate-400 text-sm">Support</div>
                </div>
              </div>
            </div>

            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">📋</div>
                  <p className="text-slate-400">Smart Contract Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-400">Everything you need to manage contracts effortlessly</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '✍️',
                title: 'Smart Creation',
                description: 'Build contracts with AI-powered templates and suggestions'
              },
              {
                icon: '🔏',
                title: 'E-Signature',
                description: 'Legally binding digital signatures with audit trails'
              },
              {
                icon: '📊',
                title: 'Analytics',
                description: 'Track, monitor, and analyze all contract metrics'
              },
              {
                icon: '🔒',
                title: 'Bank Security',
                description: 'Enterprise-grade encryption and compliance'
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all hover:bg-gradient-to-br hover:from-slate-800/70 hover:to-slate-900/70"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose ContractForge?</h2>
            <p className="text-xl text-slate-400">Join teams that trust us with their contracts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Save Time',
                description: 'Automate workflows and reduce manual processes by 80%'
              },
              {
                title: 'Reduce Costs',
                description: 'Eliminate expensive legal software and streamline approvals'
              },
              {
                title: 'Stay Compliant',
                description: 'Maintain regulatory compliance with built-in audit trails'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 border border-slate-700/50 rounded-xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 hover:border-purple-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-400 mb-8">Join thousands of teams managing contracts smarter</p>
          <Link 
            to="/dashboard"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ContractForge
                </span>
              </Link>
              <p className="text-slate-400 text-sm">Smart contract management for modern teams</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2026 ContractForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
