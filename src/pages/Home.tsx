
import { Link } from 'react-router-dom';
import { Code, Video, Users, Rocket, ArrowRight, Star, Github, Play } from 'lucide-react';

const Home = () => {
  const branches = [
    {
      icon: Code,
      title: 'Tech',
      description: 'Cutting-edge tools and open source innovations',
      color: 'from-blue-800 to-blue-600',
      link: '/projects'
    },
    {
      icon: Rocket,
      title: 'Projects',
      description: 'Collaborative builds and experimental ventures',
      color: 'from-cyan-500 to-teal-500',
      link: '/projects'
    },
    {
      icon: Video,
      title: 'Media',
      description: 'Content creation and digital storytelling',
      color: 'from-orange-500 to-red-500',
      link: '/media'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Events, networking, and collective growth',
      color: 'from-emerald-500 to-green-500',
      link: '/team'
    },
  ];

  const stats = [
    { label: 'Active Projects', value: '24' },
    { label: 'Community Members', value: '150+' },
    { label: 'Media Uploads', value: '300+' },
    { label: 'Events Hosted', value: '12' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              The Trove
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Where coders, creators, and community leaders unite to build the future through 
              <span className="text-cyan-400 font-semibold"> collaboration</span> and 
              <span className="text-orange-400 font-semibold"> innovation</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/join"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Join the Movement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Branches */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Four Pillars of Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the diverse branches that make The Trove a powerhouse of creativity and technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {branches.map((branch, index) => (
              <Link
                key={index}
                to={branch.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${branch.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <branch.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{branch.title}</h3>
                <p className="text-gray-600 mb-4">{branch.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Explore <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest from The Trove
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with our newest projects, content, and community highlights
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Project */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Featured Project</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                OpenSource Task Manager
              </h3>
              <p className="text-gray-700 mb-6">
                A collaborative task management tool built by our community, featuring real-time collaboration and AI-powered insights.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Link to="/projects" className="flex items-center text-blue-700 font-semibold hover:text-blue-800">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Link>
                  <Link to="/projects" className="flex items-center text-blue-700 font-semibold hover:text-blue-800">
                    <Play className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* Latest Media */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Video className="w-5 h-5 text-orange-500 mr-2" />
                <span className="text-sm font-semibold text-orange-700 uppercase tracking-wide">Latest Media</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tech Convention 2024 Highlights
              </h3>
              <p className="text-gray-700 mb-6">
                Watch the best moments from our annual tech convention, featuring talks from industry leaders.
              </p>
              <Link to="/media" className="inline-flex items-center text-orange-700 font-semibold hover:text-orange-800">
                Watch Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're a developer, creator, or community leader, there's a place for you in The Trove.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/team"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
