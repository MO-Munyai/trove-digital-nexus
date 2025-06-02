
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Star, Users } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: 'active' | 'archived' | 'wip';
  stars: number;
  contributors: number;
  github?: string;
  demo?: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  image,
  tags,
  status,
  stars,
  contributors,
  github,
  demo
}: ProjectCardProps) => {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    archived: 'bg-gray-100 text-gray-800',
    wip: 'bg-yellow-100 text-yellow-800'
  };

  const statusLabels = {
    active: 'Active',
    archived: 'Archived',
    wip: 'Work in Progress'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
            {statusLabels[status]}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          {github && (
            <a
              href={github}
              className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-sm">
              +{tags.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {stars}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {contributors}
            </div>
          </div>
          <Link
            to={`/projects/${id}`}
            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
