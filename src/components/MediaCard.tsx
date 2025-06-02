
import { Play, FileText, Headphones, Calendar } from 'lucide-react';

interface MediaCardProps {
  id: string;
  title: string;
  type: 'video' | 'article' | 'podcast';
  thumbnail: string;
  duration?: string;
  publishedAt: string;
  author: string;
  views?: number;
}

const MediaCard = ({
  id,
  title,
  type,
  thumbnail,
  duration,
  publishedAt,
  author,
  views
}: MediaCardProps) => {
  const typeIcons = {
    video: Play,
    article: FileText,
    podcast: Headphones
  };

  const typeColors = {
    video: 'text-red-600 bg-red-50',
    article: 'text-blue-600 bg-blue-50',
    podcast: 'text-purple-600 bg-purple-50'
  };

  const TypeIcon = typeIcons[type];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
              <TypeIcon className="w-8 h-8 text-gray-800" />
            </div>
          </div>
        </div>
        
        <div className="absolute top-4 left-4">
          <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${typeColors[type]}`}>
            <TypeIcon className="w-4 h-4 mr-1" />
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
        </div>
        
        {duration && (
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
            {duration}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-800 transition-colors duration-200">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="font-medium">{author}</span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {publishedAt}
            </div>
            {views && (
              <span>{views.toLocaleString()} views</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
