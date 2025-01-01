import React from 'react'

const FeatureComponent = () => {
  return (
    <div>
     {/* Features Section */}
     <div className="bg-slate-900 py-24">
        <div className="mx-auto px-6 container">
          <h2 className="mb-16 font-bold text-4xl text-center text-white">
            Here are some of the features<br/>
            of this website
          </h2>
          
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-4xl">
            {[
              { title: 'No Watermark', description: 'Download videos without any watermark added from the website.', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
              { title: 'HD Quality', description: 'Download high quality videos up to 4K quality.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'Responsive', description: 'Works on all devices such as Android, iOS, Windows, etc.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
              { title: 'Easy', description: 'It\'s very easy to download videos, just three steps to complete.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
              { title: 'Fast', description: 'Download videos from TikTok in just one click.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'User Friendly', description: 'This is easy and friendly service, more like any social media using.', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
            ].map((feature, index) => (
              <div key={index} className="border-white/10 bg-white backdrop-blur-md p-6 border rounded-xl">
                <div className="flex justify-center items-center bg-purple-500/10 mb-4 rounded-lg w-12 h-12">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                  </svg>
                </div>
                <h3 className="mb-2 font-[700]">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
</div>
  )
}

export default FeatureComponent