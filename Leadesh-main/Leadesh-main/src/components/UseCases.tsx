 
import { Users, Building2, Rocket, Building } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Sales Teams",
      description: "Discover prospects ready to buy.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Agencies",
      description: "Spot client opportunities and win more deals.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Startups",
      description: "Find early adopters and beta testers.",
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "B2B Companies",
      description: "Track conversations, competitors, and industry signals.",
      gradient: "from-teal-600 to-green-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored solutions for every type of business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${useCase.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {useCase.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {useCase.description}
              </p>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;