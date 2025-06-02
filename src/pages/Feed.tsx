
import { useState } from 'react';
import { Heart, MessageCircle, Share2, Pin, TrendingUp, Clock, Users } from 'lucide-react';

const Feed = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Posts' },
    { id: 'announcements', label: 'Announcements' },
    { id: 'projects', label: 'Projects' },
    { id: 'discussions', label: 'Discussions' },
    { id: 'achievements', label: 'Achievements' }
  ];

  // Mock feed data
  const posts = [
    {
      id: '1',
      type: 'announcement',
      author: {
        name: 'The Trove Team',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        role: 'Admin'
      },
      timestamp: '2 hours ago',
      content: '🎉 We\'re excited to announce our Annual Convention 2024! Three days of amazing talks, workshops, and networking. Early bird tickets are now available.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop',
      likes: 45,
      comments: 12,
      pinned: true
    },
    {
      id: '2',
      type: 'project',
      author: {
        name: 'Alex Rivera',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        role: 'Lead Developer'
      },
      timestamp: '4 hours ago',
      content: 'Just pushed a major update to the OpenSource Task Manager! 🚀 New features include AI-powered insights, better collaboration tools, and improved performance. Check it out and let me know what you think!',
      likes: 23,
      comments: 8,
      pinned: false
    },
    {
      id: '3',
      type: 'discussion',
      author: {
        name: 'Maya Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=40&h=40&fit=crop&crop=face',
        role: 'Creative Director'
      },
      timestamp: '6 hours ago',
      content: 'What are your thoughts on the future of no-code tools? I\'ve been experimenting with some new platforms and I\'m curious about the community\'s perspective. Are they empowering or limiting creativity? 🤔',
      likes: 18,
      comments: 15,
      pinned: false
    },
    {
      id: '4',
      type: 'achievement',
      author: {
        name: 'Jordan Kim',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        role: 'Community Manager'
      },
      timestamp: '8 hours ago',
      content: '🏆 Milestone achieved! We\'ve successfully organized 50+ community events this year. Thank you to everyone who participated and helped make our community stronger. Here\'s to the next 50! 🎉',
      likes: 67,
      comments: 24,
      pinned: false
    },
    {
      id: '5',
      type: 'project',
      author: {
        name: 'Sam Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        role: 'DevOps Engineer'
      },
      timestamp: '12 hours ago',
      content: 'Working on a new Docker automation tool that could save teams hours of deployment time. Still in early stages but the results are promising! Anyone interested in beta testing?',
      likes: 31,
      comments: 11,
      pinned: false
    }
  ];

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'announcement':
        return <Pin className="w-4 h-4" />;
      case 'project':
        return <TrendingUp className="w-4 h-4" />;
      case 'discussion':
        return <MessageCircle className="w-4 h-4" />;
      case 'achievement':
        return <Users className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case 'announcement':
        return 'text-blue-600 bg-blue-50';
      case 'project':
        return 'text-green-600 bg-green-50';
      case 'discussion':
        return 'text-purple-600 bg-purple-50';
      case 'achievement':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const filteredPosts = posts.filter(post => 
    activeFilter === 'all' || post.type === activeFilter.slice(0, -1)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Community Feed
          </h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest from The Trove community
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className={`bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200 ${
                post.pinned ? 'ring-2 ring-blue-200' : ''
              }`}
            >
              {/* Post Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                      {post.pinned && (
                        <Pin className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{post.author.role}</span>
                      <span>•</span>
                      <span>{post.timestamp}</span>
                    </div>
                  </div>
                </div>
                
                <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${getPostTypeColor(post.type)}`}>
                  {getPostTypeIcon(post.type)}
                  <span className="ml-1 capitalize">{post.type}</span>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <p className="text-gray-800 leading-relaxed">{post.content}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post image"
                    className="mt-4 w-full rounded-lg object-cover max-h-80"
                  />
                )}
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition-colors duration-200">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors duration-200">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
            Load More Posts
          </button>
        </div>

        {/* Join CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Join the Conversation
          </h2>
          <p className="text-gray-600 mb-6">
            Want to share updates, start discussions, or connect with the community? 
            Become a member of The Trove today.
          </p>
          <a
            href="/join"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Join The Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feed;
