import React, { useState } from 'react';
import { Mail, Shield, Github, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log({ name, email, subject, message });
    setSubmitted(true);
    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };
  
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Contact</h1>
        <p className="text-gray-400 text-lg mb-8">
          Get in touch for security consulting, collaborations, or questions.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-gray-800 border border-green-500 rounded-lg p-8 text-center">
                <Shield className="mx-auto text-green-500 mb-4" size={48} />
                <h2 className="text-2xl font-bold text-white mb-2">Message Received</h2>
                <p className="text-gray-300 mb-4">
                  Thank you for your message. I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition-colors duration-200"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition-colors duration-200"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition-colors duration-200"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors duration-300"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-black border border-gray-800 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="text-green-500 mt-1 mr-3" size={20} />
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-gray-400">jetnaut@protonmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="text-green-500 mt-1 mr-3" size={20} />
                  <div>
                    <h3 className="text-white font-medium">GitHub</h3>
                    <a 
                      href="https://github.com/jxrogue"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                    >
                      github.com/jxrogue
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">PGP Public Key</h2>
              <p className="text-gray-400 mb-3 text-sm">
                For secure communications, please use my PGP key:
              </p>
              <div className="bg-black border border-gray-700 rounded p-3 font-mono text-xs text-gray-500 overflow-x-auto">
                <pre>
{`-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v4.10.8

xsBNBGReYxQBCADJYrZ5MYCGQbK0etXszqfMn7tG1zfNs4Jti3Y917V7TF99
xr6Ac+lx24aEYvqGW9vixgBbQuMepXlTZU5pYGUzOFNuU2UOFLj+O6Xfm6l
8KoVHQEr+M8lHWzqbGhOiR6rJxMiXbdvXozUJcL1f6FRsSV9YbOWOq6BJDoe
nA4hc8dQj+mKt7pmVKbV6ueU9yPTjP1L4JD0LfSTTKZMmzCCN1vZ+FlP9jRG
DGsMUQWs8HXnLjXLf0NVTuGLPeHizr5mzYRYyZOH94GUkJnD9bqe1/fdMxzx
TzMk0Vnj2SrM7n3UV7OL+mvNXHyJm/y1WEtmNZw+Wh1SnDZJ4gElABEBAAHN
KWplcnJ5Y2hpcHMuY29tIDxqZXJyeUBqZXJyeWNoaXBzLmNvbT7CwI0EEAE
IADcWIQQ6/fN7LDyDgQtJnPmEL94zhP3kQwUCZF5jFAUJA8JnAAIbAwQLCQ
gHBRUICQoLBRYCAwEAAAoJEIQv3jOE/eRDDQgH/RqGv/nJ8jmXS/QtrUBO
Bq0aNNQrICnRzwx7cL0T3Wr8JCyRnHjA8Y/wHL5tgpS3xD8TuN278bZFHsl
KjL9SZ/KZOprzkSN3teaLUIXbSRJF42OFfALfL1ZZQjL2BFPJvRQ93CgmOf4
D5D8hBxHSCZ1K6FwxKeRQ8kNFsVGgIE2EjR/pLA0cUNXbtII4Yg5FnJwfj4Y
UUc1lNGR2nxZhS4mlQEMrn3V9L/Q1UjVNK+/4OBKmA3rIpGgVU5+cX+OaZhX
X1KsXvl0Kk+JEF1fzQZC3j1O7iIJGV5QTcnFLJdvx4pKI7bhT/IwQlrLKpC7
wdZ3JrnPnPc4BaeroCDCwHYEEAEIACQWIQQ6/fN7LDyDgQtJnPmEL94zhP3k
QwUCZF5jFAIbAwUJA8JnAABqCRCEL94zhP3kQ18gBBkWCQAGBQJkXmMUAAoJ
EKyL3+CZ67l19XMH/jMl1Mm9QA2C7hpnI0rO+R08i0/HVgH4iAPdzUCnWqUt
y8qIlOBnWtZkWANiocR4TPnkE7CjrDbQZi7HQ6+NpJSrNZY0LrQfwY9vlBAn
JBLtgMUP1+69o8ZN8MyrmviZXkXRJe1JJXWQnA5bDZiBrSZ0QFB94YedWzKQ
ypF0DJP//urRLP9keLgp0dj3qI4b/tA2XW0r/9Sln3m5jxqz5vBZ7APzEQ9c
ZR/icrZSVJzETn37XSdWgT8wNVLUtTRCnVAQiGXnrJQCc0D9dO9yRwJFydxg
f3Vq/NXbDCWEclGrV4OepCD2RSEOoFg0Cw0JcptF75lQMl8xZG1aBAkA`}
                </pre>
              </div>
              <button className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded-md transition-colors duration-200">
                Download Full PGP Key
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
