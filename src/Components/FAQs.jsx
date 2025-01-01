import React from 'react'

const FAQs = () => {
    const toggleFaq = (index) => {
        const faqElement = document.getElementById(`faq-${index}`);
        const arrowElement = document.getElementById(`faq-arrow-${index}`);
        if (faqElement && arrowElement) {
          faqElement.classList.toggle('hidden');
          arrowElement.style.transform = faqElement.classList.contains('hidden') ? '' : 'rotate(180deg)';
        }
      };
    
  return (
    <div>
        {/* FAQ Section */}
      <div id='faqs' className="bg-white px-4 sm:px-20 py-6 sm:py-24">
        <div className="mx-auto px-6 container">
          <h2 className="mb-16 font-bold text-3xl text-center">Frequently Asked Questions (FAQ)</h2>
          
          <div className="flex md:flex-row flex-col justify-evenly items-center gap-10 bg-[#f3e8e8] shadow-2xl mx-auto p-4 sm:p-8 rounded-2xl w-full">
            <div className="relative flex justify-center items-center w-1/3">
              <img className="w-[400px] mix-blend-multiply" src="../../FaqsImg.jpg" alt="FAQ Illustration" />
            </div>
            
            <div className="space-y-1 bg-white rounded-[20px] w-full md:w-[55%] text-black">
              {[
                { question: 'How to download Tik Tok videos on iPhone?', answer: 'Copy the video link from TikTok app and paste it here to download.' },
                { question: 'Is it safe to use this website?', answer: 'Yes, our website is secure and doesn\'t store any of your personal information.' },
                { question: 'Can I download videos without watermark?', answer: 'Yes, all videos downloaded through our service are watermark-free.' },
                { question: 'Is there a limit to how many videos I can download?', answer: 'No, you can download as many videos as you want without any restrictions.' },
                { question: 'Can I download videos without watermark?', answer: 'Yes, all videos downloaded through our service are watermark-free.' },
                { question: 'Is there a limit to how many videos I can download?', answer: 'No, you can download as many videos as you want without any restrictions.' },
                 
            ].map((faq, index) => (
                <div key={index} className="rounded-xl">
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
    </div>
  )
}

export default FAQs