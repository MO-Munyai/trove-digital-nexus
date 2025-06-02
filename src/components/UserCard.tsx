
import { Link } from 'react-router-dom';
import { MapPin, Github, Twitter, Linkedin } from 'lucide-react';

interface UserCardProps {
  id: string;
  name: string;
  role: string;
  department: 'Tech' | 'Creative' | 'Community' | 'Projects';
  avatar: string;
  bio: string;
  location?: string;
  socialLinks?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
  featured?: boolean;
}

const UserCard = ({
  id,
  name,
  role,
  department,
  avatar,
  bio,
  location,
  socialLinks = {},
  featured = false
}: UserCardProps) => {
  const departmentColors = {
    Tech: 'bg-blue-100 text-blue-800',
    Creative: 'bg-orange-100 text-orange-800',
    Community: 'bg-green-100 text-green-800',
    Projects: 'bg-cyan-100 text-cyan-800'
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${featured ? 'ring-2 ring-yellow-400' : ''}`}>
      {featured && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-center py-2 text-sm font-semibold">
          ⭐ Featured Member
        </div>
      )}
      
      <div className="p-6">
        <div className="text-center mb-4">
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-full mx-auto mb-4 ring-4 ring-gray-100"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-gray-600 font-medium mb-2">{role}</p>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${departmentColors[department]}`}>
            {department}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm text-center mb-4 line-clamp-3">
          {bio}
        </p>
        
        {location && (
          <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        )}
        
        {Object.keys(socialLinks).length > 0 && (
          <div className="flex justify-center space-x-3 mb-4">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
        
        <Link
          to={`/profile/${id}`}
          className="block w-full text-center bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 py-2 px-4 rounded-lg font-medium transition-all duration-200"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
