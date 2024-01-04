import React from 'react'
import { Collapse } from 'react-collapse'

const AccordionItem = ({question, answer, isOpen, id, openAccordion}) => {
    
  return (
    <div className="border border-gray-100 mb-4">
      <div
        onClick={() => openAccordion(id)}
        className=" py-7 px-10 select-none cursor-pointer flex justify-between"
      >
        <h4 className={`${isOpen && "text-theme-color"} text-neutral-500`}>{question}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-5 h-5 duration-200 ${!isOpen && "rotate-180"} text-neutral-500`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>

      <Collapse isOpened={isOpen}>

        <p className='pb-7 px-10 text-neutral-500'>{answer}</p>

      </Collapse>

    </div>
  )
}

export default AccordionItem