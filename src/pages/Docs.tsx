
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Search, Book, FileText, Code, Users, Settings, ChevronRight } from 'lucide-react';

interface DocSection {
  id: string;
  title: string;
  icon: any;
  description: string;
  articles: DocArticle[];
}

interface DocArticle {
  id: string;
  title: string;
  description: string;
  lastUpdated: string;
  author: string;
  readTime: string;
}

const Docs = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // Test documentation data
  const docSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Book,
      description: 'Welcome to The Trove! Start your journey here.',
      articles: [
        {
          id: '1',
          title: 'Welcome to The Trove',
          description: 'An introduction to our community and mission',
          lastUpdated: '2024-06-15',
          author: 'The Trove Team',
          readTime: '5 min'
        },
        {
          id: '2', 
          title: 'Member Onboarding Guide',
          description: 'Step-by-step guide for new members',
          lastUpdated: '2024-06-10',
          author: 'Sarah Chen',
          readTime: '10 min'
        },
        {
          id: '3',
          title: 'Division Overview',
          description: 'Understanding the four divisions of The Trove',
          lastUpdated: '2024-06-08',
          author: 'Alex Rivera',
          readTime: '7 min'
        }
      ]
    },
    {
      id: 'tech-docs',
      title: 'Tech Documentation',
      icon: Code,
      description: 'Technical guides, APIs, and development resources.',
      articles: [
        {
          id: '4',
          title: 'Development Environment Setup',
          description: 'Setting up your local development environment',
          lastUpdated: '2024-06-12',
          author: 'Alex Rivera',
          readTime: '15 min'
        },
        {
          id: '5',
          title: 'API Reference Guide',
          description: 'Complete API documentation and examples',
          lastUpdated: '2024-06-14',
          author: 'Tech Team',
          readTime: '20 min'
        },
        {
          id: '6',
          title: 'Contributing to Open Source Projects',
          description: 'Guidelines for contributing to Trove projects',
          lastUpdated: '2024-06-11',
          author: 'Alex Rivera',
          readTime: '12 min'
        }
      ]
    },
    {
      id: 'community',
      title: 'Community Guidelines',
      icon: Users,
      description: 'Community standards, events, and collaboration.',
      articles: [
        {
          id: '7',
          title: 'Code of Conduct',
          description: 'Our community standards and expectations',
          lastUpdated: '2024-06-01',
          author: 'Community Team',
          readTime: '8 min'
        },
        {
          id: '8',
          title: 'Event Planning Guidelines',
          description: 'How to organize and host community events',
          lastUpdated: '2024-06-09',
          author: 'Community Team',
          readTime: '12 min'
        }
      ]
    },
    {
      id: 'resources',
      title: 'Resources & Tools',
      icon: Settings,
      description: 'Tools, templates, and helpful resources.',
      articles: [
        {
          id: '9',
          title: 'Design System Guidelines',
          description: 'Using The Trove design system and components',
          lastUpdated: '2024-06-13',
          author: 'Creative Team',
          readTime: '18 min'
        },
        {
          id: '10',
          title: 'Project Management Tools',
          description: 'Recommended tools and workflows for projects',
          lastUpdated: '2024-06-07',
          author: 'Projects Team',
          readTime: '10 min'
        }
      ]
    }
  ];

  const filteredSections = docSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <ProtectedRoute requireMember={true}>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Member Documentation
            </h1>
            <p className="text-gray-600">
              Everything you need to know about being a Trove member
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search documentation..."
              />
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSections.map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.id} className="bg-white rounded-xl shadow-sm border">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-blue-50 rounded-lg mr-3">
                        <SectionIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      {section.articles.map((article) => (
                        <div
                          key={article.id}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                          onClick={() => setSelectedSection(article.id)}
                        >
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <FileText className="w-4 h-4 text-gray-400 mr-2" />
                              <h3 className="text-sm font-semibold text-gray-900">{article.title}</h3>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">{article.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>By {article.author}</span>
                              <span>Updated {article.lastUpdated}</span>
                              <span>{article.readTime} read</span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="#"
                className="flex items-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-2 bg-green-50 rounded-lg mr-3">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Join Chat</h3>
                  <p className="text-xs text-gray-600">Connect with your division</p>
                </div>
              </a>
              
              <a
                href="#"
                className="flex items-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-2 bg-blue-50 rounded-lg mr-3">
                  <Code className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Browse Projects</h3>
                  <p className="text-xs text-gray-600">Explore active projects</p>
                </div>
              </a>
              
              <a
                href="#"
                className="flex items-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-2 bg-purple-50 rounded-lg mr-3">
                  <Settings className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Account Settings</h3>
                  <p className="text-xs text-gray-600">Manage your profile</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Docs;
