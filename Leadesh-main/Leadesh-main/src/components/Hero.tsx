import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
  <section className="relative pt-24 pb-20 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32 flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-10 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
              The AI-Powered Opportunity Search Engine for Sales Teams
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Find high-intent leads from social conversations in real time. 
            <br className="hidden sm:block" />
            Engage first. Close faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => { window.history.pushState({}, '', '/pricing'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
              Start Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;