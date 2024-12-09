
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/UI/accordion"
import {useTranslations} from "use-intl";

function AccordeonContentZagrozeniaRed() {
    const t = useTranslations("tabs.content.zagrozenia")
    return (
        <Accordion type="single" collapsible className="w-full text-white">
            <AccordionItem className="border-white/20" value="item-1">
                <AccordionTrigger className="p-medium-18">{t("title1")}</AccordionTrigger>
                <AccordionContent>
                    {t("p1")}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-white/20" value="item-2">
                <AccordionTrigger className="p-medium-18">  {t("title2")}
                </AccordionTrigger>
                <AccordionContent>
                    {t("p2")}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-white/20" value="item-3">
                <AccordionTrigger className="p-medium-18">    {t("title3")}
                </AccordionTrigger>
                <AccordionContent>
                    {t("p3")}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordeonContentZagrozeniaRed