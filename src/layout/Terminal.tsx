import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal as TerminalIcon, X } from 'lucide-react';

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<string[]>([
    'Welcome to jerrychips.com terminal. Type "help" for available commands.'
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const navigate = useNavigate();
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => {
      addToHistory('Available commands: help, clear, home, tools, blog, about, contact');
    },
    clear: () => {
      setHistory([]);
    },
    home: () => {
      navigate('/');
      addToHistory('Navigating to home page...');
    },
    tools: () => {
      navigate('/tools');
      addToHistory('Navigating to tools page...');
    },
    blog: () => {
      navigate('/blog');
      addToHistory('Navigating to blog page...');
    },
    about: () => {
      navigate('/about');
      addToHistory('Navigating to about page...');
    },
    contact: () => {
      navigate('/contact');
      addToHistory('Navigating to contact page...');
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === '') return;
    
    addToHistory(`> ${cmd}`);
    
    if (trimmedCmd in commands) {
      commands[trimmedCmd as keyof typeof commands]();
    } else {
      addToHistory(`Command not found: ${cmd}. Type "help" for available commands.`);
    }
    
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const addToHistory = (message: string) => {
    setHistory(prev => [...prev, message]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="fixed bottom-8 right-8 w-80 md:w-96 h-64 bg-black bg-opacity-90 border border-green-500 rounded-md overflow-hidden shadow-lg z-50">
      <div className="flex items-center justify-between bg-gray-900 px-3 py-2 border-b border-green-500">
        <div className="flex items-center">
          <TerminalIcon size={16} className="text-green-500 mr-2" />
          <span className="text-green-500 text-sm font-mono">jerrychips:~$</span>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="text-gray-400 hover:text-gray-200"
        >
          <X size={16} />
        </button>
      </div>
      <div 
        ref={terminalRef}
        className="h-48 overflow-y-auto p-2 font-mono text-xs text-gray-300"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, index) => (
          <div key={index} className={`py-1 ${line.startsWith('>') ? 'text-yellow-400' : ''}`}>
            {line}
          </div>
        ))}
        <div className="flex items-center py-1">
          <span className="text-green-500 mr-2">jerrychips:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow bg-transparent outline-none text-gray-200 font-mono text-xs"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;