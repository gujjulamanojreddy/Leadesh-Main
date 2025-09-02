import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyLeadesh from './components/WhyLeadesh';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';

function App() {
  const [path, setPath] = useState<string>(typeof window !== 'undefined' ? window.location.pathname : '/')

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  if (path === '/contact') {
    return (
      <div className="min-h-screen">
        <Header />
        <ContactPage />
        <Footer />
      </div>
    )
  }

  if (path === '/login') {
    return (
      <div className="min-h-screen">
        <Header />
        <LoginPage />
        <Footer />
      </div>
    )
  }

  if (path.startsWith('/register')) {
    return (
      <div className="min-h-screen">
        <Header />
        <RegistrationPage />
        <Footer />
      </div>
    )
  }

  if (path === '/forgot-password') {
    return (
      <div className="min-h-screen">
        <Header />
        <ForgotPasswordPage />
        <Footer />
      </div>
    )
  }

  if (path === '/pricing') {
    return (
      <div className="min-h-screen">
        <Header />
        <Pricing />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyLeadesh />
      <UseCases />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App;