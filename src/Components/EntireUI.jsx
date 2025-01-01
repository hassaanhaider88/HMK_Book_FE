import React, { useState } from 'react';

const TikTokDownloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  const handleDownload = (e) => {
    e.preventDefault();
    // Implement download logic here
    console.log('Downloading video from:', videoUrl);
  };

  const toggleFaq = (index) => {
    const faqElement = document.getElementById(`faq-${index}`);
    const arrowElement = document.getElementById(`faq-arrow-${index}`);
    if (faqElement && arrowElement) {
      faqElement.classList.toggle('hidden');
      arrowElement.style.transform = faqElement.classList.contains('hidden') ? '' : 'rotate(180deg)';
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen font-['Poppins',sans-serif] text-white">
      {/* Navigation */}
      <nav className="mx-auto px-6 py-4 container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <svg className="h-8" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="url(#gradient)"/>
              <defs>
                <linearGradient id="gradient" x1="2" y1="2" x2="22" y2="22">
                  <stop offset="0%" stopColor="#7C3AED"/>
                  <stop offset="100%" stopColor="#EC4899"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="font-semibold text-xl">downtik.to</span>
          </div>
          <div className="flex items-center gap-8">
            <button onClick={() => setActiveTab('home')} className={`text-sm hover:text-purple-400 ${activeTab === 'home' ? 'text-purple-400' : ''}`}>Home</button>
            <button onClick={() => setActiveTab('language')} className={`text-sm hover:text-purple-400 ${activeTab === 'language' ? 'text-purple-400' : ''}`}>Language</button>
            <button onClick={() => setActiveTab('extension')} className={`text-sm hover:text-purple-400 ${activeTab === 'extension' ? 'text-purple-400' : ''}`}>FindFastExtension</button>
            <button onClick={() => setActiveTab('faq')} className={`text-sm hover:text-purple-400 ${activeTab === 'faq' ? 'text-purple-400' : ''}`}>FAQ</button>
            <button className="bg-white hover:bg-gray-100 px-6 py-2 rounded-full font-medium text-gray-900 text-sm transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-[radial-gradient(circle_at_center,_rgba(88,28,135,0.15)_0%,_rgba(15,23,42,1)_100%)] min-h-[90vh]">
        <div className="relative mx-auto px-6 pt-20 pb-32 container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-8 font-bold text-6xl leading-tight">
              Download <span className="bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-transparent">TikTok</span><br/>
              Video by <span className="bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-transparent">Link!</span>
            </h1>
            
            <div className="flex justify-center items-center gap-6 mb-10">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full w-2 h-2"></div>
                <span className="text-sm">Unlimited Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full w-2 h-2"></div>
                <span className="text-sm">No Watermark!</span>
              </div>
            </div>

            <form onSubmit={handleDownload} className="relative mx-auto mb-20 max-w-xl">
              <input
                type="text"
                placeholder="Paste link here!"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="border-gray-700 focus:border-purple-500 bg-gray-800/50 px-6 py-4 border rounded-full w-full text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="top-2 right-2 absolute bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] hover:opacity-90 px-8 py-2 rounded-full font-medium text-sm text-white transition-opacity"
              >
                Download
              </button>
            </form>

            {/* Phone Mockups */}
            <div className="relative flex justify-center items-center gap-6">
              <img src="/placeholder.svg?height=600&width=280" alt="TikTok App Screenshot" className="drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] rounded-[2.5rem] w-[280px] filter" />
              <img src="/placeholder.svg?height=600&width=280" alt="TikTok App Screenshot" className="drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] rounded-[2.5rem] w-[280px] filter" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-900 py-24">
        <div className="mx-auto px-6 container">
          <h2 className="mb-16 font-bold text-3xl text-center">
            Here are some of the features<br/>
            of this website
          </h2>
          
          <div className="gap-6 grid grid-cols-3 mx-auto max-w-4xl">
            {[
              { title: 'No Watermark', description: 'Download videos without any watermark added from the website.', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
              { title: 'HD Quality', description: 'Download high quality videos up to 4K quality.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'Responsive', description: 'Works on all devices such as Android, iOS, Windows, etc.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
              { title: 'Easy', description: 'It\'s very easy to download videos, just three steps to complete.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
              { title: 'Fast', description: 'Download videos from TikTok in just one click.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'User Friendly', description: 'This is easy and friendly service, more like any social media using.', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
            ].map((feature, index) => (
              <div key={index} className="border-white/10 bg-slate-800/50 backdrop-blur-md p-6 border rounded-xl">
                <div className="flex justify-center items-center bg-purple-500/10 mb-4 rounded-lg w-12 h-12">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-slate-900 py-24">
        <div className="mx-auto px-6 container">
          <h2 className="mb-16 font-bold text-3xl text-center">Frequently asked questions (FAQ)</h2>
          
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <img src="/placeholder.svg?height=200&width=200" alt="FAQ Illustration" className="-top-24 -left-24 absolute w-48" />
            </div>
            
            <div className="space-y-4">
              {[
                { question: 'How to download Tik Tok videos on iPhone?', answer: 'Copy the video link from TikTok app and paste it here to download.' },
                { question: 'Is it safe to use this website?', answer: 'Yes, our website is secure and doesn\'t store any of your personal information.' },
                { question: 'Can I download videos without watermark?', answer: 'Yes, all videos downloaded through our service are watermark-free.' },
                { question: 'Is there a limit to how many videos I can download?', answer: 'No, you can download as many videos as you want without any restrictions.' },
              ].map((faq, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl">
                  <button className="flex justify-between items-center p-6 w-full text-left" onClick={() => toggleFaq(index)}>
                    <span className="font-medium text-sm">{faq.question}</span>
                    <svg id={`faq-arrow-${index}`} className="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div id={`faq-${index}`} className="hidden px-6 pb-6 text-gray-400 text-sm">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-gray-800/50 bg-slate-900 py-8 border-t">
        <div className="mx-auto px-6 container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <svg className="h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="url(#gradient-footer)"/>
                <defs>
                  <linearGradient id="gradient-footer" x1="2" y1="2" x2="22" y2="22">
                    <stop offset="0%" stopColor="#7C3AED"/>
                    <stop offset="100%" stopColor="#EC4899"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-semibold">downtik.to</span>
            </div>
            <div className="flex gap-8 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TikTokDownloader;

