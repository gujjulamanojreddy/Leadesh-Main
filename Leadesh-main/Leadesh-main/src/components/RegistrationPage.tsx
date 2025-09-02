import { useMemo, useState } from 'react'
import { Check } from 'lucide-react'

function RegistrationPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agree, setAgree] = useState(false)

  const selectedPlan = useMemo(() => {
    if (typeof window === 'undefined') return 'Free'
    const p = new URLSearchParams(window.location.search).get('plan')
    if (!p) return 'Free'
    return decodeURIComponent(p)
  }, [])

  const planFeatures: Record<string, ReadonlyArray<string>> = {
    Free: [
      '1–2 Keywords',
      'Up to 1,000 mentions',
      'Daily updates',
      '1 user',
      '7 days history'
    ],
    Starter: [
      '5 Keywords',
      '5,000 mentions',
      '6h updates',
      '1 user',
      '1 month history',
      'Standard reports'
    ],
    Growth: [
      '15 Keywords',
      '20,000 mentions',
      '3h updates',
      '3 users',
      '6 months history',
      'Advanced reports'
    ],
    Enterprise: [
      'Custom limits',
      'Unlimited users',
      'API priority',
      'Multi-year history',
      'Full integrations'
    ]
  }
  const features = planFeatures[selectedPlan] ?? []

  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Selected Plan</h2>
            <p className="text-lg text-gray-700 mb-6">{selectedPlan}</p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What’s included</h3>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Register</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input value={name} onChange={e => setName(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
              </div>
              <div className="flex items-center gap-2">
                <input id="agree" type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="agree" className="text-sm text-gray-700">I agree to Terms and Conditions</label>
              </div>
              <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition">Register</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RegistrationPage
