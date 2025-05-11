import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Extract unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Security Research Blog</h1>
        <p className="text-gray-400 text-lg mb-8">
          Insights, techniques, and analysis from the front lines of offensive security.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-2/3">
            {/* Search */}
            <div className="relative max-w-md mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 text-gray-200 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-green-500 transition-colors duration-200"
              />
            </div>
            
            {/* Blog Posts */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="block bg-gray-800 border border-gray-700 hover:border-green-500 rounded-lg overflow-hidden transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="text-xs text-green-500 font-mono mb-2">{post.date} / {post.category}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-400">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-12 bg-gray-800 border border-gray-700 rounded-lg">
                  <p className="text-gray-400">No articles match your search criteria.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:w-1/3">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
              
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                    selectedCategory === null 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  } transition-colors duration-200`}
                >
                  <Tag size={14} className="mr-1" />
                  All
                </button>
                
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                      selectedCategory === category 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    } transition-colors duration-200 mr-2 mb-2`}
                  >
                    <Tag size={14} className="mr-1" />
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold text-white mb-4">Subscribe</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get notified when new articles are published.
                </p>
                <div className="flex">
                  <input 
                    type="email"
                    placeholder="Your email"
                    className="flex-grow bg-gray-700 border border-gray-600 text-gray-200 rounded-l-lg px-4 py-2 focus:outline-none focus:border-green-500"
                  />
                  <button className="bg-green-600 hover:bg-green-700 text-white rounded-r-lg px-4 py-2 transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;