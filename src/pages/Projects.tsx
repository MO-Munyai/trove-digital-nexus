
import { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'tech-tools', label: 'Tech Tools' },
    { id: 'remakes', label: 'Remakes' },
    { id: 'open-source', label: 'Open Source' },
    { id: 'experimental', label: 'Experimental' },
  ];

  const sortOptions = [
    { id: 'latest', label: 'Latest' },
    { id: 'popular', label: 'Most Popular' },
    { id: 'featured', label: 'Featured' },
  ];

  // Mock project data
  const projects = [
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
    },
    {
      id: '3',
      title: 'Discord Clone Rebuild',
      description: 'A complete remake of Discord with enhanced privacy features and custom themes.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      tags: ['Vue.js', 'Go', 'WebRTC', 'Redis'],
      status: 'active' as const,
      stars: 156,
      contributors: 8,
      github: 'https://github.com/thetrove/discord-rebuild',
      demo: 'https://chat.thetrove.dev'
    },
    {
      id: '4',
      title: 'ML Model Playground',
      description: 'Interactive playground for testing and visualizing machine learning models in the browser.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
      tags: ['Python', 'TensorFlow.js', 'React', 'D3.js'],
      status: 'active' as const,
      stars: 203,
      contributors: 15,
      github: 'https://github.com/thetrove/ml-playground',
      demo: 'https://ml.thetrove.dev'
    },
    {
      id: '5',
      title: 'Notion Alternative',
      description: 'A privacy-focused alternative to Notion with advanced collaboration features.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      tags: ['Next.js', 'Supabase', 'TailwindCSS'],
      status: 'wip' as const,
      stars: 78,
      contributors: 4
    },
    {
      id: '6',
      title: 'Legacy Banking System',
      description: 'An archived project showcasing a complete banking system rebuild with modern architecture.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      tags: ['Java', 'Spring Boot', 'PostgreSQL'],
      status: 'archived' as const,
      stars: 67,
      contributors: 9
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || project.tags.some(tag => 
      tag.toLowerCase().includes(selectedFilter.replace('-', ' '))
    );
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of innovative projects, from cutting-edge tools to creative remakes
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedFilter === filter.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Sort and View */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
