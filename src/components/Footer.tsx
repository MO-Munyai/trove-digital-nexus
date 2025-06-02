
import { Github, Instagram, Youtube, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                The Trove
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A tech and media collective of coders, creators, and community leaders. 
              Building the future through collaboration and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors duration-200">Projects</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors duration-200">Team</Link></li>
              <li><Link to="/media" className="text-gray-400 hover:text-white transition-colors duration-200">Media</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors duration-200">Events</Link></li>
              <li><Link to="/join" className="text-gray-400 hover:text-white transition-colors duration-200">Join Us</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link to="/feed" className="text-gray-400 hover:text-white transition-colors duration-200">Community Feed</Link></li>
              <li><Link to="/convention" className="text-gray-400 hover:text-white transition-colors duration-200">Tech Convention</Link></li>
              <li><Link to="/remakes" className="text-gray-400 hover:text-white transition-colors duration-200">Remakes Vault</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Discord</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 The Trove. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-gray-400 text-sm mt-4 md:mt-0">
            <MapPin className="w-4 h-4" />
            <span>Building the future, everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
