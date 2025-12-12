import React from 'react';
import { Users, BookOpen, Trophy, TrendingUp } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Students',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BookOpen,
      value: '500+',
      label: 'Video Lessons',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Trophy,
      value: '1,000+',
      label: 'Tournaments',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Success Rate',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
