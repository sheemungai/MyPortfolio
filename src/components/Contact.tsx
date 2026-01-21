import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import GradientText from "./GradientText";

export default function Contact() {
    return (
        <div>
           
            <h1 className="text-3xl font-bold ">
                 <GradientText
  colors={["#5227FF","#FF9FFC","#B19EEF"]}
  animationSpeed={8}
  showBorder={false}
  className="custom-class"
>
  Get In Touch
</GradientText></h1>
        <div className="grid grid-cols-2 gap-4 py-4 px-5">
            <form action="https://formsubmit.co/your@email.com" method="POST">
             <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://yourwebs.com/thank-you" />
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-amber-400 text-gray-700 font-semibold py-2 rounded-lg hover:bg-amber-500 transition"
              >
                Send Message
              </button>
            </form>

             <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700"> <FaEnvelope color="red" />Email</h3>
                <p className="text-pink-600">mungaisheilla20@gmail.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700"> <FaGithub color="black" />GitHub</h3>
                <a href="https://github.com/sheemungai" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
                  github.com/sheemungai
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700"> <FaLinkedin color="blue" />
                LinkedIn</h3>
                <a href="https://www.linkedin.com/in/sheilla-mungai-80a8b9319" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
                  www.linkedin.com/in/sheilla-mungai-80a8b9319
                </a>
              </div>
            </div>
          </div>
        </div>
            
        </div>
    )
}