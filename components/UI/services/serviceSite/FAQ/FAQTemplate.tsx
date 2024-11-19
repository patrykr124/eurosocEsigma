import React from "react";
import FAQServices from "@/components/UI/services/serviceSite/FAQ/FAQServices";

interface data {
    id: number;
    title: string;
    content: string;

}

interface Props {
    FAQLeft: data[]
    FAQRight: data[]
}

function FaqTemplate({FAQLeft, FAQRight}: Props) {
    return (
        <div className="common-padding bg-gray-3">
            <div className="wrapper flex flex-col gap-10">
                <div className="title flex flex-col">
                    <h2 className="titleFrame">FAQ</h2>
                    <h2 className="h2-medium-42">Pytania i odpowiedzi</h2>

                </div>
                <FAQServices FAQLeft={FAQLeft} FAQRight={FAQRight}/>
            </div>
        </div>
    );
}

export default FaqTemplate;