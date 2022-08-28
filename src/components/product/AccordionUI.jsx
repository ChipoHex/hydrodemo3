import React from "react";
import { ChevronRightIcon , ChevronDownIcon } from "@heroicons/react/24/outline";

const AccordionUI = ({ title, children, Id, Index,icon, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex group cursor-pointer w-full mx-auto h-16 justify-between  items-center p-2 mt-2 rounded-md bg-white shadow-lg hover:border-l-2 hover:border-indigo-300 hover:rounded-bl-none"
      >
        <div className="flex group cursor-pointer pl-5">
        <div dangerouslySetInnerHTML={{ __html: icon }}></div>
          <div className="text-black font-sans font-semibold pl-5 group-hover:text-gray-600">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-5">
          {Index !== Id ? (
            <ChevronRightIcon className="w-6 h-6 group-hover:text-gray-600 text-black" />
          ) : (
            <ChevronDownIcon className="w-6 h-6 group-hover:text-gray-600 text-black" />
          )}
        </div>
      </div>

      {Index === Id && (
        <div className="bg-white shadow-md text-md font-sans  font-medium text- w-full h-auto  pl-6 border-l-2 border-indigo-300 rounded-b-md p-4  mb-2 "
        dangerouslySetInnerHTML={{ __html: children }}>
        </div>
      )}
    </>
  );
};

export default AccordionUI;
