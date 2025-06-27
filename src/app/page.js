export default function HomePage() {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">🚀 AI Prompt SaaS</h1>
          <p className="text-xl text-gray-600 mb-12">Test version ready!</p>
          
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">API Ready</h3>
            <p className="text-gray-600 mb-4">ChatGPT can test the endpoint</p>
            <code className="bg-gray-100 p-3 rounded text-sm block">
              POST /api/validate-prompt
            </code>
            <p className="text-sm text-gray-500 mt-4">
              Test code: TEST123
            </p>
          </div>
        </div>
      </div>
    );
  }
