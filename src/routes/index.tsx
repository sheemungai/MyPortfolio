import TextType from "@/components/TextType";
import { createFileRoute } from "@tanstack/react-router";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="grid grid-cols-2">
      <div className="py-18 px-12 m-12">
        <h1 className="text-4xl font-bold text-black">
          <TextType
            text={["Hi 🖐️, I'm Sheilla Mungai.", "A Fullstack Web Developer."]}
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
  );
}
