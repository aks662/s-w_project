import React from 'react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Amateur Player',
      rating: 1650,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      content: 'I went from not knowing how pieces move to winning my first tournament in just 6 months. The structured lessons and AI analysis made all the difference.',
      stars: 5
    },
    {
      name: 'James Rodriguez',
      role: 'Club Champion',
      rating: 2100,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      content: 'The advanced courses helped me break through my rating plateau. The opening preparation tools are particularly excellent.',
      stars: 5
    },
    {
      name: 'Emily Chen',
      role: 'Student',
      rating: 1400,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      content: 'As a complete beginner, I was intimidated by chess. ChessMaster Academy made learning fun and accessible. I am now teaching my friends!',
      stars: 5
    },
    {
      name: 'Michael Thompson',
      role: 'Tournament Player',
      rating: 1950,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      content: 'The tactical puzzle trainer is addictive! I solve at least 20 puzzles daily, and my calculation skills have improved dramatically.',
      stars: 5
    },
    {
      name: 'Lisa Anderson',
      role: 'Chess Enthusiast',
      rating: 1550,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
      content: 'Best investment I made in my chess journey. The community is supportive, and the coaches are always available to answer questions.',
      stars: 5
    },
    {
      name: 'David Kim',
      role: 'Intermediate Player',
      rating: 1800,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
      content: 'The endgame course alone is worth the price. I went from losing equal endgames to converting advantages consistently.',
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm mb-4">
            Testimonials
          </div>
          <h2 className="text-gray-900 mb-6">
            Loved by Chess Players Worldwide
          </h2>
          <p className="text-gray-600">
            Join thousands of students who have transformed their chess game 
            with ChessMaster Academy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gray-900"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gray-200 group-hover:text-gray-300 transition-colors">
                <Quote size={32} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200"
                />
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} • Rating: {testimonial.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
