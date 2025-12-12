import React from 'react';
import { Check, Sparkles } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: 'Perfect for beginners getting started',
      features: [
        'Access to basic lessons',
        '10 puzzles per day',
        'Play vs AI',
        'Basic game analysis',
        'Community forum access'
      ],
      cta: 'Get Started',
      popular: false,
      buttonClass: 'bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-900'
    },
    {
      name: 'Premium',
      price: '19',
      description: 'Most popular for serious learners',
      features: [
        'All Free features',
        'Unlimited puzzles',
        'Full course library access',
        'Advanced AI analysis',
        'Live tournament entry',
        'Personal progress tracking',
        'Opening database',
        'Priority support'
      ],
      cta: 'Start Free Trial',
      popular: true,
      buttonClass: 'bg-gray-900 text-white hover:bg-gray-800'
    },
    {
      name: 'Elite',
      price: '49',
      description: 'For aspiring professionals',
      features: [
        'All Premium features',
        '1-on-1 coaching sessions',
        'Custom training plans',
        'Grandmaster video calls',
        'Tournament preparation',
        'Game review sessions',
        'Exclusive masterclasses',
        'Career guidance'
      ],
      cta: 'Contact Sales',
      popular: false,
      buttonClass: 'bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-900'
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white text-gray-900 rounded-full text-sm mb-4 shadow-sm">
            Pricing
          </div>
          <h2 className="text-gray-900 mb-6">
            Choose Your Learning Path
          </h2>
          <p className="text-gray-600">
            Start free and upgrade as you progress. All plans include a 14-day money-back guarantee.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? 'ring-4 ring-gray-900 shadow-2xl scale-105'
                  : 'border-2 border-gray-100 shadow-lg'
              } transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white rounded-full text-sm">
                    <Sparkles size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-lg transition-all ${plan.buttonClass}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include access to our community and basic features
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <span>✓ 14-day money-back guarantee</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Secure payment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
