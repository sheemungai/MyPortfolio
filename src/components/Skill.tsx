import { FaCss3, FaFigma, FaHtml5, FaPython, FaReact } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
// import GradientText from "./GradientText";
import { Card, CardHeader, CardTitle } from "./ui/card";

export default function Skill (){
    return (
        <div className="p-8">
           <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#F39237] flex justify-center"> My Skills
                   </h1>

                  <p className="text-base md:text-lg text-gray-700 leading-relaxed flex justify-center items-center py-3.5">These are the skills am proficient in:</p>


           <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
    <Card className="flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center space-y-4">
        <FaFigma size={64} color="#5227FF"/>
        <CardTitle className="text-center">Figma</CardTitle>
      </CardHeader>
    </Card>
    
    <Card className="flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center space-y-4">
        <FaHtml5 size={64} color="#E34F26" />
        <CardTitle className="text-center">HTML5</CardTitle>
      </CardHeader>
    </Card>
    
    <Card className="flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center space-y-4">
        <FaReact size={64} color="#61DAFB" />
        <CardTitle className="text-center">React</CardTitle>
      </CardHeader>
    </Card>
    
    <Card className="flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center space-y-4">
        <FaPython size={64} color="#3776AB" />
        <CardTitle className="text-center">Python</CardTitle>
      </CardHeader>
    </Card>
    
    <Card className="flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center space-y-4">
      <BiLogoTypescript size={64} color="#3178C6" />
        <CardTitle className="text-center">TypeScript</CardTitle>
      </CardHeader>
    </Card>

    <Card className="flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center space-y-4">
      <DiPostgresql size={64} color="#336791" />
        <CardTitle className="text-center">PostgreSQL</CardTitle>
      </CardHeader>
    </Card>

    <Card className="flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center space-y-4">
     <RiTailwindCssFill size={64} color="#38B2AC" />
        <CardTitle className="text-center">Tailwind CSS</CardTitle>
      </CardHeader>
    </Card>

    <Card className="flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center space-y-4">
        <FaCss3 size={64} color="#264DE4" />
        <CardTitle className="text-center">CSS3</CardTitle>
      </CardHeader>
    </Card>
           </div>
        </div>
    )
}