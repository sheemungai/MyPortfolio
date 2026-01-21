import BlurText from "./BlurText";

export default function AboutMe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-4 pt-2 pb-6 max-w-6xl mx-auto">
      <div className="order-2 md:order-1">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#F39237]">About Me</h1>
        <BlurText
          text="Hi, I'm Sheilla Mungai, a passionate fullstack web developer.
I am a dedicated and skilled fullstack web developer with a passion
for creating dynamic and user-friendly web applications. With expertise 
in both frontend and backend technologies, I strive to deliver seamless digital experiences 
that meet client needs and exceed expectations.I love coding and 
continuously learning new technologies to improve my skills."
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
  );
}