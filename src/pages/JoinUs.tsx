
import { useState } from 'react';
import { Code, Video, Users, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skillset: '',
    roleInterest: '',
    experience: '',
    availability: 'part-time',
    commitment: 50,
    motivation: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roles = [
    {
      id: 'developer',
      title: 'Developer',
      icon: Code,
      description: 'Build innovative tools and applications',
      skills: ['Frontend', 'Backend', 'Mobile', 'DevOps']
    },
    {
      id: 'creative',
      title: 'Creative',
      icon: Video,
      description: 'Create compelling content and designs',
      skills: ['Video Production', 'Graphic Design', 'Writing', 'Podcasting']
    },
    {
      id: 'community',
      title: 'Community',
      icon: Users,
      description: 'Foster connections and engagement',
      skills: ['Event Planning', 'Social Media', 'Moderation', 'Outreach']
    },
    {
      id: 'product',
      title: 'Product',
      icon: Rocket,
      description: 'Drive product strategy and growth',
      skills: ['Product Management', 'UX Research', 'Analytics', 'Strategy']
    }
  ];

  const benefits = [
    'Work on cutting-edge projects with talented individuals',
    'Flexible schedule that fits your lifestyle',
    'Learn new skills and advance your career',
    'Build your portfolio with real-world projects',
    'Network with industry professionals',
    'Contribute to open source and community initiatives',
    'Access to exclusive events and workshops',
    'Recognition and showcasing of your work'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-6">
              We've received your application and will review it soon. You'll hear from us within 1-2 weeks.
            </p>
            <a
              href="/"
              className="inline-block bg-gradient-to-r from-blue-800 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-900 hover:to-cyan-700 transition-all duration-200"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join the Movement
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to be part of something bigger? Join The Trove and help shape the future of tech and creativity.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {roles.map((role) => {
            const RoleIcon = role.icon;
            return (
              <div key={role.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <RoleIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{role.description}</p>
                <div className="flex flex-wrap gap-1">
                  {role.skills.slice(0, 2).map((skill, index) => (
                    <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                  {role.skills.length > 2 && (
                    <span className="text-xs text-gray-500">+{role.skills.length - 2}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Join The Trove?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Apply?
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="roleInterest" className="block text-sm font-medium text-gray-700 mb-2">
                Role of Interest *
              </label>
              <select
                id="roleInterest"
                name="roleInterest"
                required
                value={formData.roleInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a role</option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="skillset" className="block text-sm font-medium text-gray-700 mb-2">
                Key Skills & Technologies *
              </label>
              <input
                type="text"
                id="skillset"
                name="skillset"
                required
                value={formData.skillset}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., React, Node.js, Python, Video Editing, etc."
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Experience Level
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select experience level</option>
                <option value="beginner">Beginner (0-1 years)</option>
                <option value="intermediate">Intermediate (2-4 years)</option>
                <option value="experienced">Experienced (5+ years)</option>
                <option value="expert">Expert (10+ years)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="part-time">Part-time</option>
                  <option value="full-time">Full-time</option>
                  <option value="freelance">Freelance/Project-based</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>
              <div>
                <label htmlFor="commitment" className="block text-sm font-medium text-gray-700 mb-2">
                  Weekly Commitment: {formData.commitment}%
                </label>
                <input
                  type="range"
                  id="commitment"
                  name="commitment"
                  min="10"
                  max="100"
                  step="10"
                  value={formData.commitment}
                  onChange={handleChange}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                Why do you want to join The Trove?
              </label>
              <textarea
                id="motivation"
                name="motivation"
                rows={4}
                value={formData.motivation}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your motivation and what you hope to achieve..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-800 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-900 hover:to-cyan-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center"
            >
              Submit Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
