import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Github, Twitter, Rss } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-green-500" />
              <span className="font-mono font-bold text-xl text-white">jerrychips.com</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Crafting digital weapons since 2010. Not responsible for how you use them. 
              Knowledge is neutral; intent is everything.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://github.com/jxrogue" icon={<Github />} />
              <SocialIcon href="#" icon={<Twitter />} />
              <SocialIcon href="/rss.xml" icon={<Rss />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Site</h3>
            <FooterLinks 
              links={[
                { label: 'Home', url: '/' },
                { label: 'Tools', url: '/tools' },
                { label: 'Blog', url: '/blog' },
                { label: 'About', url: '/about' },
                { label: 'Contact', url: '/contact' },
              ]} 
            />
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <FooterLinks 
              links={[
                { label: 'Disclaimer', url: '/disclaimer' },
                { label: 'Terms of Use', url: '/terms' },
                { label: 'Privacy Policy', url: '/privacy' },
              ]} 
            />
            <div className="mt-8">
              <h3 className="text-white font-bold mb-4">GPG</h3>
              <code className="text-xs text-gray-500 font-mono">
                3AF2 91B1 5FE0 D721<br />
                BA14 9D09 842F DE43
              </code>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Jerry. All rights reserved. Use at your own risk.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-green-500 transition-all duration-200"
    >
      {icon}
    </a>
  );
};

interface FooterLink {
  label: string;
  url: string;
}

interface FooterLinksProps {
  links: FooterLink[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  return (
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link 
            to={link.url}
            className="text-gray-400 hover:text-green-500 transition-colors duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Footer;