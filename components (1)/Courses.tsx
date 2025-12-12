import React from 'react';
import { Clock, BarChart, Star, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Courses() {
  const courses = [
    {
      image: 'https://images.unsplash.com/photo-1634264719385-542efb5cb8f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMHBpZWNlcyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc2NTQzMjI5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'Beginner',
      title: 'Chess Fundamentals',
      description: 'Master the basics of chess, including piece movement, basic tactics, and opening principles.',
      duration: '8 hours',
      lessons: 24,
      rating: 4.9,
      students: 12500,
      levelColor: 'bg-green-100 text-green-700'
    },
    {
      image: 'https://images.unsplash.com/photo-1721641809341-bfc9706039cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMHBsYXllciUyMHRoaW5raW5nfGVufDF8fHx8MTc2NTQyMTQ5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'Intermediate',
      title: 'Strategic Mastery',
      description: 'Develop your strategic understanding with advanced concepts, positional play, and endgame techniques.',
      duration: '12 hours',
      lessons: 36,
      rating: 4.8,
      students: 8300,
      levelColor: 'bg-blue-100 text-blue-700'
    },
    {
      image: 'https://images.unsplash.com/photo-1699743570117-91384b4b0400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMHRvdXJuYW1lbnR8ZW58MXx8fHwxNzY1MzU0Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'Advanced',
      title: 'Tournament Preparation',
      description: 'Prepare for competitive play with opening repertoires, time management, and psychological strategies.',
      duration: '15 hours',
      lessons: 48,
      rating: 5.0,
      students: 5200,
      levelColor: 'bg-purple-100 text-purple-700'
    }
  ];

  return (
    <section id="courses" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white text-gray-900 rounded-full text-sm mb-4 shadow-sm">
            Courses
          </div>
          <h2 className="text-gray-900 mb-6">
            Structured Learning Paths
          </h2>
          <p className="text-gray-600">
            Choose from our carefully crafted courses designed to take you from 
            complete beginner to tournament-ready player.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Course Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 ${course.levelColor} rounded-full text-sm`}>
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{course.description}</p>

                {/* Course Meta */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Clock size={16} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <BarChart size={16} />
                    {course.lessons} lessons
                  </div>
                </div>

                {/* Rating and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-gray-900">{course.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">({course.students.toLocaleString()})</span>
                  </div>
                  <button className="inline-flex items-center gap-1 text-gray-900 hover:gap-2 transition-all group">
                    <span className="text-sm">Enroll</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:shadow-xl">
            View All Courses
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
