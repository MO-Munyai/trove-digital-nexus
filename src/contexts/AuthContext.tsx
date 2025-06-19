
import { createContext, useContext, useState, ReactNode } from 'react';

export type UserType = 'subscriber' | 'member' | 'admin';
export type Division = 'tech' | 'creative' | 'community' | 'projects';

export interface User {
  id: string;
  email: string;
  fullName: string;
  userType: UserType;
  division?: Division;
  avatar: string;
  joinedAt: string;
  isVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isMember: boolean;
  isSubscriber: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Test user data
const testUsers: User[] = [
  {
    id: '1',
    email: 'alex.rivera@example.com',
    fullName: 'Alex Rivera',
    userType: 'member',
    division: 'tech',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    joinedAt: '2024-01-15',
    isVerified: true
  },
  {
    id: '2',
    email: 'sarah.chen@example.com',
    fullName: 'Sarah Chen',
    userType: 'member',
    division: 'creative',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
    joinedAt: '2024-02-01',
    isVerified: true
  },
  {
    id: '3',
    email: 'subscriber@example.com',
    fullName: 'John Doe',
    userType: 'subscriber',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    joinedAt: '2024-03-01',
    isVerified: false
  }
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    const foundUser = testUsers.find(u => u.email === email);
    if (foundUser && password === 'password') {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;
  const isMember = user?.userType === 'member' || user?.userType === 'admin';
  const isSubscriber = user?.userType === 'subscriber';

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated,
      isMember,
      isSubscriber
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
