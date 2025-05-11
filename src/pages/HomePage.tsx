import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, PenTool as Tool, File, User } from 'lucide-react';
import { tools } from '../data/tools';
import { blogPosts } from '../data/blogPosts';

const HomePage: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!typingRef.current) return;
    
    const phrases = [
      "Offensive Security Expert",
      "Vulnerability Researcher",
      "Red Team Operator",
      "Zero-Day Hunter"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
        }
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
        }
        typingSpeed = 150;
      }
      
      if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at the end
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Background Matrix Effect */}
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Jerry<span className="text-green-500">Chips</span>
            </h1>
            <div className="h-8 md:h-12 mb-8">
              <span 
                ref={typingRef} 
                className="text-xl md:text-3xl font-mono text-green-400 border-r-2 border-green-400 pr-1"
              >
                Offensive Security Expert
              </span>
            </div>
            <p className="text-gray-300 text-lg md:text-xl mb-10">
              Breaking systems, finding vulnerabilities, and crafting the tools you need for your next security operation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/tools" 
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors duration-300"
              >
                Explore Tools
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-3 bg-transparent hover:bg-gray-900 text-gray-300 border border-gray-700 font-medium rounded-md transition-colors duration-300"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="animate-bounce text-gray-500">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Featured Tools Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white">
                <Tool className="inline-block mr-2 mb-1 text-green-500" size={28} />
                Security Toolkit
              </h2>
              <p className="text-gray-400 mt-2">
                Browser-based tools for your offensive security operations.
              </p>
            </div>
            <Link 
              to="/tools" 
              className="flex items-center text-green-500 hover:text-green-400 transition-colors duration-200"
            >
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.slice(0, 3).map((tool) => (
              <Link 
                key={tool.id}
                to={tool.path}
                className="bg-gray-800 border border-gray-700 hover:border-green-500 rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              >
                <div className="flex items-center mb-4">
                  <Shield className="text-green-500 mr-2" size={20} />
                  <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                </div>
                <p className="text-gray-400">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Articles Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white">
                <File className="inline-block mr-2 mb-1 text-green-500" size={28} />
                Recent Articles
              </h2>
              <p className="text-gray-400 mt-2">
                Insights and techniques from the front lines.
              </p>
            </div>
            <Link 
              to="/blog" 
              className="flex items-center text-green-500 hover:text-green-400 transition-colors duration-200"
            >
              Read More <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post) => (
              <Link 
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-gray-900 border border-gray-800 hover:border-green-500 rounded-lg overflow-hidden transition-all duration-300"
              >
                <div className="p-6">
                  <div className="text-xs text-green-500 font-mono mb-2">{post.date} / {post.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-400">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-white mb-6">
                <User className="inline-block mr-2 mb-1 text-green-500" size={28} />
                Who Is Jerry?
              </h2>
              <p className="text-gray-300 mb-4">
                With over a decade in offensive security, I've operated at the highest levels of the industry—both visible and behind the scenes.
              </p>
              <p className="text-gray-400 mb-6">
                My tools and techniques have been used in countless operations, and now I'm making some of that expertise available to fellow security professionals.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors duration-200"
              >
                Learn more about my work <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="bg-black border-2 border-green-500 rounded-lg p-6 font-mono">
                <div className="flex mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-400">
                  <p className="mb-2"><span className="text-green-500">$</span> whoami</p>
                  <p className="text-white mb-4">jerrychips - security researcher</p>
                  
                  <p className="mb-2"><span className="text-green-500">$</span> skills</p>
                  <p className="text-white mb-4">[ 'vulnerability research', 'red teaming', 'exploit development', 'zero-day hunting', 'secure coding' ]</p>
                  
                  <p className="mb-2"><span className="text-green-500">$</span> experience</p>
                  <p className="text-white mb-4">12+ years in offensive security</p>
                  
                  <p className="mb-2"><span className="text-green-500">$</span> contact</p>
                  <p className="text-white mb-4">jerry@jerrychips.com <span className="text-gray-600">// PGP key available</span></p>
                  
                  <p className="animate-pulse"><span className="text-green-500">$</span> _</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;