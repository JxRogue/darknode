import React from 'react';
import { Shield, Code, Lock, Zap, Award, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">About Jerry</h1>
        <p className="text-gray-400 text-lg mb-8">
          Security researcher, exploit developer, and digital locksmith.
        </p>
        
        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Background</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I've spent over a decade in the offensive security space, with experience ranging from 
                advanced persistent threat operations to vulnerability research for major tech companies.
              </p>
              <p>
                My specialty lies in finding what others miss — the overlooked vulnerabilities, the 
                creative attack paths, the elegant bypasses that make seemingly secure systems fold.
              </p>
              <p>
                After years working behind the scenes, I've decided to share some of my knowledge and 
                tools with the broader security community. Not everything, of course — a magician never 
                reveals all their tricks.
              </p>
              <p>
                The tools and insights on this site represent a curated collection of utilities 
                I've found useful throughout my career. Use them wisely, responsibly, and perhaps 
                most importantly, creatively.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-black border-2 border-green-500 rounded-lg p-6 font-mono">
              <div className="flex mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm">
                <p className="mb-2"><span className="text-green-500">$</span> locate jerry</p>
                <p className="text-white mb-4">Operational security prevents exact geolocation</p>
                
                <p className="mb-2"><span className="text-green-500">$</span> cat /etc/experience</p>
                <p className="text-white mb-4">
                  • Former state-sponsored threat actor<br />
                  • Bug bounty hunter (Top 10 on [REDACTED])<br />
                  • Security consultant for Fortune 500s<br />
                  • Zero-day discoverer & developer
                </p>
                
                <p className="mb-2"><span className="text-green-500">$</span> cat /etc/certifications</p>
                <p className="text-white mb-4">
                  • OSCP, OSCE, OSWE<br />
                  • CREST Certified Tester<br />
                  • Custom security trainings
                </p>
                
                <p className="animate-pulse"><span className="text-green-500">$</span> _</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Expertise Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Areas of Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExpertiseCard 
              icon={<Code />}
              title="Exploit Development"
              description="Turning vulnerabilities into reliable exploit chains for various platforms and architectures."
            />
            <ExpertiseCard 
              icon={<Lock />}
              title="Vulnerability Research"
              description="Discovering zero-day vulnerabilities in applications, networks, and embedded systems."
            />
            <ExpertiseCard 
              icon={<Shield />}
              title="Red Team Operations"
              description="Planning and executing comprehensive adversary simulations against sophisticated targets."
            />
            <ExpertiseCard 
              icon={<Zap />}
              title="Custom Tool Development"
              description="Creating specialized security tools for specific offensive security requirements."
            />
            <ExpertiseCard 
              icon={<Users />}
              title="Advanced Social Engineering"
              description="Developing and implementing human-focused attack vectors with high success rates."
            />
            <ExpertiseCard 
              icon={<Award />}
              title="Security Training"
              description="Training the next generation of security professionals in advanced techniques."
            />
          </div>
        </div>
        
        {/* Philosophy Section */}
        <div className="bg-black border border-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Philosophy</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Security isn't binary — it's a gradient, a constant dance between defenders and attackers. 
              The most interesting work happens at the edges of what's considered possible.
            </p>
            <p>
              I believe in responsible disclosure and professional ethics, but also recognize that 
              sometimes systems only improve when pushed to their breaking points. That tension — between 
              breaking and building — is where real security advances happen.
            </p>
            <p>
              These tools are provided with that philosophy in mind: they're meant to help security 
              professionals test and improve systems, not to enable malicious activities. Use them to 
              make the digital world stronger, not more vulnerable.
            </p>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <FaqItem 
              question="Do you offer security consulting services?"
              answer="Yes, for select clients and projects. Contact me with details about your requirements, and we can discuss potential collaboration."
            />
            <FaqItem 
              question="Are your tools free to use?"
              answer="Yes, all tools on this website are free for both personal and commercial use. Just remember to use them responsibly and ethically."
            />
            <FaqItem 
              question="Can I request a custom tool for a specific purpose?"
              answer="Depending on the requirements and intended use, I may consider developing custom tools. Reach out via the contact form with your needs."
            />
            <FaqItem 
              question="Do you share all of your techniques publicly?"
              answer="No. While I believe in sharing knowledge with the community, certain techniques and vulnerabilities require responsible handling and may not be appropriate for public disclosure."
            />
            <FaqItem 
              question="How can I report issues with the tools?"
              answer="You can report any bugs or issues via GitHub issues on the repository, or through the contact form on this website."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="text-green-500 mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h3 className="text-lg font-bold text-white mb-2">{question}</h3>
      <p className="text-gray-400">{answer}</p>
    </div>
  );
};

export default AboutPage;