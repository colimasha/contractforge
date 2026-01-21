import { Link } from 'react-router-dom'

export default function Pricing() {
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
            <div className="flex items-center gap-4">
              <button className="px-6 py-2 text-white hover:text-blue-400 transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Pricing Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-400">Choose the plan that fits your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Starter',
              price: '29',
              description: 'Perfect for individuals',
              features: ['Up to 10 contracts', 'Basic templates', 'Email support', 'Standard security']
            },
            {
              name: 'Professional',
              price: '79',
              description: 'For growing teams',
              features: ['Unlimited contracts', 'Advanced templates', 'Priority support', 'Team collaboration', 'Custom branding'],
              popular: true
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              description: 'For large organizations',
              features: ['Everything in Pro', 'Dedicated support', 'Custom integrations', 'Advanced analytics', 'SLA guarantee']
            }
          ].map((plan, idx) => (
            <div 
              key={idx}
              className={`relative p-8 rounded-lg border transition-all ${
                plan.popular 
                  ? 'border-blue-500/50 bg-gradient-to-br from-slate-800/70 to-slate-900/70 ring-1 ring-blue-500/20' 
                  : 'border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-400 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">${plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-400">/month</span>}
              </div>
              <button className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                  : 'border border-slate-600 hover:border-slate-400'
              }`}>
                Get Started
              </button>
              <ul className="space-y-4">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3 text-slate-300">
                    <span className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}