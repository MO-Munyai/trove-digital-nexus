
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Github, Twitter, Linkedin, Mail, Edit, Star, Code, Video } from 'lucide-react';

const Profile = () => {
  const { id } = useParams();

  // Mock user profile data - in real app, this would be fetched based on ID
  const profile = {
    id: '1',
    name: 'Alex Rivera',
    role: 'Lead Developer',
    department: 'Tech',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=300&fit=crop',
    bio: 'Passionate full-stack developer with 8+ years of experience building scalable web applications. I love working with React, Node.js, and cloud technologies. When I\'m not coding, you can find me contributing to open source projects or mentoring new developers.',
    location: 'San Francisco, CA',
    joinedDate: 'March 2023',
    pronouns: 'he/him',
    email: 'alex@thetrove.dev',
    socialLinks: {
      github: 'https://github.com/alex-rivera',
      twitter: 'https://twitter.com/alex_rivera',
      linkedin: 'https://linkedin.com/in/alex-rivera'
    },
    stats: {
      projectsContributed: 12,
      totalCommits: 847,
      contentUploaded: 8,
      communityLikes: 342
    },
    skills: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'GraphQL', 'MongoDB'],
    projects: [
      {
        id: '1',
        title: 'OpenSource Task Manager',
        role: 'Lead Developer',
        status: 'active',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop'
      },
      {
        id: '2',
        title: 'API Gateway Tool',
        role: 'Backend Developer',
        status: 'completed',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop'
      },
      {
        id: '3',
        title: 'Developer CLI Utils',
        role: 'Creator',
        status: 'active',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop'
      }
    ],
    recentContent: [
      {
        id: '1',
        title: 'Building Scalable React Applications',
        type: 'video',
        views: 15200,
        publishedAt: 'Dec 15, 2024'
      },
      {
        id: '2',
        title: 'Modern JavaScript Best Practices',
        type: 'article',
        views: 8900,
        publishedAt: 'Dec 10, 2024'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cover & Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative">
            <img
              src={profile.coverImage}
              alt="Cover"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          <div className="relative px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:space-x-6">
              <div className="relative -mt-16 md:-mt-20">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              
              <div className="flex-1 mt-4 md:mt-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                    <p className="text-lg text-gray-600">{profile.role} • {profile.department}</p>
                    <p className="text-sm text-gray-500">{profile.pronouns}</p>
                  </div>
                  
                  <div className="mt-4 md:mt-0">
                    <button className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {profile.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Joined {profile.joinedDate}
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    {profile.email}
                  </div>
                </div>
                
                <div className="mt-4 flex space-x-3">
                  {profile.socialLinks.github && (
                    <a
                      href={profile.socialLinks.github}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {profile.socialLinks.twitter && (
                    <a
                      href={profile.socialLinks.twitter}
                      className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  )}
                  {profile.socialLinks.linkedin && (
                    <a
                      href={profile.socialLinks.linkedin}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profile.projects.map((project) => (
                  <div key={project.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-3">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600">{project.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Content */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Content</h2>
              <div className="space-y-4">
                {profile.recentContent.map((content) => (
                  <div key={content.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {content.type === 'video' ? (
                          <Video className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Code className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{content.title}</h3>
                        <p className="text-sm text-gray-600">
                          {content.views.toLocaleString()} views • {content.publishedAt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Projects Contributed</span>
                  <span className="font-semibold text-gray-900">{profile.stats.projectsContributed}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Commits</span>
                  <span className="font-semibold text-gray-900">{profile.stats.totalCommits.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Content Uploaded</span>
                  <span className="font-semibold text-gray-900">{profile.stats.contentUploaded}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Community Likes</span>
                  <span className="font-semibold text-gray-900">{profile.stats.communityLikes}</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Top Contributor</h3>
                <p className="text-sm text-gray-700">
                  Recognized for outstanding contributions to The Trove community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
