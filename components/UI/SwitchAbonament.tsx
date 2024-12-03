import {motion} from "framer-motion";
import React, {useState} from "react";
import {usePathname} from "next/navigation";

interface Props {

    setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

function SwitchAbonament({setActiveFilters}: Props) {
    const BUTTON_CLASSES = "h5-link flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors justify-center w-64 relative z-10"
    const [switchTabs, setSwitchTabs] = useState('jednorazowe')

    function handleSwitch(tab: string) {
        setSwitchTabs(tab)
        setActiveFilters((prevFilters) => {
            const updatedFilters = prevFilters.filter((f: string) => f !== "jednorazowe" && f !== "abonamentowe");
            return [...updatedFilters, tab];
        });
    }

    const pathName = usePathname() || "";

    const BG_COLOR = pathName && pathName.startsWith("/dashboard/blue") ? (switchTabs === 'jednorazowe' ? 'bg-gray-1' : 'bg-blue-1') : pathName && pathName.startsWith("/dashboard/red") ? (switchTabs === 'jednorazowe' ? 'bg-gray-1' : 'bg-red-1') : ''

    const HANDLE_JEDNORAZOWE_CSS = switchTabs === 'jednorazowe' ? ' text-white' : 'text-black'
    const HANDLE_ABONAMENTOWE_CSS = switchTabs === 'abonamentowe' ? ' text-white ' : 'text-black'

    return (
        <div className="w-full hidden lg:flex flex-col lg:flex-row justify-between">
            <div className="">
                <h2 className="h2-medium text-center lg:text-left">Ochrona jednym kliknięciem</h2>
            </div>

            <div className=" relative flex w-fit  rounded-full  ">
                <button onClick={() => handleSwitch('jednorazowe')}
                        className={`${BUTTON_CLASSES}  ${HANDLE_JEDNORAZOWE_CSS}`}>JEDNORAZOWE
                </button>
                <button onClick={() => handleSwitch('abonamentowe')}
                        className={`${BUTTON_CLASSES}   ${HANDLE_ABONAMENTOWE_CSS}`}>ABONAMENTOWE
                </button>
                <div
                    className={`absolute inset-0 flex ${switchTabs === "jednorazowe" ? "justify-start" : "justify-end"}`}>
                    <motion.span layout transition={{type: "spring", damping: 15, stiffness: 250}}
                                 className={`h-full w-1/2 rounded-2xl ${BG_COLOR}`}/>
                </div>
            </div>
        </div>
    );
}

export default SwitchAbonament;