"use client"
import EncryptButton from "@/components/UI/EncryptButton";
import AboutServices from "@/components/UI/services/serviceSite/AboutServices";
import DoZapamietania from "@/components/UI/services/serviceSite/DoZapamietania";
import FAQTemplate from "@/components/UI/services/serviceSite/FAQ/FAQTemplate";
import Header from "@/components/UI/services/serviceSite/Header";
import ParallaxInfo from "@/components/UI/services/serviceSite/ParallaxInfo";
import Why from "@/components/UI/services/serviceSite/Why";
import { servicesData } from "@/constants/services";
import { servicesData_EN } from "@/constants/services_EN";
import { notFound } from "next/navigation";
import { useLocale, useTranslations } from "use-intl";



interface ServicePageProps {
    params: {
        serviceId: string;
    }
}





function Page({ params }: ServicePageProps) {


    const locale = useLocale();
    const t = useTranslations("servicesPage");



    const serviceFetchAllData = locale === "pl" ? servicesData : servicesData_EN

    const serviceFetchData = serviceFetchAllData.find((service) => service.id === params.serviceId);

    if (!serviceFetchData) {
        notFound();
    }


    return (
        <div>
            <Header title={serviceFetchData.title}
                headerImg={serviceFetchData.headerImg}
                position={serviceFetchData.position}
            />
            <AboutServices title2={serviceFetchData.title2} titleAboutService={serviceFetchData.titleAboutService}
                desc={<span style={{ whiteSpace: 'pre-wrap' }}>{serviceFetchData.description}</span>}
                urlImage={serviceFetchData.urlImage}
                size={serviceFetchData.size}
                classH2={"titleFrame"}
                BUTTON={<EncryptButton textData={t("button")}
                    className="bg-blue-1 hover:bg-blue-1-hover my-4" />}
            />
            <Why
                iconsBlue={serviceFetchData.iconsTop}
                iconsRed={serviceFetchData.iconsRed}
                titleKorzysci={serviceFetchData?.titleKrzysci}
                titleZagrozenia={serviceFetchData?.titleZagrozenia} />

            <ParallaxInfo h2={serviceFetchData?.parallaxH2} p={serviceFetchData?.parallaxP} classH2={"titleFrame"} BUTTON={<EncryptButton textData={t("button")}
                className="bg-blue-1 hover:bg-blue-1-hover my-4" />} />
            <DoZapamietania doZapamietaniaTop={serviceFetchData.doZapamietaniaTop}
                doZapamietaniaBottom={serviceFetchData.doZapamietaniaBottom} />
            <FAQTemplate FAQLeft={serviceFetchData.FAQLeft} FAQRight={serviceFetchData.FAQRight} />
        </div>
    );
}

export default Page;