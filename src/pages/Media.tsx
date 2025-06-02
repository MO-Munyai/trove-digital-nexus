
import { useState } from 'react';
import { Play, FileText, Headphones, TrendingUp, Clock, Eye } from 'lucide-react';
import MediaCard from '../components/MediaCard';

const Media = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Media', icon: TrendingUp },
    { id: 'videos', label: 'Videos', icon: Play },
    { id: 'podcasts', label: 'Podcasts', icon: Headphones },
    { id: 'articles', label: 'Articles', icon: FileText },
  ];

  // Mock media data
  const mediaItems = [
    {
      id: '1',
      title: 'Building Scalable React Applications',
      type: 'video' as const,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      duration: '24:35',
      publishedAt: 'Dec 15, 2024',
      author: 'Alex Rivera',
      views: 15200
    },
    {
      id: '2',
      title: 'The Future of Open Source Development',
      type: 'podcast' as const,
      thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=500&h=300&fit=crop',
      duration: '45:12',
      publishedAt: 'Dec 12, 2024',
      author: 'Maya Chen',
      views: 8900
    },
    {
      id: '3',
      title: 'Designing User-Centric Interfaces',
      type: 'article' as const,
      thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop',
      publishedAt: 'Dec 10, 2024',
      author: 'Zara Ahmed',
      views: 6300
    },
    {
      id: '4',
      title: 'Tech Convention 2024 Highlights',
      type: 'video' as const,
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop',
      duration: '18:24',
      publishedAt: 'Dec 8, 2024',
      author: 'Emma Thompson',
      views: 22100
    },
    {
      id: '5',
      title: 'Community Building in Tech',
      type: 'podcast' as const,
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      duration: '38:45',
      publishedAt: 'Dec 5, 2024',
      author: 'Jordan Kim',
      views: 11500
    },
    {
      id: '6',
      title: 'DevOps Best Practices for Startups',
      type: 'article' as const,
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
      publishedAt: 'Dec 3, 2024',
      author: 'Sam Rodriguez',
      views: 4800
    },
    {
      id: '7',
      title: 'AI and Machine Learning Trends',
      type: 'video' as const,
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop',
      duration: '31:18',
      publishedAt: 'Nov 28, 2024',
      author: 'David Park',
      views: 18700
    },
    {
      id: '8',
      title: 'Startup Stories: From Idea to MVP',
      type: 'podcast' as const,
      thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop',
      duration: '52:30',
      publishedAt: 'Nov 25, 2024',
      author: 'Luna Patel',
      views: 7200
    },
    {
      id: '9',
      title: 'The Art of Code Review',
      type: 'article' as const,
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      publishedAt: 'Nov 22, 2024',
      author: 'Marcus Wilson',
      views: 5900
    }
  ];

  const filteredMedia = mediaItems.filter(item => 
    activeTab === 'all' || item.type === activeTab.slice(0, -1)
  );

  const featuredItem = mediaItems[0];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Media Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest content: tutorials, podcasts, articles, and event highlights
          </p>
        </div>

        {/* Featured Content Slider */}
        <div className="bg-gradient-to-r from-blue-900 to-cyan-800 rounded-2xl overflow-hidden mb-12">
          <div className="relative">
            <img
              src={featuredItem.thumbnail}
              alt={featuredItem.title}
              className="w-full h-80 object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl px-6">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span className="font-medium">Featured Content</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">{featuredItem.title}</h2>
                <p className="text-xl text-blue-100 mb-6">
                  Our latest and most popular content piece
                </p>
                <div className="flex items-center justify-center space-x-6 text-blue-200 mb-6">
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    {featuredItem.views?.toLocaleString()} views
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    {featuredItem.duration || 'Quick read'}
                  </div>
                </div>
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border mb-8">
          <div className="flex flex-wrap">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <TabIcon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Latest Uploads Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latest Uploads</h2>
            <div className="text-sm text-gray-500">
              {filteredMedia.length} {filteredMedia.length === 1 ? 'item' : 'items'}
            </div>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item) => (
            <MediaCard key={item.id} {...item} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
            Load More Content
          </button>
        </div>

        {/* Upload CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 mt-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
          <p className="text-xl mb-6 text-orange-100">
            Have content to share with The Trove community? Upload your videos, articles, or podcast episodes
          </p>
          <a
            href="/submit"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Upload Content
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
