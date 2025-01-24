import { servicesData } from "@/constants/servicesRed"
import { servicesDataRed_EN } from "@/constants/servicesRed_EN"


interface Props {
    children: React.ReactNode,
    params: { serviceId: string, locale: string }
}




export async function generateMetadata({ params }: Props) {
    const l = params.locale

    const allMeta = l === "pl" ? servicesData : servicesDataRed_EN
    const meta = allMeta.find((item) => item.id === params.serviceId)
    return {
        title: meta?.seo?.title,
        description: meta?.seo?.description,
        keywords: meta?.seo?.keywords,
    }
}




export default function layout({ children }: Props) {
    return (
        <>
            {children}
        </>
    )
}