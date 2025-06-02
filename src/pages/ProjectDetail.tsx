
import { useParams, Link } from 'react-router-dom';
import { 
  Github, 
  ExternalLink, 
  Star, 
  Users, 
  Calendar,
  ArrowLeft,
  Heart,
  MessageCircle,
  Share2,
  Play,
  Download
} from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in real app, this would be fetched based on ID
  const project = {
    id: '1',
    title: 'OpenSource Task Manager',
    description: 'A collaborative task management tool built by our community, featuring real-time collaboration and AI-powered insights.',
    longDescription: `This comprehensive task management platform was born from the need for a truly collaborative and intelligent project management solution. Built entirely by The Trove community, it combines the best practices of modern web development with innovative AI features.

The application features real-time collaboration, allowing team members to work together seamlessly across different time zones. Our AI-powered insights help teams identify bottlenecks, predict project timelines, and optimize workflow efficiency.

Key features include customizable kanban boards, advanced filtering and search, time tracking, team analytics, automated reporting, and integration with popular development tools.`,
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
    status: 'active' as const,
    stars: 247,
    contributors: 12,
    github: 'https://github.com/thetrove/task-manager',
    demo: 'https://task-manager.thetrove.dev',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'AI/ML', 'TypeScript'],
    createdAt: 'March 2024',
    lastUpdated: '2 days ago',
    license: 'MIT',
    contributors_list: [
      {
        id: '1',
        name: 'Alex Rivera',
        role: 'Lead Developer',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        contributions: 45
      },
      {
        id: '2',
        name: 'Maya Chen',
        role: 'UI/UX Designer',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=40&h=40&fit=crop&crop=face',
        contributions: 23
      },
      {
        id: '3',
        name: 'Sam Rodriguez',
        role: 'DevOps Engineer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        contributions: 18
      },
      {
        id: '4',
        name: 'Jordan Kim',
        role: 'Backend Developer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        contributions: 12
      }
    ],
    tools: [
      { name: 'React 18', description: 'Modern frontend framework' },
      { name: 'Node.js', description: 'Server-side JavaScript runtime' },
      { name: 'MongoDB', description: 'NoSQL database' },
      { name: 'Socket.io', description: 'Real-time communication' },
      { name: 'OpenAI API', description: 'AI-powered insights' },
      { name: 'Docker', description: 'Containerization' }
    ]
  };

  const statusColors = {
    active: 'bg-green-100 text-green-800',
    archived: 'bg-gray-100 text-gray-800',
    wip: 'bg-yellow-100 text-yellow-800'
  };

  const statusLabels = {
    active: 'Active Development',
    archived: 'Archived',
    wip: 'Work in Progress'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
                    {statusLabels[project.status]}
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                <p className="text-xl text-gray-200">{project.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  className="flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              )}
              <button className="flex items-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                <Heart className="w-5 h-5 mr-2" />
                Like
              </button>
              <button className="flex items-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Project</h2>
              <div className="prose prose-gray max-w-none">
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Tools Used */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools & Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.tools.map((tool, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Feedback */}
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Community Feedback</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex space-x-4">
                    <img
                      src={`https://images.unsplash.com/photo-150000000${i}?w=40&h=40&fit=crop&crop=face`}
                      alt="User"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="font-semibold text-gray-900 mr-2">User {i}</span>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-gray-700">
                        Great project! The AI insights feature is particularly impressive. 
                        Would love to contribute to the mobile app version.
                      </p>
                      <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                        <button className="hover:text-gray-700">Reply</button>
                        <button className="hover:text-gray-700">Like</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 flex items-center text-blue-600 hover:text-blue-700 font-medium">
                <MessageCircle className="w-4 h-4 mr-2" />
                Add Comment
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Stats */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Project Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">Stars</span>
                  </div>
                  <span className="font-semibold">{project.stars}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="text-gray-700">Contributors</span>
                  </div>
                  <span className="font-semibold">{project.contributors}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Created</span>
                  </div>
                  <span className="font-semibold">{project.createdAt}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Last Updated</span>
                  <span className="font-semibold">{project.lastUpdated}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">License</span>
                  <span className="font-semibold">{project.license}</span>
                </div>
              </div>
            </div>

            {/* Contributors */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contributors</h3>
              <div className="space-y-3">
                {project.contributors_list.map((contributor) => (
                  <div key={contributor.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={contributor.avatar}
                        alt={contributor.name}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{contributor.name}</div>
                        <div className="text-xs text-gray-500">{contributor.role}</div>
                      </div>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {contributor.contributions}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/team"
                className="block mt-4 text-center text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All Contributors
              </Link>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Get Involved */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Get Involved</h3>
              <p className="text-gray-700 text-sm mb-4">
                Interested in contributing to this project? Join our community and start collaborating!
              </p>
              <Link
                to="/join"
                className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Join The Trove
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
