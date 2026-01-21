import { Link } from 'react-router-dom'

export default function Dashboard() {
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
                Profile
              </button>
              <button className="px-6 py-2 border border-slate-600 rounded-lg hover:border-slate-400 transition-colors">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-slate-400">Here's your contract dashboard</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Contracts', value: '24' },
            { label: 'Pending Signatures', value: '5' },
            { label: 'Completed', value: '19' },
            { label: 'Team Members', value: '8' }
          ].map((stat, idx) => (
            <div key={idx} className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg">
              <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Recent Contracts</h2>
            <div className="space-y-4">
              {['Service Agreement', 'Employment Contract', 'NDA'].map((contract, idx) => (
                <div key={idx} className="p-4 bg-slate-900/50 border border-slate-700/30 rounded-lg flex justify-between items-center hover:border-blue-500/50 transition-colors cursor-pointer">
                  <div>
                    <p className="font-semibold">{contract}</p>
                    <p className="text-slate-400 text-sm">Updated 2 days ago</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-400 rounded-full text-sm">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg h-fit">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all">
                Create Contract
              </button>
              <button className="w-full px-4 py-3 border border-slate-600 rounded-lg font-medium hover:border-slate-400 transition-colors">
                Upload Template
              </button>
              <button className="w-full px-4 py-3 border border-slate-600 rounded-lg font-medium hover:border-slate-400 transition-colors">
                Invite Team Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}