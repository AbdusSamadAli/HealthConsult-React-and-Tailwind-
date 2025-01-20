import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq = () => {
  const [expandedItems, setExpandedItems] = useState(""); 

  const handleToggle = (value) => {
    setExpandedItems((prevExpandedItems) => {
      if (prevExpandedItems.includes(value)) {
        return prevExpandedItems.filter((item) => item !== value);
      } else {
        return [...prevExpandedItems, value];
      }
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">FAQ</h2>
      <Accordion type="multiple" className="space-y-4">
        <AccordionItem value="faq1">
          <AccordionTrigger
            className="text-xl font-semibold text-blue-700 hover:text-blue-900 transition duration-200"
            onClick={() => handleToggle("faq1")}
          >
            Can I book appointments for family members?
          </AccordionTrigger>
          <AccordionContent
            className="w-full p-4 bg-blue-50 border border-blue-200 rounded-md"
            hidden={!expandedItems.includes("faq1")} // Show or hide based on state
          >
            <p className="text-gray-600">
              Yes, you can book appointments for family members using their information. Our platform allows secure sharing and management of appointments for multiple individuals.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq2">
          <AccordionTrigger
            className="text-xl font-semibold text-blue-700 hover:text-blue-900 transition duration-200"
            onClick={() => handleToggle("faq2")}
          >
            Can I receive updates from doctors?
          </AccordionTrigger>
          <AccordionContent
            className="w-full p-4 bg-blue-50 border border-blue-200 rounded-md"
            hidden={!expandedItems.includes("faq2")} 
          >
            <p className="text-gray-600">
              Yes, you can receive updates from doctors through our platform. Once you have booked an appointment, you can securely communicate with your doctor for ongoing updates and follow-up care.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq3">
          <AccordionTrigger
            className="text-xl font-semibold text-blue-700 hover:text-blue-900 transition duration-200"
            onClick={() => handleToggle("faq3")}
          >
            Can I check the list of doctors and their specialities?
          </AccordionTrigger>
          <AccordionContent
            className="w-full p-4 bg-blue-50 border border-blue-200 rounded-md"
            hidden={!expandedItems.includes("faq3")} 
          >
            <p className="text-gray-600">
              Yes, you can view the different doctors and their specialities in the doctors page.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;

