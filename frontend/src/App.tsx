import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { AnalysisResults } from './components/AnalysisResults';
import { InfoSection } from './components/InfoSection';
import { HomePage } from './components/HomePage';
import { Shield, ArrowRight } from 'lucide-react';

interface AnalysisResult {
  isDeepfake: boolean;
  confidence: number;
  message: string;
}

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [showUpload, setShowUpload] = useState(false);
  const [error, setError] = useState<string>('');

  const handleFileSelect = async (file: File) => {
    setSelectedFile(file);
    setIsAnalyzing(true);
    setError('');
    setAnalysisResult(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:8000/", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
      
      const responseText = await response.text();
      console.log("Raw response:", responseText);

      try {
        const data = JSON.parse(responseText);
        console.log("Parsed data:", data);

        setAnalysisResult({
          isDeepfake: !data.isReal,
          confidence: 0.95,
          message: data.isReal ? 
            "This image appears to be real" : 
            "This image appears to be a deepfake"
        });
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        setError('Invalid response format from server');
      }
    } catch (networkError: any) {
      if (networkError.message.includes('CORS')) {
        setError('CORS error: Please make sure the API server has CORS enabled for http://localhost:5173');
        console.error("Please add CORS headers to your FastAPI server as shown in the documentation");
      } else {
        console.error("Network error:", networkError);
        setError(`Failed to analyze image: ${networkError.message || 'Network error occurred'}`);
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer" onClick={() => setShowUpload(false)}>
              <Shield className="w-8 h-8 text-green-600 mr-3 animate-pulse" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
                Deepfake Detective
              </h1>
            </div>
            {!showUpload && (
              <button
                onClick={() => setShowUpload(true)}
                className="flex items-center px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full 
                          hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Detection
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!showUpload ? (
          <HomePage onGetStarted={() => setShowUpload(true)} />
        ) : (
          <div className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Upload Your Image for Deepfake Analysis
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our advanced AI algorithms will analyze your image for potential manipulation.
                Get instant results with detailed confidence scores.
              </p>
            </div>

            <FileUpload onFileSelect={handleFileSelect} />
            
            {selectedFile && !isAnalyzing && !analysisResult && !error && (
              <div className="mt-8 text-center">
                <p className="text-gray-600">Selected file: {selectedFile.name}</p>
              </div>
            )}
            
            {isAnalyzing && (
              <div className="w-full max-w-2xl mx-auto mt-8 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                <p className="mt-4 text-gray-600">Analyzing your image...</p>
              </div>
            )}

            {error && (
              <div className="w-full max-w-2xl mx-auto mt-8 p-4 bg-red-50 text-red-700 rounded-lg text-center">
                {error}
              </div>
            )}
            
            {analysisResult && (
              <AnalysisResults
                confidence={analysisResult.confidence}
                isDeepfake={analysisResult.isDeepfake}
                message={analysisResult.message}
              />
            )}

            <InfoSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © 2024 Deepfake Detective. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;