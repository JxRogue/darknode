import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, PenTool as Tool } from 'lucide-react';
import { tools } from '../data/tools';

const ToolsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Security Toolkit</h1>
        <p className="text-gray-400 text-lg mb-8">
          Browser-based offensive security tools designed for red teamers and security researchers.
        </p>
        
        {/* Search */}
        <div className="relative max-w-md mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          <input 
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 text-gray-200 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-green-500 transition-colors duration-200"
          />
        </div>
        
        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <Link 
              key={tool.id}
              to={tool.path}
              className="bg-gray-800 border border-gray-700 hover:border-green-500 rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              <div className="flex items-center mb-4">
                <Tool className="text-green-500 mr-2" size={20} />
                <h3 className="text-lg font-bold text-white">{tool.name}</h3>
              </div>
              <p className="text-gray-400">{tool.description}</p>
            </Link>
          ))}
        </div>
        
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No tools match your search. Try a different keyword.</p>
          </div>
        )}
        
        {/* Disclaimer */}
        <div className="mt-16 bg-black border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Responsible Usage</h2>
          <p className="text-gray-400 mb-2">
            These tools are provided for educational and professional security testing purposes only. 
            Always obtain proper authorization before conducting security assessments.
          </p>
          <p className="text-gray-500 text-sm">
            The developer assumes no liability for misuse or damage caused by these tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;