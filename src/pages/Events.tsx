
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink, Plus } from 'lucide-react';

const Events = () => {
  const [viewMode, setViewMode] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingEvents = [
    {
      id: '1',
      title: 'Tech Meetup: AI & Machine Learning',
      date: '2024-12-20',
      time: '7:00 PM PST',
      location: 'Virtual Event',
      description: 'Join us for an evening discussing the latest trends in AI and ML. We\'ll have presentations from industry experts and networking opportunities.',
      attendees: 45,
      maxAttendees: 100,
      type: 'meetup',
      organizer: 'Jordan Kim',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop'
    },
    {
      id: '2',
      title: 'Code Review Workshop',
      date: '2024-12-22',
      time: '2:00 PM PST',
      location: 'San Francisco, CA',
      description: 'Learn best practices for conducting effective code reviews. Hands-on workshop with real code examples.',
      attendees: 23,
      maxAttendees: 30,
      type: 'workshop',
      organizer: 'Alex Rivera',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop'
    },
    {
      id: '3',
      title: 'The Trove Annual Convention 2024',
      date: '2025-01-15',
      time: '9:00 AM PST',
      location: 'Austin, TX',
      description: 'Our biggest event of the year! Three days of talks, workshops, networking, and collaboration. Don\'t miss out!',
      attendees: 234,
      maxAttendees: 500,
      type: 'convention',
      organizer: 'The Trove Team',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop'
    }
  ];

  const pastEvents = [
    {
      id: '4',
      title: 'React Best Practices Webinar',
      date: '2024-11-28',
      time: '6:00 PM PST',
      location: 'Virtual Event',
      description: 'Comprehensive overview of React best practices and performance optimization techniques.',
      attendees: 89,
      maxAttendees: 100,
      type: 'webinar',
      organizer: 'Maya Chen',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop'
    },
    {
      id: '5',
      title: 'Open Source Contribution Day',
      date: '2024-11-15',
      time: '10:00 AM PST',
      location: 'Seattle, WA',
      description: 'Community day focused on contributing to open source projects. Great for beginners and experienced developers alike.',
      attendees: 67,
      maxAttendees: 80,
      type: 'workshop',
      organizer: 'Sam Rodriguez',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop'
    }
  ];

  const currentEvents = viewMode === 'upcoming' ? upcomingEvents : pastEvents;

  const getEventTypeColor = (type: string) => {
    const colors = {
      meetup: 'bg-blue-100 text-blue-800',
      workshop: 'bg-green-100 text-green-800',
      convention: 'bg-purple-100 text-purple-800',
      webinar: 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Events Calendar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for tech meetups, workshops, conventions, and networking events
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border">
            <button
              onClick={() => setViewMode('upcoming')}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                viewMode === 'upcoming'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setViewMode('past')}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                viewMode === 'past'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {currentEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                {viewMode === 'upcoming' && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center text-gray-700">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">
                        {event.attendees}/{event.maxAttendees}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{event.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Organized by <span className="font-medium">{event.organizer}</span>
                  </div>
                  {viewMode === 'upcoming' ? (
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                      RSVP
                    </button>
                  ) : (
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Recap
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-800 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Want to Host an Event?
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            We're always looking for community members to share their knowledge and organize events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              <Plus className="w-5 h-5 mr-2" />
              Propose an Event
            </button>
            <a
              href="/join"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Join as Organizer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
