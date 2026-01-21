import { FaFigma } from "react-icons/fa6";
import GradientText from "./GradientText";
import { Card, CardHeader, CardTitle } from "./ui/card";

export default function Skill (){
    return (
        <div>
           <h1 className="text-3xl font-bold ">
                            <GradientText
             colors={["#5227FF","#FF9FFC","#B19EEF"]}
             animationSpeed={8}
             showBorder={false}
             className="custom-class"
           >
                My Skills
           </GradientText></h1>

           <div className="p-4 m-5 grid grid-cols-5 gap-1">
    <Card className="mx-auto w-30 max-w-sm flex  justify-center p-4 mt-6">
      <CardHeader>
        <FaFigma size={40} color="#5227FF" />
        <CardTitle>Figma</CardTitle>
       
      </CardHeader>
     
    </Card>
    <Card className="mx-auto w-30 max-w-sm flex  justify-center p-4 mt-6">
      <CardHeader>
        <FaFigma size={40} color="#5227FF" />
        <CardTitle>Figma</CardTitle>
       
      </CardHeader>
     
    </Card>
    <Card className="mx-auto w-30 max-w-sm flex  justify-center p-4 mt-6">
      <CardHeader>
        <FaFigma size={40} color="#5227FF" />
        <CardTitle>Figma</CardTitle>
       
      </CardHeader>
     
    </Card>
    <Card className="mx-auto w-30 max-w-sm flex  justify-center p-4 mt-6">
      <CardHeader>
        <FaFigma size={40} color="#5227FF" />
        <CardTitle>Figma</CardTitle>
       
      </CardHeader>
     
    </Card>
    <Card className="mx-auto w-30 max-w-sm flex  justify-center p-4 mt-6">
      <CardHeader>
        <FaFigma size={40} color="#5227FF" />
        <CardTitle>Figma</CardTitle>
       
      </CardHeader>
     
    </Card>
 

           </div>
        </div>
    )
}