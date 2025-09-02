import { Rocket, Bot, BarChart3, Lightbulb } from 'lucide-react';

const WhyLeadesh = () => {
  const benefits = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Engage Early",
      description: "Spot opportunities as they happen, not after the noise.",
      color: "bg-gradient-to-br from-orange-500 to-red-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Accuracy",
      description: "Cut through chatter and focus only on high-intent leads.",
      color: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Actionable Insights",
      description: "Track trends, competitors, and prospects in one dashboard.",
      color: "bg-gradient-to-br from-teal-500 to-cyan-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Built to Scale",
      description: "From freelancers to enterprise teams, Leadesh grows with you.",
      color: "bg-gradient-to-br from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Leadesh?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything your sales team needs to stay ahead of the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 hover:border-gray-200"
            >
              {/* Icon */}
              <div className="inline-flex p-4 mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLeadesh;