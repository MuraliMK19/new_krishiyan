import { useEffect, useRef, useState } from "react";
import { MdCheckCircle, MdArrowForward } from "react-icons/md";
import LearnMoreButton from "./LearnMoreButton";
import ScrollToTopArrow from "./ScrollToTopArrow";

const Hero2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hero2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (hero2Ref.current) {
      observer.observe(hero2Ref.current);
    }

    return () => {
      if (hero2Ref.current) {
        observer.unobserve(hero2Ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={hero2Ref}
      className={`flex flex-col md:flex-row items-center justify-between p-4 md:p-10 bg-[#d8ffd885] ${isVisible ? "fade-in" : ""
        }`}
    >
      <ScrollToTopArrow />
      <div className="mb-4 md:mb-0 w-full md:w-[47%]">
        <img
          src="Images/home-3.png"
          alt="Your Hero2 Image Description"
          className="w-full h-full object-cover rounded-tr-[2rem]"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left mx-auto">
        <div>
          <ul>
            <li className="text-2xl p-5 font-semibold text-justify text-gray-700">Krishiyan empowers farmers by providing them with access to market information, quality assessment tools, and training resources. </li>
            <li className="text-2xl p-5 font-semibold text-justify text-gray-700">By equipping farmers with knowledge and resources, Krishiyan enables them to maximize their productivity, improve the quality of their produce, and achieve fair prices for their crops.</li>
          </ul>
        </div>

        {/* 
        <h1 className="text-xl md:text-[1.75rem] font-semibold mb-0">
          Advanced platform for supply chain management in
        </h1>
        <h1 className="text-xl md:text-[1.75rem] font-semibold mb-8">
          Agriculture by connecting 2.5L+ rural input dealers
        </h1>

        <ul className="list-disc pl-5 space-y-4 text-left">
          <li className="text-lg flex items-center space-x-2 text-gray-700 font-semibold">
            <MdCheckCircle className="text-blue-500" />
            <span>
              We Nurture rural Agri- Input dealers for scientific crop
              production techniques.
            </span>
          </li>
          <li className="text-lg flex items-center space-x-2 text-gray-700 font-semibold">
            <MdCheckCircle className="text-blue-500" />
            <span>
              Help farmers get accurate & Timely crop advisory solutions.
            </span>
          </li>
          <li className="text-lg flex items-center space-x-2 text-gray-700 font-semibold">
            <MdCheckCircle className="text-blue-500" />
            <span>
              Reduce per acre input cost and substantially increase per acre
              profit.
            </span>
          </li>
          <li className="text-lg flex items-center space-x-2 text-gray-700 font-semibold">
            <MdCheckCircle className="text-blue-500" />
            <span>Help in easy setting up an Agri Input business.</span>
          </li>
        </ul> */}

        <div className="space-x-2 px-4 md:px-6 py-2 mt-8 md:mt-12 ml-0 md:ml-64">
          <LearnMoreButton />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
