
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Upload, 
  Star, 
  TrendingUp, 
  Calendar,
  Code,
  Video,
  MessageCircle,
  Award
} from 'lucide-react';

const Dashboard = () => {
  // Mock user role - this would come from auth context
  const userRole = 'developer';
  const userName = 'Alex Rivera';

  const stats = [
    { label: 'Projects Joined', value: '8', change: '+2 this month', icon: Code },
    { label: 'Content Uploads', value: '12', change: '+3 this week', icon: Upload },
    { label: 'Community Likes', value: '247', change: '+15 today', icon: Star },
    { label: 'Events Attended', value: '5', change: '2 upcoming', icon: Calendar },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'project',
      title: 'Joined "OpenSource Task Manager" project',
      time: '2 hours ago',
      icon: Code
    },
    {
      id: 2,
      type: 'upload',
      title: 'Uploaded "React Best Practices" tutorial',
      time: '1 day ago',
      icon: Video
    },
    {
      id: 3,
      type: 'comment',
      title: 'Commented on "Discord Clone Rebuild"',
      time: '2 days ago',
      icon: MessageCircle
    },
    {
      id: 4,
      type: 'award',
      title: 'Earned "Top Contributor" badge',
      time: '1 week ago',
      icon: Award
    }
  ];

  const quickActions = {
    developer: [
      { title: 'Browse Projects', desc: 'Find new projects to contribute to', link: '/projects', color: 'blue' },
      { title: 'Upload Tutorial', desc: 'Share your coding knowledge', link: '/submit', color: 'green' },
      { title: 'Join Discussion', desc: 'Participate in community forums', link: '/feed', color: 'purple' },
      { title: 'Attend Events', desc: 'Join upcoming tech meetups', link: '/events', color: 'orange' }
    ],
    media: [
      { title: 'Upload Content', desc: 'Share videos, podcasts, or articles', link: '/submit', color: 'red' },
      { title: 'Media Hub', desc: 'Explore latest content', link: '/media', color: 'blue' },
      { title: 'Community Feed', desc: 'Connect with other creators', link: '/feed', color: 'green' },
      { title: 'Events Calendar', desc: 'Upcoming content creation events', link: '/events', color: 'purple' }
    ],
    community: [
      { title: 'Organize Event', desc: 'Plan community meetups', link: '/events', color: 'orange' },
      { title: 'Community Feed', desc: 'Moderate and engage with posts', link: '/feed', color: 'blue' },
      { title: 'Member Directory', desc: 'Connect with team members', link: '/team', color: 'green' },
      { title: 'Join Movement', desc: 'Help grow our community', link: '/join', color: 'purple' }
    ]
  };

  const currentActions = quickActions[userRole as keyof typeof quickActions] || quickActions.developer;

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {userName}! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Here's what's happening in your Trove community today
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <StatIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <div className="text-xs text-green-600">{stat.change}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className="group bg-white rounded-xl shadow-sm border p-6 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses[action.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{action.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const ActivityIcon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <ActivityIcon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link
                to="/feed"
                className="block text-center text-blue-600 hover:text-blue-700 text-sm font-medium mt-4 pt-4 border-t border-gray-100"
              >
                View all activity
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Your Active Projects</h2>
            <Link to="/projects" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border p-6">
                <div className="w-full h-32 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Project Name {i}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Brief description of the project and your role in it.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Active
                  </span>
                  <span className="text-xs text-gray-500">Updated 2 days ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
