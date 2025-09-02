import { Check, ArrowRight } from 'lucide-react';
import { useMemo, useState } from 'react';

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('monthly');

  const basePlans = [
    {
      name: 'Free',
      description: 'Perfect for trying out Leadesh',
      features: [
        '1–2 Keywords',
        'Up to 1,000 mentions',
        'Daily updates',
        '1 user',
        '7 days history'
      ],
      popular: false,
      cta: 'Start Free',
      monthlyINR: 0,
      fixedPeriod: 'forever'
    },
    {
      name: 'Starter',
      description: 'Great for small teams getting started',
      features: [
        '5 Keywords',
        '5,000 mentions',
        '6h updates',
        '1 user',
        '1 month history',
        'Standard reports'
      ],
      popular: false,
      cta: 'Choose Starter',
      monthlyINR: 3999
    },
    {
      name: 'Growth',
      description: 'Most popular for growing sales teams',
      features: [
        '15 Keywords',
        '20,000 mentions',
        '3h updates',
        '3 users',
        '6 months history',
        'Advanced reports'
      ],
      popular: true,
      cta: 'Choose Growth',
      monthlyINR: 9999
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      features: [
        'Custom limits',
        'Unlimited users',
        'API priority',
        'Multi-year history',
        'Full integrations'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ] as const;

  const plans = useMemo<ComputedPlan[]>(() => {
    const inrFmt = new Intl.NumberFormat('en-IN');

    return basePlans.map(p => {
      if (!('monthlyINR' in p)) {
        return {
          name: p.name,
          price: '',
          period: '',
          description: p.description,
          features: p.features,
          popular: p.popular,
          cta: p.cta
        };
      }

      const isAnnual = billing === 'annually';
      const amountINR = isAnnual ? p.monthlyINR * 12 : p.monthlyINR;
      const period = ('fixedPeriod' in p ? p.fixedPeriod : (isAnnual ? 'per year' : 'per month')) as string;

      return {
        name: p.name,
        price: `₹${inrFmt.format(amountINR)}`,
        period,
        description: p.description,
        features: p.features,
        popular: p.popular,
        cta: p.cta
      };
    });
  }, [billing]);

  return (
    <section id="pricing" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Plans & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your team's needs
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center rounded-full bg-gray-100 p-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                billing === 'monthly'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow hover:from-blue-700 hover:to-cyan-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annually')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                billing === 'annually'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow hover:from-blue-700 hover:to-cyan-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 flex flex-col h-full ${
                plan.popular 
                  ? 'border-blue-500 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                {plan.price && (
                  <>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{plan.period}</p>
                  </>
                )}
                <p className="text-gray-500 text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button 
                  onClick={() => { const planName = encodeURIComponent(plan.name); window.history.pushState({}, '', `/register?plan=${planName}`); window.dispatchEvent(new PopStateEvent('popstate')); }}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

interface ComputedPlan {
  name: string
  price: string
  period: string
  description: string
  features: ReadonlyArray<string>
  popular: boolean
  cta: string
}