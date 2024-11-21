import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/UI/accordion"
import React from "react";

interface data {
    id: number;
    title: string;
    content: string;

}

interface Props {
    FAQLeft: data[] | undefined;
    FAQRight: data[] | undefined;
}

export default function FAQServices({FAQLeft, FAQRight}: Props) {


    return (
        <Accordion type="single" collapsible className="w-full flex flex-col lg:flex-row gap-4">
            <div className=" lg:w-1/2 flex flex-col lg:gap-2 gap-4">
                {FAQLeft?.map((item) => (
                    <AccordionItem key={item.id} value={`item-${item.id}`}
                                   className="bg-gray-3 shadow-md border  w-full flex flex-col justify-center px-4 rounded-xl">
                        <AccordionTrigger className="p-medium-18 flex w-full ">{item.title}</AccordionTrigger>
                        <AccordionContent>
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </div>
            <div className=" lg:w-1/2 flex flex-col lg:gap-2 gap-4">
                {FAQRight?.map((item) => (
                    <AccordionItem key={item.id} value={`item-${item.id}`}
                                   className="bg-gray-3 shadow-md border  w-full flex flex-col px-4  justify-center rounded-xl">
                        <AccordionTrigger className="p-medium-18 flex w-full ">{item.title}</AccordionTrigger>
                        <AccordionContent>
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </div>
        </Accordion>

    )
}
