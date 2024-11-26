import {motion} from "framer-motion";
import React from "react";

interface Props {
    BUTTON_CLASSES: string;
    setSwitchTabs: React.Dispatch<React.SetStateAction<string>>;
    switchTabs: string;
}

function SwitchAbonament({setSwitchTabs,switchTabs,BUTTON_CLASSES}: Props) {
    return (
        <div className="w-full hidden lg:flex flex-col lg:flex-row justify-between">
            <div className="">
                <h2 className="h2-medium text-center lg:text-left">Ochrona jednym kliknięciem</h2>
            </div>

            <div className=" relative flex w-fit  rounded-full  ">
                <button onClick={() => setSwitchTabs('Abonamentowe')}
                        className={`${BUTTON_CLASSES}  ${switchTabs === 'Abonamentowe' ? ' text-white' : 'text-black'}`}>JEDNORAZOWE
                </button>
                <button onClick={() => setSwitchTabs('Jednorazowe')}
                        className={`${BUTTON_CLASSES}   ${switchTabs === 'Jednorazowe' ? ' text-white' : 'text-black'}`}>ABONAMENTOWE
                </button>
                <div
                    className={`absolute inset-0 flex ${switchTabs === "Abonamentowe" ? "justify-start" : "justify-end"}`}>
                    <motion.span layout transition={{type: "spring", damping: 15, stiffness: 250}}
                                 className={`h-full w-1/2 rounded-2xl ${switchTabs === "Abonamentowe" ? "bg-blue-1" : "bg-red-600"}`}/>
                </div>
            </div>
        </div>
    );
}

export default SwitchAbonament;