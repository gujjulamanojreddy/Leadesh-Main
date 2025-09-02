import { useState } from 'react'

function ForgotPasswordPage() {
  const [email, setEmail] = useState('')

  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Reset your password</h1>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            </div>
            <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition">Submit</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ForgotPasswordPage
