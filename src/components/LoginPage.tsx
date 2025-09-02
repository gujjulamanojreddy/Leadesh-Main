import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import { useState } from 'react'

const LoginPage = () => {
	const [show, setShow] = useState(false)

	return (
		<main className="pt-20">
			<section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
				<div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
					<h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Log in to Leadesh</h1>

					<div className="space-y-4">
						<label className="block">
							<span className="block text-sm font-medium text-gray-700 mb-1">Email</span>
							<div className="relative">
								<Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
								<input type="email" className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
							</div>
						</label>

						<label className="block">
							<span className="block text-sm font-medium text-gray-700 mb-1">Password</span>
							<div className="relative">
								<Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
								<input type={show ? 'text' : 'password'} className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
								<button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
									{show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
								</button>
							</div>
						</label>

						<div className="mt-2 text-right">
							<a href="/forgot-password" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/forgot-password'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="text-sm text-blue-600 hover:underline">Forgot password?</a>
						</div>

						<button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition">
							Log In
						</button>

						<p className="text-center text-sm text-gray-600">Don't have an account? <a className="text-blue-600 hover:underline" href="/pricing" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/pricing'); window.dispatchEvent(new PopStateEvent('popstate')); }}>Start free</a></p>
					</div>
				</div>
			</section>
		</main>
	)
}

export default LoginPage

