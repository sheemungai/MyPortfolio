import { FaCss3, FaFigma, FaHtml5, FaPython, FaReact } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
// import GradientText from "./GradientText";
import { Card, CardHeader, CardTitle } from "./ui/card";
import GradientText from "./GradientText";

export default function Skill (){
    return (
        <div className="p-4 sm:p-6 md:p-8">
           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#F39237] flex justify-center text-center"> 
              <GradientText
                               colors={["#ff6929","#FF9FFC","#f0d0a3"]}
                               animationSpeed={8}
                               showBorder={false}
                               className="custom-class"
                             >          
                             My Skills
                             </GradientText>
           </h1>

           <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed flex justify-center items-center py-3.5 text-center px-4">
             These are the skills I'm proficient in:
           </p>

           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
             <Card className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow">
               <CardHeader className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 p-2 sm:p-4">
                 <FaFigma className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" color="#5227FF"/>
                 <CardTitle className="text-center text-sm sm:text-base md:text-lg">Figma</CardTitle>
               </CardHeader>
             </Card>
             
             <Card className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow">
               <CardHeader className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 p-2 sm:p-4">
                 <FaHtml5 className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" color="#E34F26" />
                 <CardTitle className="text-center text-sm sm:text-base md:text-lg">HTML5</CardTitle>
               </CardHeader>
             </Card>
             
             <Card className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow">
               <CardHeader className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 p-2 sm:p-4">
                 <FaReact className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" color="#61DAFB" />
                 <CardTitle className="text-center text-sm sm:text-base md:text-lg">React</CardTitle>
               </CardHeader>
             </Card>
             
             <Card className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow">
               <CardHeader className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 p-2 sm:p-4">
                 <FaPython className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" color="#3776AB" />
                 <CardTitle className="text-center text-sm sm:text-base md:text-lg">Python</CardTitle>
               </CardHeader>
             </Card>
             
             <Card className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow">
               <CardHeader className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 p-2 sm:p-4">
                 <BiLogoTypescript className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" color="#3178C6" />
                 <CardTitle className="text-center text-sm sm:text-base md:text-lg">TypeScript</CardTitle>
               </CardHeader>
             </Card>

             <Card className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow">
               <CardHeader className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 p-2 sm:p-4">
                 <DiPostgresql className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" color="#336791" />
                 <CardTitle className="text-center text-sm sm:text-base md:text-lg">PostgreSQL</CardTitle>
               </CardHeader>
             </Card>

             <Card className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow">
               <CardHeader className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 p-2 sm:p-4">
                 <RiTailwindCssFill className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" color="#38B2AC" />
                 <CardTitle className="text-center text-sm sm:text-base md:text-lg">Tailwind CSS</CardTitle>
               </CardHeader>
             </Card>

             <Card className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 hover:shadow-lg transition-shadow">
               <CardHeader className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 p-2 sm:p-4">
                 <FaCss3 className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" color="#264DE4" />
                 <CardTitle className="text-center text-sm sm:text-base md:text-lg">CSS3</CardTitle>
               </CardHeader>
             </Card>
           </div>
        </div>
    )
}