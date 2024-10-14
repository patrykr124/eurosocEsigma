import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/UI/accordion"

interface FAQItem {
    id: number;
    title: string;
    content: string;
}

interface FAQData {
    ContentLeft: FAQItem[];
    ContentRight: FAQItem[];
}
interface FAQProps {
    data: FAQData;

}

export default function FAQ({ data }: FAQProps) {


    return (

        <Accordion type="single" collapsible className="w-full flex gap-4">
            <div className=" w-1/2 flex flex-col gap-2">
                {data.ContentLeft.map((item) => (
                    <AccordionItem key={item.id} value={`item-${item.id}`} className="bg-tertiary-background px-4 rounded-xl">
                        <AccordionTrigger className="p-medium-18">{item.title}</AccordionTrigger>
                        <AccordionContent >
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </div>
            <div className=" w-1/2 flex flex-col gap-2">
                {data.ContentRight.map((item) => (
                    <AccordionItem key={item.id} value={`item-${item.id}`} className="bg-tertiary-background px-4 rounded-xl">
                        <AccordionTrigger className="p-medium-18">{item.title}</AccordionTrigger>
                        <AccordionContent >
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </div>
        </Accordion>

    )
}
