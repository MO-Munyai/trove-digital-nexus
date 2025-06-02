
import { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import UserCard from '../components/UserCard';

const Team = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', label: 'All Team Members' },
    { id: 'tech', label: 'Tech' },
    { id: 'creative', label: 'Creative' },
    { id: 'community', label: 'Community' },
    { id: 'projects', label: 'Projects' },
  ];

  // Mock team data
  const teamMembers = [
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
        twitter: 'https://twitter.com/alex_rivera',
        linkedin: 'https://linkedin.com/in/alex-rivera'
      },
      featured: true
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
        github: 'https://github.com/maya-chen',
        twitter: 'https://twitter.com/maya_creates'
      }
    },
    {
      id: '3',
      name: 'Jordan Kim',
      role: 'Community Manager',
      department: 'Community' as const,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: 'Building bridges between technology and people. Expert in community building, event planning, and fostering collaboration.',
      location: 'New York, NY',
      socialLinks: {
        twitter: 'https://twitter.com/jordan_builds',
        linkedin: 'https://linkedin.com/in/jordan-kim'
      }
    },
    {
      id: '4',
      name: 'Sam Rodriguez',
      role: 'DevOps Engineer',
      department: 'Tech' as const,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      bio: 'Infrastructure wizard who keeps our systems running smoothly. Kubernetes, Docker, and cloud automation specialist.',
      location: 'Seattle, WA',
      socialLinks: {
        github: 'https://github.com/sam-rodriguez',
        linkedin: 'https://linkedin.com/in/sam-rodriguez'
      }
    },
    {
      id: '5',
      name: 'Emma Thompson',
      role: 'Content Producer',
      department: 'Creative' as const,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'Multimedia content creator with a passion for educational content. Podcast host and video producer.',
      location: 'Los Angeles, CA',
      socialLinks: {
        twitter: 'https://twitter.com/emma_creates',
        linkedin: 'https://linkedin.com/in/emma-thompson'
      }
    },
    {
      id: '6',
      name: 'David Park',
      role: 'Project Lead',
      department: 'Projects' as const,
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
      bio: 'Strategic thinker who turns ideas into reality. Experienced in agile methodologies and cross-functional team leadership.',
      location: 'Chicago, IL',
      socialLinks: {
        github: 'https://github.com/david-park',
        linkedin: 'https://linkedin.com/in/david-park'
      }
    },
    {
      id: '7',
      name: 'Zara Ahmed',
      role: 'UX Designer',
      department: 'Creative' as const,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      bio: 'User experience advocate who designs intuitive and beautiful interfaces. Expert in human-centered design principles.',
      location: 'Portland, OR',
      socialLinks: {
        twitter: 'https://twitter.com/zara_designs',
        linkedin: 'https://linkedin.com/in/zara-ahmed'
      }
    },
    {
      id: '8',
      name: 'Marcus Wilson',
      role: 'Backend Engineer',
      department: 'Tech' as const,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      bio: 'Database optimization expert and API architect. Passionate about clean code and scalable backend systems.',
      location: 'Denver, CO',
      socialLinks: {
        github: 'https://github.com/marcus-wilson',
        linkedin: 'https://linkedin.com/in/marcus-wilson'
      }
    },
    {
      id: '9',
      name: 'Luna Patel',
      role: 'Event Coordinator',
      department: 'Community' as const,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      bio: 'Bringing people together through memorable experiences. Specializes in tech meetups and virtual event production.',
      location: 'Miami, FL',
      socialLinks: {
        twitter: 'https://twitter.com/luna_events',
        linkedin: 'https://linkedin.com/in/luna-patel'
      }
    }
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || 
                             member.department.toLowerCase() === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const featuredMember = teamMembers.find(member => member.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The talented individuals who make The Trove a hub of innovation and creativity
          </p>
        </div>

        {/* Featured Member of the Month */}
        {featuredMember && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-12 border border-yellow-200">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Member of the Month</h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <UserCard {...featuredMember} />
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedDepartment === dept.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {dept.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member) => (
            <UserCard key={member.id} {...member} />
          ))}
        </div>

        {/* No Results */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No team members found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Join the Team CTA */}
        <div className="bg-gradient-to-r from-blue-800 to-cyan-600 rounded-2xl p-8 mt-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-xl mb-6 text-blue-100">
            We're always looking for talented individuals to join our mission
          </p>
          <a
            href="/join"
            className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Explore Opportunities
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
