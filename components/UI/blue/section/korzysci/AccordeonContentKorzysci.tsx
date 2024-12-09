
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/UI/accordion"
import {useTranslations} from "use-intl";


function AccordeonContentKorzysci() {
    const t = useTranslations("tabs.content.korzysci")

    return (
        <Accordion type="single" collapsible className="w-full ">
            <AccordionItem value="item-1" className="border-gray-1/20">
                <AccordionTrigger className="p-medium-18">{t("title1")}</AccordionTrigger>
                <AccordionContent>
                    {t("p1")}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-gray-1/20">
                <AccordionTrigger className="p-medium-18">{t("title2")}
                </AccordionTrigger>
                <AccordionContent>
                    {t("p2")}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-gray-1/20">
                <AccordionTrigger className="p-medium-18">{t("title3")}
                </AccordionTrigger>
                <AccordionContent>
                    {t("p3")}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-gray-1/20">
                <AccordionTrigger className="p-medium-18">{t("title4")}
                </AccordionTrigger>
                <AccordionContent>
                    {t("p4")}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-gray-1/20">
                <AccordionTrigger className="p-medium-18">{t("title5")}
                </AccordionTrigger>
                <AccordionContent>
                    {t("p5")}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordeonContentKorzysci