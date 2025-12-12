import React from 'react';
import { Brain, Zap, Target, Users, Video, BarChart3 } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Get instant feedback on your moves with advanced AI that analyzes every game and suggests improvements.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Video,
      title: 'Expert Video Lessons',
      description: 'Learn from Grandmasters and International Masters through our comprehensive video library.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'Personalized Training',
      description: 'Custom learning paths tailored to your skill level, from complete beginner to advanced player.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Tactical Puzzles',
      description: 'Solve thousands of tactical puzzles to sharpen your calculation and pattern recognition skills.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Users,
      title: 'Live Tournaments',
      description: 'Compete with players worldwide in daily tournaments and climb the global leaderboard.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Monitor your improvement with detailed statistics and performance analytics over time.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm mb-4">
            Features
          </div>
          <h2 className="text-gray-900 mb-6">
            Everything You Need to Master Chess
          </h2>
          <p className="text-gray-600">
            Our comprehensive platform provides all the tools and resources you need 
            to improve your chess game, whether you're just starting or aiming for mastery.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-gray-900 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
