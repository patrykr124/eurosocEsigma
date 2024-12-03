import {Accordion} from "@radix-ui/react-accordion";
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/UI/accordion";
import LeftSideBox from "@/components/UI/services/LeftSideBox";
import React from "react";

interface Props {
    setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>
}

function FilterMobile({setActiveFilters} : Props) {
    return (
        <div className="lg:hidden w-full">

                <Accordion type="single" collapsible className="w-full gap-4 flex flex-col lg:flex-row">
                    <AccordionItem value='1'
                                   className="bg-gray-3 shadow-md border  w-full flex flex-col justify-center px-4 rounded-xl">
                        <AccordionTrigger className="p-medium-18 flex w-full">Filtr</AccordionTrigger>
                        <AccordionContent>
                            <LeftSideBox setActiveFilters={setActiveFilters}/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

        </div>
    );
}

export default FilterMobile;