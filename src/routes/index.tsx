import BlurText from "@/components/BlurText";
import GradientText from "@/components/GradientText";
import TextType from "@/components/TextType";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { BsTwitterX } from "react-icons/bs";
import { FaEnvelope, FaGithub, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="py-18 px-12 m-12">
          <h1 className="text-4xl font-bold text-black">
            <TextType
              text={[
                "Hi 🖐️, I'm Sheilla Mungai.",
                "A Fullstack Web Developer.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />
          </h1>
          <p className="py-4 text-gray-600 max-w-md">Passionate developer</p>

          <div className="px-6 py-7">
            <button className="font-bold bg-amber-400 shadow-amber-200 rounded-lg p-1.5 hover:shadow-lg">
              {" "}
              Download CV
            </button>
          </div>
          <div className="display-flex space-x-4 flex flex-row px-6 py-4 text-2xl">
            <a href="">
              <FaSquareInstagram color="pink" />
            </a>
            <a href="https://www.linkedin.com/in/sheilla-mungai-80a8b9319/">
              <FaLinkedin color="blue" />
            </a>
            <a href="">
              <BsTwitterX />
            </a>
          </div>
        </div>
        <div className="max-w-lg">
          <img
            className="rounded-lg"
            src="src\assets\Download_premium_png_of_PNG_Laptop_computer_portrait_sitting__by_Busbus_about_curly-removebg-preview.png"
            alt=" a laptop and aesthetic setup"
          />
        </div>
      </div>
  {/* about me section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-4 pt-2 pb-6 max-w-6xl mx-auto">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#F39237]">
            <GradientText
          colors={["#5227FF","#FF9FFC","#B19EEF"]}
          animationSpeed={8}
          showBorder={false}
          className="custom-class"
        >
          About me
        </GradientText>
          </h1>
          <BlurText
            text="Hi, I'm Sheilla Mungai, a passionate fullstack web developer.
             I am a dedicated and skilled fullstack web developer with a for creating dynamic and user-friendly web applications. With expertise in both frontend and backend technologies, I strive to deliver seamless digital experiences that meet client needs and exceed expectations.I love coding and continuously learning new technologies to improve my skills."
            delay={200}
            animateBy="words"
            direction="top"
            className="text-base md:text-lg text-gray-700 leading-relaxed"
          />
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src="src/assets/100_images_of_3D_characters_PNG_-_Transparent_Background-removebg-preview.png"
            alt="a girl pointing to the right"
            className="w-full max-w-sm md:max-w-md h-auto"
          />
        </div>
      </div>

          {/* project section */}
       
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#F39237] p-4 ml-7"> 
           <GradientText
          colors={["#5227FF","#FF9FFC","#B19EEF"]}
          animationSpeed={8}
          showBorder={false}
          className="custom-class"
        >
          My Projects
        </GradientText></h1>
        <div className="grid grid-cols-3 rounded-lg gap-6 px-4 pt-2 pb-6">
      {/* Card 1 */}
      <Card className="relative mx-auto w-full max-w-sm pt-0 group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20">
        {/* Hover overlay effect */}
        <div className="absolute inset-0 z-30 aspect-video bg-black/35 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* Image with hover zoom effect */}
        <div className="relative z-20 aspect-video w-full overflow-hidden">
          <img
            src="src/assets/Ethical AI and Predictive Analytics in Healthcare.jpg"
            alt="Healthcare system"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <CardHeader className="transition-all duration-300 group-hover:-translate-y-1">
          <CardAction>
          </CardAction>
          <CardTitle className="transition-colors duration-300 group-hover:text-amber-400">
            Healthcare system
          </CardTitle>
          <CardDescription className="group-hover:text-gray-200 transition-colors duration-300">
            A web application that connects patients with healthcare providers,
            allowing for easy appointment scheduling, medical record management,
            and telehealth consultations.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <a 
            href="https://github.com/sheemungai/MyHealthCareApp" 
            className="bg-amber-400 text-black rounded-lg p-2 px-4 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-300"
          >
            View Code
          </a>
        </CardFooter>
      </Card>

      {/* Card 2 */}
      <Card className="relative mx-auto w-full max-w-sm pt-0 group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35 group-hover:bg-black/20 transition-all duration-300" />
        
        <div className="relative z-20 aspect-video w-full overflow-hidden">
          <img
            src="src/assets/download (2).jpg"
            alt="An E-Learning Platform"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <CardHeader className="transition-all duration-300 group-hover:-translate-y-1">
          <CardAction></CardAction>
          <CardTitle className="transition-colors duration-300 group-hover:text-amber-400">
            An E-Learning Platform
          </CardTitle>
          <CardDescription className="group-hover:text-gray-200 transition-colors duration-300">
            A web application that offers online courses, interactive quizzes,
            and progress tracking for learners.It is also intergrated with Mpesa
            payment system for easy course purchases.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <a 
            href="https://github.com/sheemungai/E-Learning" 
            className="bg-amber-400 text-black rounded-lg p-2 px-4 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-300"
          >
            View Code
          </a>
        </CardFooter>
      </Card>

      {/* Card 3 */}
      <Card className="relative mx-auto w-full max-w-sm pt-0 group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35 group-hover:bg-black/20 transition-all duration-300" />
        
        <div className="relative z-20 aspect-video w-full overflow-hidden">
          <img
            src="src\assets\Portfolio 2024 - Juhi Dere.jpg"
            alt="Personal Portfolio"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <CardHeader className="transition-all duration-300 group-hover:-translate-y-1">
          <CardAction></CardAction>
          <CardTitle className="transition-colors duration-300 group-hover:text-amber-400">
            Personal Portfolio
          </CardTitle>
          <CardDescription className="group-hover:text-gray-200 transition-colors duration-300">
            A personal portfolio website showcasing my projects, skills, and
            experience as a fullstack web developer.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <a 
            href="https://github.com/sheemungai/MyPortfolio" 
            className="bg-amber-400 text-black rounded-lg p-2 px-4 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-300"
          >
            View Code
          </a>
        </CardFooter>
      </Card>
    </div>
    </div>

    {/* contact section */}
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
    </div>
  );
}
