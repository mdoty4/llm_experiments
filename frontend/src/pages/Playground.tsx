import React, { useState } from 'react';
import api from '../services/api';

const Playground: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTestApi = async () => {
    try {
      setLoading(true);
      const res = await api.get('/playground');
      setResponse(res.data);
    } catch (error) {
      setResponse({ error: 'API call failed' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Playground</h2>
            <p className="mt-2 text-sm text-gray-600">
              This is a placeholder for future GLM integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* API Test Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">API Test</h3>
              <p className="text-sm text-gray-500">
                Test the backend API connection
              </p>
              
              <button
                onClick={handleTestApi}
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
              >
                {loading ? 'Testing...' : 'Test API Connection'}
              </button>

              {response && (
                <div className="mt-4 p-4 bg-gray-50 rounded-md">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Response:</h4>
                  <pre className="text-xs text-gray-600 overflow-auto">
                    {JSON.stringify(response, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            {/* Future Integration Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Future GLM Integration</h3>
              <p className="text-sm text-gray-500">
                This section will be used for future GLM (General Language Model) integration
              </p>
              
              <div className="mt-6 p-4 bg-indigo-50 rounded-md">
                <h4 className="text-sm font-medium text-indigo-900 mb-2">Planned Features:</h4>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li>• Chat interface for GLM conversations</li>
                  <li>• Document analysis and summarization</li>
                  <li>• Code generation and explanation</li>
                  <li>• Content creation assistance</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-yellow-50 rounded-md">
                <h4 className="text-sm font-medium text-yellow-900 mb-2">Note:</h4>
                <p className="text-sm text-yellow-700">
                  This is currently a placeholder endpoint. The actual GLM integration will be implemented in the future.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">API Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-900">Endpoint:</p>
                <p className="text-gray-600">GET /api/playground</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Status:</p>
                <p className="text-green-600">Active</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="/profile"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back to Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;