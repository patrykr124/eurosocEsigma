import { servicesData } from "@/constants/services";

import EncryptButton from "@/components/UI/EncryptButton";
import { servicesData_EN } from "@/constants/services_EN";
import { Link } from "@/navigation";
import { motion } from "framer-motion";
import { useLocale } from "use-intl";
import { useTranslations } from "next-intl";

interface Props {
    activeFilters: string[]
}

function RightSideBox({ activeFilters }: Props) {
    const locale = useLocale();
    const t = useTranslations("services")
    const servicesAllData = locale === "pl" ? servicesData : servicesData_EN

    function truncetData(word: string, maxWord: number) {
        if (!word) return;
        if (word.length > maxWord) {
            return word.slice(0, maxWord) + "...";
        }
    }

    const servicesFilterData = servicesAllData.filter((item) =>
        activeFilters.length === 0 || activeFilters.includes(item.filter) || activeFilters.includes(item.filter2)
    );



    return (
        <div className="grid sm:grid-cols-3 gap-4 w-full">
            {servicesFilterData.map((item) => (
                <motion.div key={item.id} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} >
                    <Link
                        className='group relative shadow-light text-black flex  rounded-xl overflow-hidden'
                        href={item.url}>
                        <div className="w-full relative bg-gray-3  flex flex-col ">
                            <div className="top ">
                                <div className="relative w-full h-[160px] flex justify-center items-center p-2.5"
                                    style={{ backgroundImage: `url("${item.headerImg}")`, backgroundSize: "cover" }}>
                                    <h2 className='text-white lg:p-regular-24 p-regular-18 text-center '>{item.title}</h2>
                                </div>
                            </div>
                            <div className="bottom h-[160px] md:h-[220px]  flex flex-col justify-between lg:py-6 py-3 px-3 lg:px-6 ">
                                <div className="flex flex-col gap-2">
                                    <p className='p-medium-14 mb-2'>{truncetData(item.description, 160)}</p>
                                </div>
                                <EncryptButton onClick={item.url} textData={t("encrypt2")}
                                    className="bg-blue-1 hover:blue-1-hover" />
                            </div>
                        </div>

                    </Link>
                </motion.div>
            ))}
        </div>
    );
}

export default RightSideBox;