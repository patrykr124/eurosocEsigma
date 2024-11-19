
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/UI/accordion"

function AccordeonContentZagrozeniaRed() {
    return (
        <Accordion type="single" collapsible className="w-full text-white">
            <AccordionItem className="border-white/20" value="item-1">
                <AccordionTrigger className="p-medium-18">Liczba zagrożeń w cyberprzestrzeni wzrasta w tempie wykładniczym</AccordionTrigger>
                <AccordionContent>
                    Według najnowszych danych, co minutę powstaje 375 nowych zagrożeń, a liczba włamań z wykorzystaniem ransomware w lipcu 2021 roku przekroczyła wartość wszystkich włamań w 2020 roku.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-white/20" value="item-2">
                <AccordionTrigger className="p-medium-18">Wycieki danych są jednym z największych zagrożeń dla organizacji
                </AccordionTrigger>
                <AccordionContent>
                    Co godzinę nawet milion rekordów danych jest narażonych na szwank pod względem bezpieczeństwa informacji. Ponadto w Europie obowiązuje GDPR, a wycieki danych osobowych wiążą się z wysokimi karami finansowymi.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-white/20" value="item-3">
                <AccordionTrigger className="p-medium-18">Straty finansowe i kary
                </AccordionTrigger>
                <AccordionContent>
                    Obecnie firmy tracą ponad 16 miliardów dolarów dziennie z powodu cyberataków, a kwota ta rośnie z roku na rok. Dodatkowo należy pamiętać, że kara za wyciek danych osobowych kosztuje do 20 mln euro lub 4% światowego obrotu.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordeonContentZagrozeniaRed