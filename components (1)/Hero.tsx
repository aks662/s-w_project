import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />
      <div className="absolute inset-0 opacity-[0.03] -z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Over 50,000+ Students Worldwide</span>
            </div>

            <h1 className="text-gray-900 mb-6">
              Master Chess from Beginner to Grandmaster
            </h1>

            <p className="text-gray-600 mb-8 max-w-xl">
              Join the world's leading chess learning platform. Learn strategic thinking, 
              improve your game with personalized lessons, and train with AI-powered analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:shadow-xl">
                Start Learning Free
                <ArrowRight size={20} />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg border-2 border-gray-200 hover:border-gray-900 transition-all">
                <Play size={20} />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8">
              <div>
                <div className="text-gray-900 mb-1">4.9/5</div>
                <div className="text-sm text-gray-600">12,000+ Reviews</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <div className="text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Expert Lessons</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <div className="text-gray-900 mb-1">24/7</div>
                <div className="text-sm text-gray-600">AI Coach Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1654741522302-5e070439774c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGdhbWUlMjBib2FyZHxlbnwxfHx8fDE3NjU0MjczODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chess board game"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white">✓</span>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Interactive Learning</div>
                    <div className="text-sm text-gray-600">Learn by playing real games</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <div className="hidden lg:block absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl transform rotate-12 opacity-20" />
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-xl transform -rotate-12 opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
