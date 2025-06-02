
import { useState } from 'react';
import { Calendar, MapPin, Users, Play, Download, Star, Clock, Mic, Code, Video } from 'lucide-react';

const Convention = () => {
  const [activeYear, setActiveYear] = useState('2024');

  const conventionYears = ['2024', '2023', '2022'];

  const convention2024 = {
    title: 'The Trove Convention 2024',
    subtitle: 'Building Tomorrow, Together',
    date: 'January 15-17, 2025',
    location: 'Austin Convention Center, TX',
    attendees: 500,
    status: 'upcoming',
    ticketsAvailable: true,
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
    description: 'Join us for our biggest event of the year! Three days of inspiring talks, hands-on workshops, networking opportunities, and collaboration sessions. Connect with fellow creators, developers, and innovators from around the world.',
    highlights: [
      '50+ expert speakers from leading tech companies',
      '20+ hands-on workshops and coding sessions',
      '3 days of networking and collaboration',
      'Project showcase and demo sessions',
      'Startup pitch competition with $50K prize pool',
      'Exclusive access to new tool previews'
    ],
    schedule: [
      {
        day: 'Day 1 - Thursday',
        date: 'January 15',
        sessions: [
          {
            time: '9:00 AM',
            title: 'Opening Keynote: The Future of Collaborative Development',
            speaker: 'Maya Chen',
            type: 'keynote',
            track: 'Main Stage'
          },
          {
            time: '10:30 AM',
            title: 'Building Scalable React Applications',
            speaker: 'Alex Rivera',
            type: 'workshop',
            track: 'Workshop Room A'
          },
          {
            time: '2:00 PM',
            title: 'AI in Modern Development Workflows',
            speaker: 'Dr. Sarah Kim',
            type: 'talk',
            track: 'Tech Track'
          }
        ]
      },
      {
        day: 'Day 2 - Friday',
        date: 'January 16',
        sessions: [
          {
            time: '9:00 AM',
            title: 'Community Building in the Digital Age',
            speaker: 'Jordan Kim',
            type: 'talk',
            track: 'Community Track'
          },
          {
            time: '11:00 AM',
            title: 'Hands-on: Building Your First Open Source Project',
            speaker: 'Sam Rodriguez',
            type: 'workshop',
            track: 'Workshop Room B'
          },
          {
            time: '3:00 PM',
            title: 'Project Showcase: Community Demos',
            speaker: 'Community Members',
            type: 'showcase',
            track: 'Main Stage'
          }
        ]
      }
    ],
    speakers: [
      {
        name: 'Maya Chen',
        role: 'Creative Director, The Trove',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face',
        bio: 'Leading creative strategist with 10+ years in digital innovation.'
      },
      {
        name: 'Alex Rivera',
        role: 'Lead Developer, The Trove',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        bio: 'Full-stack developer and open source advocate.'
      },
      {
        name: 'Dr. Sarah Kim',
        role: 'AI Research Scientist',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        bio: 'Leading researcher in AI applications for software development.'
      }
    ]
  };

  const getSessionIcon = (type: string) => {
    switch (type) {
      case 'keynote':
        return <Mic className="w-4 h-4" />;
      case 'workshop':
        return <Code className="w-4 h-4" />;
      case 'talk':
        return <Video className="w-4 h-4" />;
      case 'showcase':
        return <Star className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getSessionColor = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'bg-purple-100 text-purple-800';
      case 'workshop':
        return 'bg-blue-100 text-blue-800';
      case 'talk':
        return 'bg-green-100 text-green-800';
      case 'showcase':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Year Selection */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-lg p-1 shadow-sm border">
            {conventionYears.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                  activeYear === year
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="relative">
            <img
              src={convention2024.heroImage}
              alt="Convention"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-6">
                <h1 className="text-5xl font-bold mb-4">{convention2024.title}</h1>
                <p className="text-2xl text-gray-200 mb-6">{convention2024.subtitle}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg mb-8">
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 mr-2" />
                    {convention2024.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2" />
                    {convention2024.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 mr-2" />
                    {convention2024.attendees} attendees
                  </div>
                </div>
                {convention2024.ticketsAvailable && (
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Get Early Bird Tickets
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* About & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Convention</h2>
            <p className="text-gray-700 leading-relaxed">{convention2024.description}</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <ul className="space-y-3">
              {convention2024.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <Star className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Schedule Highlights</h2>
          <div className="space-y-8">
            {convention2024.schedule.map((day, dayIndex) => (
              <div key={dayIndex}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{day.day}</h3>
                <div className="space-y-4">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="text-sm font-semibold text-gray-600 w-20">
                          {session.time}
                        </div>
                        <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSessionColor(session.type)}`}>
                          {getSessionIcon(session.type)}
                          <span className="ml-1 capitalize">{session.type}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{session.title}</h4>
                          <p className="text-sm text-gray-600">
                            {session.speaker} • {session.track}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speakers */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {convention2024.speakers.map((speaker, index) => (
              <div key={index} className="text-center">
                <img
                  src={speaker.avatar}
                  alt={speaker.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{speaker.role}</p>
                <p className="text-gray-600 text-sm">{speaker.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Conventions */}
        {activeYear !== '2024' && (
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Convention {activeYear} Recap
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop"
                  alt={`Convention ${activeYear}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex space-x-4">
                  <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Highlights
                  </button>
                  <button className="flex items-center border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                    <Download className="w-4 h-4 mr-2" />
                    Download Materials
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Event Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Attendees</span>
                    <span className="font-semibold">350</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sessions</span>
                    <span className="font-semibold">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Speakers</span>
                    <span className="font-semibold">30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projects Showcased</span>
                    <span className="font-semibold">25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA for upcoming convention */}
        {activeYear === '2024' && (
          <div className="bg-gradient-to-r from-blue-800 to-cyan-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Be part of the most exciting tech and creativity event of the year. 
              Network, learn, and build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Register Now
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200">
                Become a Speaker
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Convention;
