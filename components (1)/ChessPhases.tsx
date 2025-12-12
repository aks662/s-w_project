import React from 'react';
import { BookOpen, Swords, Crown, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ChessPhases() {
  const phases = [
    {
      icon: BookOpen,
      title: 'Opening',
      subtitle: 'Start Strong',
      description: 'Master the critical first moves that set the tone for the entire game. Learn proven opening repertoires and understand the principles behind each move.',
      image: 'https://images.unsplash.com/photo-1670837435886-7aa05d40d8d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMG9wZW5pbmclMjBwb3NpdGlvbnxlbnwxfHx8fDE3NjU0NTQzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      features: [
        'Popular opening systems (e4, d4, c4)',
        'Opening principles and theory',
        'Tactical traps and tricks',
        'Repertoire building strategies',
        'Common mistakes to avoid',
        'Database of 1000+ opening lines'
      ],
      topics: [
        'Italian Game',
        'Sicilian Defense',
        'Queen\'s Gambit',
        'King\'s Indian Defense',
        'French Defense',
        'English Opening'
      ]
    },
    {
      icon: Swords,
      title: 'Middle Game',
      subtitle: 'Control the Battle',
      description: 'Develop tactical vision and strategic understanding. Learn to create and execute winning plans while defending against your opponent\'s threats.',
      image: 'https://images.unsplash.com/photo-1677816156349-5fa568399cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMG1pZGRsZSUyMGdhbWV8ZW58MXx8fHwxNzY1NDU0MzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      features: [
        'Tactical patterns and combinations',
        'Strategic planning concepts',
        'Piece coordination techniques',
        'Attack and defense balance',
        'Pawn structure evaluation',
        '5000+ tactical puzzles'
      ],
      topics: [
        'Pins & Forks',
        'Discovered Attacks',
        'Sacrifices',
        'Weak Squares',
        'Pawn Breaks',
        'King Safety'
      ]
    },
    {
      icon: Crown,
      title: 'Endgame',
      subtitle: 'Finish with Precision',
      description: 'Master the art of converting advantages into victories. Learn essential endgame techniques that separate winners from those who draw or lose won positions.',
      image: 'https://images.unsplash.com/photo-1570989412391-bac1ffb78dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGVuZGdhbWUlMjBwaWVjZXN8ZW58MXx8fHwxNzY1NDU0MzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      features: [
        'Essential checkmate patterns',
        'Pawn endgame mastery',
        'Rook and minor piece endings',
        'Practical endgame techniques',
        'Theoretical positions',
        '2000+ endgame exercises'
      ],
      topics: [
        'Basic Checkmates',
        'King & Pawn Endings',
        'Rook Endgames',
        'Bishop vs Knight',
        'Opposition',
        'Zugzwang'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm mb-4">
            Complete Chess Mastery
          </div>
          <h2 className="text-gray-900 mb-6">
            Master Every Phase of the Game
          </h2>
          <p className="text-gray-600">
            From opening moves to endgame precision, our comprehensive curriculum 
            covers every aspect of chess to transform you into a complete player.
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`relative ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
              }`}>
                {/* Content */}
                <div className={index % 2 === 0 ? '' : 'lg:col-start-2'}>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <phase.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-gray-900">{phase.title}</h3>
                      <p className="text-gray-600">{phase.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-8">
                    {phase.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {phase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle size={18} className={`flex-shrink-0 mt-0.5 text-${phase.color.split('-')[1]}-600`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Topics */}
                  <div className={`${phase.bgColor} rounded-xl p-6 mb-6`}>
                    <h4 className="text-gray-900 mb-4">Key Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm border border-gray-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${phase.color} text-white rounded-lg hover:shadow-xl transition-all`}>
                    Explore {phase.title} Course
                    <ArrowRight size={18} />
                  </button>
                </div>

                {/* Image */}
                <div className={index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="relative group">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={phase.image}
                        alt={`Chess ${phase.title}`}
                        className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                    
                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border-2 border-gray-100">
                      <div className={`text-transparent bg-clip-text bg-gradient-to-r ${phase.color} mb-1`}>
                        1,000+
                      </div>
                      <div className="text-sm text-gray-600">Lessons</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-white mb-4">
              Ready to Master All Three Phases?
            </h3>
            <p className="text-gray-300 mb-8">
              Get instant access to our complete curriculum covering opening, middle game, 
              and endgame strategies with personalized learning paths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all">
                View Full Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
