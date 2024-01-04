import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AccordionItem from "./AccordionItem";

const Faq = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [faq, setFaq] = useState([
    {
      id: 1,
      question: "Modern Architectural Structures",
      answer:
        "Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no tristique.",
      isOpen: false,
    },
    {
      id: 2,
      question: "Modern Building Structures",
      answer:
        "Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no tristique.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Modern Design Structures",
      answer:
        "Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no tristique.",
      isOpen: false,
    },
    {
      id: 4,
      question: "Modern Urban Structures",
      answer:
        "Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no tristique.",
      isOpen: false,
    },
    {
      id: 5,
      question: "Modern Interior Structures",
      answer:
        "Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no tristique.",
      isOpen: false,
    },
  ]);

  const openAccordion = (id) => {
    setFaq(
      faq.map((el) =>
        el.id === id ? { ...el, isOpen: !el.isOpen } : { ...el, isOpen: false }
      )
    );
  };

  return (
    <div className="container">
      <div className=" py-32">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="flex items-start flex-col md:flex-row mb-20"
        >
          <div className=" w-full md:w-[34%]">
            <div className=" border-b-[1px] border-neutral-100 uppercase text-sm tracking-widest mb-4 mx-3 px-5 pt-2 pb-3 relative before:w-[6px] before:h-[6px] before:bg-theme-color before:absolute before:rounded-full before:top-[15px] before:left-1">
              Faqs
            </div>
          </div>
          <div className="w-full md:w-[66%] px-3">
            <h2 className=" uppercase text-4xl font-heading leading-[56px]  tracking-wider mb-7">
              <span className=" text-theme-color">Frequently asked</span>{" "}
              questions
            </h2>

            <div className=" pt-7">
              {faq.map(({ id, question, answer, isOpen }) => (
                <AccordionItem
                  key={id}
                  id={id}
                  openAccordion={openAccordion}
                  isOpen={isOpen}
                  question={question}
                  answer={answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
