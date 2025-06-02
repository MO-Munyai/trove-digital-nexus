
import { useState } from 'react';
import { Users, FileText, BarChart3, Settings, Shield, Eye, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('users');

  const tabs = [
    { id: 'users', label: 'Users', icon: Users },
    { id: 'content', label: 'Content Moderation', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  // Mock data
  const users = [
    {
      id: '1',
      name: 'Alex Rivera',
      email: 'alex@thetrove.dev',
      role: 'developer',
      status: 'active',
      joinedDate: '2024-03-15',
      lastActive: '2024-12-15',
      projects: 12,
      contributions: 847
    },
    {
      id: '2',
      name: 'Maya Chen',
      email: 'maya@thetrove.dev',
      role: 'creative',
      status: 'active',
      joinedDate: '2024-04-02',
      lastActive: '2024-12-14',
      projects: 8,
      contributions: 234
    },
    {
      id: '3',
      name: 'Jordan Kim',
      email: 'jordan@thetrove.dev',
      role: 'community',
      status: 'pending',
      joinedDate: '2024-12-10',
      lastActive: '2024-12-12',
      projects: 2,
      contributions: 45
    }
  ];

  const pendingContent = [
    {
      id: '1',
      title: 'Advanced React Patterns Tutorial',
      author: 'Alex Rivera',
      type: 'video',
      submittedDate: '2024-12-14',
      status: 'pending'
    },
    {
      id: '2',
      title: 'Building REST APIs with Node.js',
      author: 'Maya Chen',
      type: 'article',
      submittedDate: '2024-12-13',
      status: 'pending'
    },
    {
      id: '3',
      title: 'Community Guidelines Discussion',
      author: 'Jordan Kim',
      type: 'podcast',
      submittedDate: '2024-12-12',
      status: 'pending'
    }
  ];

  const analytics = {
    totalUsers: 156,
    activeProjects: 24,
    contentPieces: 89,
    monthlyGrowth: 23
  };

  const getRoleColor = (role: string) => {
    const colors = {
      developer: 'bg-blue-100 text-blue-800',
      creative: 'bg-purple-100 text-purple-800',
      community: 'bg-green-100 text-green-800',
      admin: 'bg-red-100 text-red-800'
    };
    return colors[role as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      suspended: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const handleApproveContent = (id: string) => {
    console.log('Approving content:', id);
  };

  const handleRejectContent = (id: string) => {
    console.log('Rejecting content:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Shield className="w-8 h-8 text-blue-600 mr-3" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600">Manage users, content, and community settings</p>
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

        {/* Tab Content */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">User Management</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Activity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full capitalize ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full capitalize ${getStatusColor(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div>{user.projects} projects</div>
                        <div>{user.contributions} contributions</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Content Moderation</h2>
              <p className="text-gray-600">Review and approve pending content submissions</p>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {pendingContent.map((content) => (
                  <div key={content.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{content.title}</h3>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span>by {content.author}</span>
                        <span>•</span>
                        <span className="capitalize">{content.type}</span>
                        <span>•</span>
                        <span>Submitted {content.submittedDate}</span>
                      </div>
                    </div>
                    <div className="flex space-x-3 ml-4">
                      <button
                        onClick={() => handleApproveContent(content.id)}
                        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </button>
                      <button
                        onClick={() => handleRejectContent(content.id)}
                        className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">{analytics.totalUsers}</p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Projects</p>
                    <p className="text-2xl font-bold text-gray-900">{analytics.activeProjects}</p>
                  </div>
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Content Pieces</p>
                    <p className="text-2xl font-bold text-gray-900">{analytics.contentPieces}</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Monthly Growth</p>
                    <p className="text-2xl font-bold text-gray-900">{analytics.monthlyGrowth}%</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Charts Placeholder */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">User Growth Over Time</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Chart placeholder - Integration with charting library needed</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Community Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Community Name
                </label>
                <input
                  type="text"
                  defaultValue="The Trove"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Community Description
                </label>
                <textarea
                  rows={3}
                  defaultValue="A tech and media collective of coders, creators, and community leaders."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="autoApprove"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="autoApprove" className="ml-2 block text-sm text-gray-700">
                  Auto-approve content from verified users
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="publicRegistration"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="publicRegistration" className="ml-2 block text-sm text-gray-700">
                  Allow public registration
                </label>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Save Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
