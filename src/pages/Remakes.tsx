
import { useState } from 'react';
import { ArrowRight, Github, ExternalLink, Star, Users, Zap, Shield, Palette } from 'lucide-react';

const Remakes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Remakes' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'development', label: 'Development' },
    { id: 'communication', label: 'Communication' },
    { id: 'design', label: 'Design' }
  ];

  const remakes = [
    {
      id: '1',
      title: 'TroveChat',
      originalApp: 'Discord',
      category: 'communication',
      description: 'A privacy-focused alternative to Discord with enhanced customization and better user control over data.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      originalImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=120&fit=crop',
      improvements: [
        'End-to-end encryption by default',
        'Custom themes and plugins',
        'Better server management tools',
        'Privacy-first approach'
      ],
      technologies: ['Vue.js', 'Go', 'WebRTC', 'Redis'],
      status: 'active',
      stars: 156,
      contributors: 8,
      github: 'https://github.com/thetrove/trovechat',
      demo: 'https://chat.thetrove.dev'
    },
    {
      id: '2',
      title: 'TaskFlow',
      originalApp: 'Notion',
      category: 'productivity',
      description: 'A lightning-fast alternative to Notion with offline-first approach and better performance.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      originalImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=120&fit=crop',
      improvements: [
        'Offline-first architecture',
        '10x faster loading times',
        'Better mobile experience',
        'Simplified but powerful interface'
      ],
      technologies: ['Next.js', 'Supabase', 'TailwindCSS', 'PWA'],
      status: 'wip',
      stars: 89,
      contributors: 6,
      github: 'https://github.com/thetrove/taskflow'
    },
    {
      id: '3',
      title: 'CodeVault',
      originalApp: 'GitHub Gist',
      category: 'development',
      description: 'Advanced snippet manager with AI categorization and better search capabilities.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      originalImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=120&fit=crop',
      improvements: [
        'AI-powered categorization',
        'Advanced search with syntax highlighting',
        'Better organization tools',
        'Collaboration features'
      ],
      technologies: ['TypeScript', 'Electron', 'SQLite', 'Monaco Editor'],
      status: 'active',
      stars: 203,
      contributors: 12,
      github: 'https://github.com/thetrove/codevault',
      demo: 'https://codevault.thetrove.dev'
    },
    {
      id: '4',
      title: 'DesignStudio',
      originalApp: 'Figma',
      category: 'design',
      description: 'Browser-based design tool with focus on performance and real-time collaboration.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop',
      originalImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=120&fit=crop',
      improvements: [
        'Better performance on lower-end devices',
        'Enhanced vector editing tools',
        'Improved collaboration features',
        'Plugin ecosystem'
      ],
      technologies: ['Canvas API', 'WebGL', 'React', 'WebAssembly'],
      status: 'wip',
      stars: 134,
      contributors: 9,
      github: 'https://github.com/thetrove/designstudio'
    }
  ];

  const filteredRemakes = remakes.filter(remake => 
    selectedCategory === 'all' || remake.category === selectedCategory
  );

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  const getStatusLabel = (status: string) => {
    return status === 'active' ? 'Production Ready' : 'In Development';
  };

  const getImprovementIcon = (improvement: string) => {
    if (improvement.toLowerCase().includes('privacy') || improvement.toLowerCase().includes('encryption')) {
      return <Shield className="w-4 h-4 text-blue-600" />;
    }
    if (improvement.toLowerCase().includes('performance') || improvement.toLowerCase().includes('faster')) {
      return <Zap className="w-4 h-4 text-yellow-600" />;
    }
    if (improvement.toLowerCase().includes('theme') || improvement.toLowerCase().includes('design')) {
      return <Palette className="w-4 h-4 text-purple-600" />;
    }
    return <Star className="w-4 h-4 text-gray-600" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Remakes Vault
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our community's innovative takes on popular software. 
            We rebuild, reimagine, and improve upon existing tools.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12 border border-blue-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why We Remake</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At The Trove, we believe that existing tools can always be improved. Whether it's adding privacy features, 
              enhancing performance, or creating better user experiences, our remakes address real pain points while 
              maintaining the core functionality that made the originals popular.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Privacy First</h3>
                <p className="text-sm text-gray-600">Enhanced privacy and data control</p>
              </div>
              <div className="p-4">
                <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Performance</h3>
                <p className="text-sm text-gray-600">Faster, more efficient implementations</p>
              </div>
              <div className="p-4">
                <Palette className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Better UX</h3>
                <p className="text-sm text-gray-600">Improved user experience and customization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 bg-white rounded-lg p-1 shadow-sm border">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Remakes Grid */}
        <div className="space-y-12">
          {filteredRemakes.map((remake) => (
            <div key={remake.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Left Side - Comparison */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">{remake.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(remake.status)}`}>
                      {getStatusLabel(remake.status)}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{remake.description}</p>
                  
                  {/* Before/After Comparison */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Visual Comparison</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <img
                          src={remake.originalImage}
                          alt={`Original ${remake.originalApp}`}
                          className="w-full h-24 object-cover rounded-lg border mb-2"
                        />
                        <p className="text-sm text-gray-600">Original: {remake.originalApp}</p>
                      </div>
                      <div className="text-center">
                        <img
                          src={remake.image}
                          alt={remake.title}
                          className="w-full h-24 object-cover rounded-lg border mb-2"
                        />
                        <p className="text-sm text-gray-600">Our Version: {remake.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {remake.stars} stars
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {remake.contributors} contributors
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {remake.github && (
                      <a
                        href={remake.github}
                        className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    )}
                    {remake.demo && (
                      <a
                        href={remake.demo}
                        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Try It Out
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Side - Improvements & Tech */}
                <div>
                  {/* Key Improvements */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      What We Improved
                    </h3>
                    <div className="space-y-3">
                      {remake.improvements.map((improvement, index) => (
                        <div key={index} className="flex items-start">
                          {getImprovementIcon(improvement)}
                          <span className="ml-3 text-gray-700">{improvement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {remake.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Get Involved */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Get Involved
                    </h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Interested in contributing to {remake.title}? We welcome developers, 
                      designers, and users to help make it even better.
                    </p>
                    <a
                      href="/join"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Join the Project
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 mt-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Have an Idea for a Remake?
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Is there a popular tool that you think could be improved? 
            Let's discuss it and potentially build it together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Propose a Project
            </a>
            <a
              href="/projects"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remakes;
