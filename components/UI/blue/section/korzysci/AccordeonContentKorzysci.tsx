
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/UI/accordion"


function AccordeonContentKorzysci() {
    return (
        <Accordion type="single" collapsible className="w-full ">
            <AccordionItem value="item-1">
                <AccordionTrigger className="p-medium-18">Ochrona prawna Zarządu</AccordionTrigger>
                <AccordionContent>
                    Dzięki wdrożeniu najskuteczniejszego rozwiązania i okresowym sprawozdaniom.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="p-medium-18">Będziesz przygotowany
                </AccordionTrigger>
                <AccordionContent>
                    Jeśli hakerzy zaatakują Twoją firmę, będziemy przygotowani, aby wesprzeć Cię w obronie.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="p-medium-18">Natychmiastowa reakcja
                </AccordionTrigger>
                <AccordionContent>
                    na pojawiające się zagrożenia minimalizuje skutki incydentów.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="p-medium-18">24/7/365 monitoring
                </AccordionTrigger>
                <AccordionContent>
                    systemów oznacza ochronę również w dni wolne od pracy i święta.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className="p-medium-18">Monitorowanie systemu w czasie rzeczywistym
                </AccordionTrigger>
                <AccordionContent>
                    umożliwia wykrywanie włamań na wczesnym etapie.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordeonContentKorzysci