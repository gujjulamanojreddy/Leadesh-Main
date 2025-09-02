import { Ear, Brain, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Ear className="w-12 h-12" />,
      title: "Listen",
      description: "Leadesh scans millions of social posts and conversations across platforms.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Detect",
      description: "AI identifies buying signals, intent keywords, and relevant opportunities.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Act",
      description: "Get instant alerts so your team can engage before competitors do.",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your sales process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-6 w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;