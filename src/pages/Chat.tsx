
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Send, Hash, Users, Paperclip, Smile } from 'lucide-react';

interface Message {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: string;
  division: string;
}

interface Channel {
  id: string;
  name: string;
  division: string;
  description: string;
  memberCount: number;
}

const Chat = () => {
  const { user } = useAuth();
  const [activeChannel, setActiveChannel] = useState('tech-general');
  const [newMessage, setNewMessage] = useState('');

  // Test data for channels
  const channels: Channel[] = [
    { id: 'tech-general', name: 'general', division: 'tech', description: 'General tech discussions', memberCount: 45 },
    { id: 'tech-projects', name: 'projects', division: 'tech', description: 'Current tech projects', memberCount: 32 },
    { id: 'creative-general', name: 'general', division: 'creative', description: 'Creative discussions', memberCount: 28 },
    { id: 'creative-showcase', name: 'showcase', division: 'creative', description: 'Share your work', memberCount: 41 },
    { id: 'community-events', name: 'events', division: 'community', description: 'Upcoming events', memberCount: 67 },
    { id: 'projects-planning', name: 'planning', division: 'projects', description: 'Project planning', memberCount: 23 }
  ];

  // Test data for messages
  const messages: Message[] = [
    {
      id: '1',
      userId: '1',
      userName: 'Alex Rivera',
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      content: 'Hey everyone! Just pushed the latest updates to the React component library. Check it out!',
      timestamp: '10:30 AM',
      division: 'tech'
    },
    {
      id: '2',
      userId: '2',
      userName: 'Sarah Chen',
      userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face',
      content: 'Awesome work! The new button variants look great. Love the hover animations.',
      timestamp: '10:32 AM',
      division: 'tech'
    },
    {
      id: '3',
      userId: '1',
      userName: 'Alex Rivera',
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      content: 'Thanks! Next up is the data visualization components. Any requests?',
      timestamp: '10:35 AM',
      division: 'tech'
    }
  ];

  const divisionColors = {
    tech: 'text-blue-600 bg-blue-50',
    creative: 'text-orange-600 bg-orange-50',
    community: 'text-green-600 bg-green-50',
    projects: 'text-cyan-600 bg-cyan-50'
  };

  const userDivisionChannels = channels.filter(channel => 
    channel.division === user?.division || channel.division === 'community'
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In real app, this would send to backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <ProtectedRoute requireMember={true}>
      <div className="h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Member Chat</h2>
            <p className="text-sm text-gray-500">Division: {user?.division}</p>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="p-3">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Your Channels
              </h3>
              {userDivisionChannels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel.id)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-left hover:bg-gray-100 transition-colors duration-200 mb-1 ${
                    activeChannel === channel.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                  }`}
                >
                  <Hash className="w-4 h-4 mr-2" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <span className="text-sm font-medium truncate">{channel.name}</span>
                      <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${divisionColors[channel.division as keyof typeof divisionColors]}`}>
                        {channel.division}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{channel.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <img
                src={user?.avatar}
                alt={user?.fullName}
                className="w-8 h-8 rounded-full mr-3"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user?.fullName}</p>
                <p className="text-xs text-gray-500">{user?.userType}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Hash className="w-5 h-5 text-gray-500 mr-2" />
                <h1 className="text-lg font-semibold text-gray-900">
                  {channels.find(c => c.id === activeChannel)?.name}
                </h1>
                <span className="ml-3 text-sm text-gray-500">
                  {channels.find(c => c.id === activeChannel)?.description}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-1" />
                {channels.find(c => c.id === activeChannel)?.memberCount} members
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex items-start space-x-3">
                <img
                  src={message.userAvatar}
                  alt={message.userName}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-semibold text-gray-900">{message.userName}</span>
                    <span className="text-xs text-gray-500">{message.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-700">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-end space-x-3">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={`Message #${channels.find(c => c.id === activeChannel)?.name}`}
                    className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <Paperclip className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <Smile className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Chat;
