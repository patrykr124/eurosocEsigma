import {servicesData} from "@/constants/servicesRed";

import {notFound} from "next/navigation";
import AboutServices from "@/components/UI/services/serviceSite/AboutServices";
import React from "react";
import Why from "@/components/UI/services/serviceSite/Why";
import ParallaxInfo from "@/components/UI/services/serviceSite/ParallaxInfo";
import Header from "@/components/UI/services/serviceSite/Header";
import EncryptButtonRed from "@/components/UI/EncryptButtonRed";
import DoZapamietaniaRed from "@/components/UI/red/services/serviceSite/DoZapamietaniaRed";
import FAQTemplateRed from "@/components/UI/red/services/serviceSite/FAQ/FAQTemplateRed";

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        serviceId: service.id,
    }))
}

interface ServicePageProps {
    params: {
        serviceId: string;
    }
}

function Page({params}: ServicePageProps) {

    const serviceFetchData = servicesData.find((service) => service.id === params.serviceId);

    if (!serviceFetchData) {
        notFound();
    }


    return (
        <div>
            <Header title={serviceFetchData.title}
                    title2={serviceFetchData.title2}
                    headerImg={serviceFetchData.headerImg}
                    position={serviceFetchData.position}
            />

            <AboutServices titleAboutService={serviceFetchData.titleAboutService}
                           desc={<span style={{whiteSpace: 'pre-wrap'}}>{serviceFetchData.description}</span>}
                           urlImage={serviceFetchData.urlImage}
                           size={serviceFetchData.size}
                           classH2={"titleFrame-red"}
                           BUTTON={<EncryptButtonRed onClick="" textData="Zabezpiecz się"
                                                     className="bg-red-1 hover:bg-red-1-hover w-fit my-4"/>}

            />
            <Why
                iconsBlue={serviceFetchData.iconsTop}
                iconsRed={serviceFetchData.iconsRed}
                titleKorzysci={serviceFetchData?.titleKrzysci}
                titleZagrozenia={serviceFetchData?.titleZagrozenia}/>

            <ParallaxInfo classH2={"titleFrame-red"} BUTTON={<EncryptButtonRed onClick="" textData="Zabezpiecz się"
                                                                               className="bg-red-1 hover:bg-red-1-hover w-fit my-4"/>}/>
            <DoZapamietaniaRed doZapamietaniaTop={serviceFetchData.doZapamietaniaTop}
                               doZapamietaniaBottom={serviceFetchData.doZapamietaniaBottom}/>
            <FAQTemplateRed FAQLeft={serviceFetchData.FAQLeft} FAQRight={serviceFetchData.FAQRight}/>
        </div>
    );
}

export default Page;