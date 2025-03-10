import React from 'react';
import { Shield, Upload, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onGetStarted: () => void;
}

export function HomePage({ onGetStarted }: HomePageProps) {
  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="relative inline-block mb-8">
          <Shield className="w-24 h-24 text-green-600 animate-pulse" />
          <div className="absolute -right-4 -top-4 bg-blue-500 rounded-full p-2">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
          Detect Deepfakes with Confidence
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Our advanced AI technology helps you identify manipulated image with industry-leading accuracy.
        </p>
        <button
          onClick={onGetStarted}
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full 
                    hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105 
                    shadow-lg flex items-center mx-auto text-lg font-semibold"
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Upload className="w-12 h-12 text-green-500" />,
            title: "Easy Upload",
            description: "Simple drag-and-drop interface for quick video analysis"
          },
          {
            icon: <Shield className="w-12 h-12 text-blue-500" />,
            title: "Advanced Analysis",
            description: "State-of-the-art AI algorithms for accurate detection"
          },
          {
            icon: <AlertTriangle className="w-12 h-12 text-yellow-500" />,
            title: "Instant Results",
            description: "Get detailed analysis reports within minutes"
          }
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl 
                      transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Trust Section */}
      <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Trusted by Professionals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our deepfake detection technology is used by leading media organizations, 
            fact-checkers, and security professionals worldwide.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { number: "99%", text: "Detection Accuracy" },
            { number: "1M+", text: "Videos Analyzed" },
            { number: "24/7", text: "Support Available" },
            { number: "100+", text: "Countries Served" }
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Detecting?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Upload your first image now and get instant analysis with our advanced AI technology.
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-3 bg-white text-green-600 rounded-full 
                      hover:bg-green-50 transition-all transform hover:scale-105 
                      shadow-lg flex items-center mx-auto text-lg font-semibold"
          >
            Start Free Analysis
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}