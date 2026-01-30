import GradientText from "./GradientText";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function CardImage() {
  return (

    <div className="p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#F39237] flex justify-center text-center"> 
          <GradientText
                          colors={["#ff6929","#FF9FFC","#f0d0a3"]}
                          animationSpeed={8}
                          showBorder={false}
                          className="custom-class"
                        >          
                        My Projects
                        </GradientText></h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed flex justify-center items-center py-3.5 text-center px-4">These are the projects I have worked on. Check them out below.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg gap-4 sm:gap-6 px-2 sm:px-4 pt-2 pb-6">
      {/* Card 1 */}
      <Card className="relative mx-auto w-full max-w-sm pt-0 group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20">
        {/* Hover overlay effect */}
        <div className="absolute inset-0 z-30 aspect-video bg-black/35 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* Image with hover zoom effect */}
        <div className="relative z-20 aspect-video w-full overflow-hidden">
          <img
            src="/assets/Ethical AI and Predictive Analytics in Healthcare.jpg"
            alt="Healthcare system"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        
        
        <CardHeader className="transition-all duration-300 group-hover:-translate-y-1">
          <CardAction>
          </CardAction>
          <CardTitle className="transition-colors duration-300 group-hover:text-amber-400 text-base sm:text-lg">
            Healthcare System
          </CardTitle>
          <CardDescription className="group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
            A web application that connects patients with healthcare providers,
            allowing for easy appointment scheduling, medical record management,
            and telehealth consultations.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <a 
            href="https://github.com/sheemungai/MyHealthCareApp" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 text-black rounded-lg p-2 px-4 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-300 text-sm sm:text-base"
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
            src="/assets/download (2).jpg"
            alt="An E-Learning Platform"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <CardHeader className="transition-all duration-300 group-hover:-translate-y-1">
          <CardAction></CardAction>
          <CardTitle className="transition-colors duration-300 group-hover:text-amber-400 text-base sm:text-lg">
            E-Learning Platform
          </CardTitle>
          <CardDescription className="group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
            A web application that offers online courses, interactive quizzes,
            and progress tracking for learners. It is also integrated with Mpesa
            payment system for easy course purchases.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <a 
            href="https://github.com/sheemungai/E-Learning" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 text-black rounded-lg p-2 px-4 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-300 text-sm sm:text-base"
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
            src="/assets/Portfolio 2024 - Juhi Dere.jpg"
            alt="Personal Portfolio"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <CardHeader className="transition-all duration-300 group-hover:-translate-y-1">
          <CardAction></CardAction>
          <CardTitle className="transition-colors duration-300 group-hover:text-amber-400 text-base sm:text-lg">
            Personal Portfolio
          </CardTitle>
          <CardDescription className="group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
            A personal portfolio website showcasing my projects, skills, and
            experience as a fullstack web developer.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <a 
            href="https://github.com/sheemungai/MyPortfolio" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 text-black rounded-lg p-2 px-4 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-400/30 hover:bg-amber-300 text-sm sm:text-base"
          >
            View Code
          </a>
        </CardFooter>
      </Card>
    </div>
    </div>
  );
}