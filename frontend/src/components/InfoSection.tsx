import React from 'react';
import { Info, HelpCircle, AlertTriangle } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16 space-y-8">
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Info className="w-6 h-6 mr-2 text-blue-500" />
          Understanding Deepfake Detection
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Deepfakes are synthetic media where a person's likeness is replaced with someone else's using artificial intelligence. Our detection system analyzes various aspects of the video, including facial inconsistencies, lighting patterns, and temporal coherence to identify potential manipulations.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <HelpCircle className="w-6 h-6 mr-2 text-green-500" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "How accurate is the detection?",
              a: "Our system achieves 85-95% accuracy in controlled tests, but results may vary based on video quality and manipulation techniques."
            },
            {
              q: "What video formats are supported?",
              a: "We currently support .mp4, .avi, and .mov formats with a maximum file size of 100MB."
            },
            {
              q: "How long does analysis take?",
              a: "Analysis typically takes 1-3 minutes depending on video length and complexity."
            }
          ].map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h3 className="font-medium mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <AlertTriangle className="w-6 h-6 mr-2 text-yellow-500" />
          Important Notice
        </h2>
        <p className="text-gray-600 leading-relaxed">
          While our deepfake detection system uses advanced AI algorithms, it's important to note that no detection system is perfect. Results should be used as one of multiple verification methods. False positives and negatives are possible, especially with highly sophisticated deepfakes.
        </p>
      </section>
    </div>
  );
}