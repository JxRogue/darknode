import React, { useState, useEffect } from 'react';
import { Clipboard, CheckCircle } from 'lucide-react';

const Base64Tool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    if (mode === 'encode') {
      try {
        const encoded = btoa(input);
        setOutput(encoded);
      } catch (error) {
        setOutput('Error: Input contains characters that cannot be encoded');
      }
    } else {
      try {
        const decoded = atob(input);
        setOutput(decoded);
      } catch (error) {
        setOutput('Error: Invalid Base64 input');
      }
    }
  }, [input, mode]);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Base64 Encoder/Decoder</h1>
        <p className="text-gray-400 text-lg mb-8">
          Quickly encode text to Base64 or decode Base64 back to plain text.
        </p>
        
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={() => setMode('encode')}
              className={`flex-1 py-3 px-4 rounded-md font-medium text-center transition-colors duration-200 ${
                mode === 'encode' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Encode to Base64
            </button>
            <button
              onClick={() => setMode('decode')}
              className={`flex-1 py-3 px-4 rounded-md font-medium text-center transition-colors duration-200 ${
                mode === 'decode' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Decode from Base64
            </button>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">
              {mode === 'encode' ? 'Text to Encode' : 'Base64 to Decode'}
            </label>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-32 bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 font-mono focus:outline-none focus:border-green-500 transition-colors duration-200"
              placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 to decode...'}
            ></textarea>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-gray-300">
                {mode === 'encode' ? 'Base64 Output' : 'Decoded Text'}
              </label>
              <button 
                onClick={copyToClipboard}
                className="flex items-center text-gray-400 hover:text-green-500 transition-colors duration-200"
                disabled={!output}
              >
                {copied ? <CheckCircle size={16} className="mr-1" /> : <Clipboard size={16} className="mr-1" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <textarea 
              value={output}
              readOnly
              className="w-full h-32 bg-gray-900 border border-gray-700 text-green-400 rounded-lg px-4 py-3 font-mono focus:outline-none"
            ></textarea>
          </div>
        </div>
        
        <div className="bg-black border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">About Base64 Encoding</h2>
          <div className="text-gray-400 space-y-3">
            <p>
              Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. 
              It's commonly used when there is a need to encode binary data that needs to be stored and transferred 
              over media that are designed to deal with ASCII.
            </p>
            <p>
              Common uses include:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Encoding binary data in email attachments</li>
              <li>Storing complex data in XML or JSON</li>
              <li>Encoding binary data to be included in a URL</li>
              <li>Used in various authentication mechanisms</li>
            </ul>
            <p>
              For security operations, Base64 is frequently used for obfuscating payloads, encoding authentication 
              credentials, and working with binary data in text-based formats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base64Tool;