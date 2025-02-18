import {motion} from "framer-motion";
import {useTranslations} from "use-intl";

function TabsSwitches({switchTabs, setSwitchTabs,css, textOtherColor}: { switchTabs: string, setSwitchTabs: any,css: string, textOtherColor: string}) {
    const t = useTranslations("tabs.tabsSwitches")
    return (
        <div className=" relative flex w-fit gap-6 lg:gap-0  items-center rounded-full  ">

            <button onClick={() => setSwitchTabs('korzysci')}
                    className={`${css}  ${switchTabs === 'korzysci' ? ' text-white' : textOtherColor}`}>{t("buttonBlue")}
            </button>
            <button onClick={() => setSwitchTabs('zagrozenia')}
                    className={`${css}   ${switchTabs === 'zagrozenia' ? ' text-white' : 'text-black'}`}>{t("buttonRed")}
            </button>


            <div
                className={`absolute inset-0 flex ${switchTabs === "korzysci" ? "justify-start" : "justify-end"}`}>
                <motion.span layout transition={{type: "spring", damping: 15, stiffness: 250}}
                             className={`h-full w-1/2 rounded-xl ${switchTabs === "korzysci" ? "bg-blue-1" : "bg-red-600"}`}/>
            </div>
        </div>
    );
}

export default TabsSwitches;