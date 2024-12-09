import {motion} from "framer-motion";
import React, {useState} from "react";
import {usePathname} from "next/navigation";
import {useTranslations} from "use-intl";

interface Props {

    setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

function SwitchAbonament({setActiveFilters}: Props) {
    const t = useTranslations("homeServices");
    const BUTTON_CLASSES = "h5-link flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors justify-center w-64 relative z-10"
    const [switchTabs, setSwitchTabs] = useState(t('switchTitle1'))

    function handleSwitch(tab: string) {
        setSwitchTabs(tab)
        setActiveFilters((prevFilters) => {
            const updatedFilters = prevFilters.filter((f: string) => f !== t('switchTitle1') && f !== t('switchTitle2'));
            return [...updatedFilters, tab];
        });
    }

    const pathName = usePathname() || "";

    const BG_COLOR = pathName && pathName.includes("/dashboard/blue") ? (switchTabs === t('switchTitle1') ? 'bg-gray-1' : 'bg-blue-1') : pathName && pathName.includes("/dashboard/red") ? (switchTabs === t('switchTitle1') ? 'bg-gray-1' : 'bg-red-1') : ''

    const HANDLE_JEDNORAZOWE_CSS = switchTabs === t('switchTitle1') ? ' text-white' : 'text-black'
    const HANDLE_ABONAMENTOWE_CSS = switchTabs === t('switchTitle2') ? ' text-white ' : 'text-black'

    return (
        <div className="w-full hidden lg:flex flex-col lg:flex-row justify-between">
            <div className="">
                <h2 className="h2-medium text-center lg:text-left">{t("title2")}</h2>
            </div>

            <div className=" relative flex w-fit  rounded-full  ">
                <button onClick={() => handleSwitch(t('switchTitle1'))}
                        className={`${BUTTON_CLASSES}  ${HANDLE_JEDNORAZOWE_CSS} uppercase`}>{t('switchTitle1')}
                </button>
                <button onClick={() => handleSwitch(t('switchTitle2'))}
                        className={`${BUTTON_CLASSES}   ${HANDLE_ABONAMENTOWE_CSS} uppercase`}>{t('switchTitle2')}
                </button>
                <div
                    className={`absolute inset-0 flex ${switchTabs === t('switchTitle1') ? "justify-start" : "justify-end"}`}>
                    <motion.span layout transition={{type: "spring", damping: 15, stiffness: 250}}
                                 className={`h-full w-1/2 rounded-2xl ${BG_COLOR}`}/>
                </div>
            </div>
        </div>
    );
}

export default SwitchAbonament;