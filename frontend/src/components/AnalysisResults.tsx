import React from 'react';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

interface AnalysisResultsProps {
  isDeepfake: boolean;
  confidence: number;
  message: string;
}

export function AnalysisResults({ isDeepfake, confidence, message }: AnalysisResultsProps) {
  const confidencePercentage = Math.round(confidence * 100);
  
  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className={`p-6 rounded-lg shadow-lg ${
        isDeepfake ? 'bg-red-50' : 'bg-green-50'
      }`}>
        <div className="flex items-center justify-center mb-4">
          {isDeepfake ? (
            <AlertTriangle className="w-12 h-12 text-red-500" />
          ) : (
            <CheckCircle className="w-12 h-12 text-green-500" />
          )}
        </div>
        
        <h3 className={`text-2xl font-bold text-center mb-4 ${
          isDeepfake ? 'text-red-700' : 'text-green-700'
        }`}>
          {isDeepfake ? 'Potential Deepfake Detected' : 'No Deepfake Detected'}
        </h3>
        
        <div className="text-center mb-6">
          <p className="text-gray-600 mb-2">Confidence Score</p>
          <div className="flex items-center justify-center">
            <Shield className={`w-6 h-6 mr-2 ${
              isDeepfake ? 'text-red-500' : 'text-green-500'
            }`} />
            <span className={`text-2xl font-bold ${
              isDeepfake ? 'text-red-500' : 'text-green-500'
            }`}>
              {confidencePercentage}%
            </span>
          </div>
        </div>

        {message && (
          <div className="text-center">
            <p className="text-gray-700">{message}</p>
          </div>
        )}
        
        <div className="mt-6 p-4 bg-white/50 rounded-lg">
          <h4 className="font-semibold mb-2 text-gray-800">What does this mean?</h4>
          <p className="text-gray-600">
            {isDeepfake ? (
              "Our AI analysis suggests this image may have been artificially manipulated. While our system is highly accurate, we recommend human verification for critical decisions."
            ) : (
              "Our analysis suggests this image shows no signs of artificial manipulation. However, as technology evolves, we recommend maintaining vigilance with sensitive content."
            )}
          </p>
        </div>
      </div>
    </div>
  );
}