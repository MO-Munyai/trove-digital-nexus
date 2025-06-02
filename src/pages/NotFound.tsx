
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-800 to-cyan-500 rounded-3xl flex items-center justify-center mb-6">
            <span className="text-white font-bold text-3xl">?</span>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Oops! Page not found
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like you've ventured into uncharted territory. This page doesn't exist in The Trove.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            What would you like to do?
          </h3>
          <div className="space-y-3">
            <Link
              to="/"
              className="flex items-center justify-center w-full bg-gradient-to-r from-blue-800 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-900 hover:to-cyan-700 transition-all duration-200 transform hover:scale-[1.02]"
            >
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
            <Link
              to="/projects"
              className="flex items-center justify-center w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
            >
              <Search className="w-5 h-5 mr-2" />
              Browse Projects
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center w-full text-blue-600 hover:text-blue-700 py-3 px-4 rounded-lg font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <p>
            If you believe this is an error, please{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">
              contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
