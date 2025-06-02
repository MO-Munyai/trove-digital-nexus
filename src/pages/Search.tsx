
import { useState } from 'react';
import { Search as SearchIcon, Filter, User, Code, Video } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import MediaCard from '../components/MediaCard';
import UserCard from '../components/UserCard';

const Search = () => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  const filters = [
    { id: 'all', label: 'All Results', icon: SearchIcon },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'people', label: 'People', icon: User },
    { id: 'media', label: 'Media', icon: Video }
  ];

  const sortOptions = [
    { id: 'relevance', label: 'Relevance' },
    { id: 'recent', label: 'Most Recent' },
    { id: 'popular', label: 'Most Popular' }
  ];

  // Mock search results
  const searchResults = {
    projects: [
      {
        id: '1',
        title: 'OpenSource Task Manager',
        description: 'A collaborative task management tool built by our community, featuring real-time collaboration and AI-powered insights.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
        tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
        status: 'active' as const,
        stars: 247,
        contributors: 12,
        github: 'https://github.com/thetrove/task-manager',
        demo: 'https://task-manager.thetrove.dev'
      },
      {
        id: '2',
        title: 'Code Snippet Vault',
        description: 'A modern alternative to traditional snippet managers with advanced search and AI-powered categorization.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
        tags: ['TypeScript', 'Electron', 'SQLite'],
        status: 'wip' as const,
        stars: 89,
        contributors: 6,
        github: 'https://github.com/thetrove/snippet-vault'
      }
    ],
    people: [
      {
        id: '1',
        name: 'Alex Rivera',
        role: 'Lead Developer',
        department: 'Tech' as const,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        bio: 'Full-stack developer with expertise in React, Node.js, and cloud architecture. Passionate about building scalable solutions.',
        location: 'San Francisco, CA',
        socialLinks: {
          github: 'https://github.com/alex-rivera',
          twitter: 'https://twitter.com/alex_rivera'
        }
      },
      {
        id: '2',
        name: 'Maya Chen',
        role: 'Creative Director',
        department: 'Creative' as const,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face',
        bio: 'Visual storyteller and digital artist. Specializes in brand design, video production, and creating compelling narratives.',
        location: 'Austin, TX',
        socialLinks: {
          github: 'https://github.com/maya-chen'
        }
      }
    ],
    media: [
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
      }
    ]
  };

  const getFilteredResults = () => {
    if (activeFilter === 'all') {
      return {
        projects: searchResults.projects,
        people: searchResults.people,
        media: searchResults.media
      };
    }
    return {
      [activeFilter]: searchResults[activeFilter as keyof typeof searchResults] || []
    };
  };

  const filteredResults = getFilteredResults();
  const totalResults = Object.values(filteredResults).flat().length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Search The Trove
          </h1>
          <p className="text-xl text-gray-600">
            Find projects, people, and media across our community
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="relative mb-6">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for projects, people, or content..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const FilterIcon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeFilter === filter.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <FilterIcon className="w-4 h-4 mr-2" />
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {query ? (
              <>
                Found <span className="font-semibold">{totalResults}</span> results for "
                <span className="font-semibold">{query}</span>"
              </>
            ) : (
              'Enter a search term to find content'
            )}
          </p>
        </div>

        {/* Search Results */}
        {query && (
          <div className="space-y-12">
            {/* Projects Section */}
            {filteredResults.projects && filteredResults.projects.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <Code className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Projects ({filteredResults.projects.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResults.projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
              </section>
            )}

            {/* People Section */}
            {filteredResults.people && filteredResults.people.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <User className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    People ({filteredResults.people.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredResults.people.map((person) => (
                    <UserCard key={person.id} {...person} />
                  ))}
                </div>
              </section>
            )}

            {/* Media Section */}
            {filteredResults.media && filteredResults.media.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <Video className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Media ({filteredResults.media.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResults.media.map((item) => (
                    <MediaCard key={item.id} {...item} />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* No Results */}
        {query && totalResults === 0 && (
          <div className="text-center py-12">
            <SearchIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find anything matching "{query}". Try adjusting your search terms.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 max-w-md mx-auto">
              <h4 className="font-semibold text-gray-900 mb-2">Search Tips:</h4>
              <ul className="text-sm text-gray-700 space-y-1 text-left">
                <li>• Try different keywords or synonyms</li>
                <li>• Use broader search terms</li>
                <li>• Check your spelling</li>
                <li>• Try searching by category using the filter tabs</li>
              </ul>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!query && (
          <div className="text-center py-16">
            <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ready to explore?
            </h3>
            <p className="text-gray-600 mb-8">
              Search across our projects, team members, and media content
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg border">
                <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Projects</h4>
                <p className="text-sm text-gray-600">
                  Discover innovative tools and applications
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border">
                <User className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">People</h4>
                <p className="text-sm text-gray-600">
                  Connect with talented community members
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border">
                <Video className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Media</h4>
                <p className="text-sm text-gray-600">
                  Explore videos, articles, and podcasts
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
