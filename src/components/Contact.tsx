import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import GradientText from "./GradientText";
// import GradientText from "./GradientText";

export default function Contact() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
           
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 text-[#F39237] flex justify-center text-center">
               <GradientText
                                colors={["#ff6929","#FF9FFC","#f0d0a3"]}
                                animationSpeed={8}
                                showBorder={false}
                                className="custom-class"
                              >          
                              Get In Touch
                              </GradientText>
            </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 py-4 px-2 sm:px-4 md:px-5 max-w-6xl mx-auto">
            {/* Contact Form */}
            <form action="https://formsubmit.co/your@email.com" method="POST" className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
             <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://yourwebs.com/thank-you" />
              
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base font-medium">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base font-medium">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base font-medium">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-gray-700 dark:text-white text-sm sm:text-base resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-amber-400 text-gray-900 font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>

            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">Contact Information</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaEnvelope className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base">Email</h3>
                  </div>
                  <a 
                    href="mailto:mungaisheilla20@gmail.com"
                    className="text-amber-600 dark:text-amber-400 hover:underline text-sm sm:text-base break-all"
                  >
                    mungaisheilla20@gmail.com
                  </a>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaGithub className="text-gray-900 dark:text-white w-5 h-5 sm:w-6 sm:h-6" />
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base">GitHub</h3>
                  </div>
                  <a 
                    href="https://github.com/sheemungai" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-amber-600 dark:text-amber-400 hover:underline text-sm sm:text-base break-all"
                  >
                    github.com/sheemungai
                  </a>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaLinkedin className="text-blue-600 dark:text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base">LinkedIn</h3>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/sheilla-mungai-80a8b9319" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-amber-600 dark:text-amber-400 hover:underline text-sm sm:text-base break-all"
                  >
                    linkedin.com/in/sheilla-mungai-80a8b9319
                  </a>
                </div>
              </div>
            </div>
        </div>
            
        </div>
    )
}