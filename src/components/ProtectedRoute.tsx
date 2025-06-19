
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Lock, Crown } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  requireMember?: boolean;
  fallbackMessage?: string;
}

const ProtectedRoute = ({ 
  children, 
  requireMember = false,
  fallbackMessage = "You need to be logged in to access this page."
}: ProtectedRouteProps) => {
  const { isAuthenticated, isMember } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Authentication Required
            </h2>
            <p className="text-gray-600 mb-6">
              {fallbackMessage}
            </p>
            <Link
              to="/login"
              className="inline-block bg-gradient-to-r from-blue-800 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-900 hover:to-cyan-700 transition-all duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (requireMember && !isMember) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Member Access Required
            </h2>
            <p className="text-gray-600 mb-6">
              This content is exclusive to Trove members. Upgrade your account to access member-only features.
            </p>
            <Link
              to="/join"
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-200"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
