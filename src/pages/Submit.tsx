
import { useState } from 'react';
import { Upload, X, CheckCircle, File, Image, Video, Mic } from 'lucide-react';

const Submit = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    tags: '',
    file: null as File | null
  });
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contentTypes = [
    { id: 'video', label: 'Video', icon: Video, accept: 'video/*', description: 'Tutorials, demos, talks' },
    { id: 'audio', label: 'Audio/Podcast', icon: Mic, accept: 'audio/*', description: 'Podcasts, interviews, discussions' },
    { id: 'image', label: 'Image', icon: Image, accept: 'image/*', description: 'Screenshots, designs, infographics' },
    { id: 'document', label: 'Document', icon: File, accept: '.pdf,.doc,.docx,.md', description: 'Articles, guides, documentation' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Content submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({ ...prev, file: e.dataTransfer.files[0] }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const removeFile = () => {
    setFormData(prev => ({ ...prev, file: null }));
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
              Content Submitted!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for sharing your content with The Trove community. 
              We'll review it and it will be available soon.
            </p>
            <div className="space-y-3">
              <a
                href="/media"
                className="block bg-gradient-to-r from-blue-800 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-900 hover:to-cyan-700 transition-all duration-200"
              >
                View Media Hub
              </a>
              <a
                href="/submit"
                className="block border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
              >
                Submit Another
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Share Your Content
          </h1>
          <p className="text-xl text-gray-600">
            Upload videos, audio, images, or documents to share with The Trove community
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Content Type Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                What type of content are you sharing?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contentTypes.map((type) => {
                  const TypeIcon = type.icon;
                  return (
                    <label
                      key={type.id}
                      className={`relative flex cursor-pointer rounded-xl border-2 p-6 focus:outline-none transition-all duration-200 ${
                        formData.type === type.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="type"
                        value={type.id}
                        checked={formData.type === type.id}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="flex flex-col items-center text-center">
                        <TypeIcon className={`w-8 h-8 mb-3 ${
                          formData.type === type.id ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                        <span className={`font-medium ${
                          formData.type === type.id ? 'text-blue-900' : 'text-gray-900'
                        }`}>
                          {type.label}
                        </span>
                        <span className="text-sm text-gray-500 mt-1">
                          {type.description}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Upload your file
              </label>
              
              {!formData.file ? (
                <div
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors duration-200 ${
                    dragActive
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg text-gray-700 mb-2">
                    Drag and drop your file here, or
                  </p>
                  <label className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 cursor-pointer transition-colors duration-200">
                    Browse Files
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileSelect}
                      accept={contentTypes.find(t => t.id === formData.type)?.accept || '*/*'}
                    />
                  </label>
                  <p className="text-sm text-gray-500 mt-4">
                    Maximum file size: 100MB
                  </p>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <File className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">{formData.file.name}</p>
                      <p className="text-sm text-gray-500">
                        {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-lg font-semibold text-gray-900 mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Give your content a descriptive title"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-lg font-semibold text-gray-900 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your content and what viewers will learn or gain from it"
              />
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-lg font-semibold text-gray-900 mb-2">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., React, Tutorial, Beginner, Web Development (comma separated)"
              />
              <p className="text-sm text-gray-500 mt-1">
                Add relevant tags to help others discover your content
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                disabled={!formData.title || !formData.description || !formData.type}
                className="px-8 py-3 bg-gradient-to-r from-blue-800 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-900 hover:to-cyan-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Submit Content
              </button>
            </div>
          </form>
        </div>

        {/* Guidelines */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Content Guidelines</h3>
          <ul className="text-blue-800 space-y-2 text-sm">
            <li>• Ensure your content is original or properly attributed</li>
            <li>• Keep content relevant to tech, creativity, or community building</li>
            <li>• Use clear, descriptive titles and comprehensive descriptions</li>
            <li>• Add relevant tags to improve discoverability</li>
            <li>• High-quality content is more likely to be featured</li>
            <li>• All submissions are reviewed before publication</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Submit;
