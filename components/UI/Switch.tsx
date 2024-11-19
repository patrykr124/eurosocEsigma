'use client';
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";


function Switch() {
    const [switchButton, setSwitchButton] = useState('loading');

    const pathName = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (pathName && pathName.startsWith("/dashboard/blue")) {
            setSwitchButton('blueTeam')
        } else if (pathName && pathName.startsWith("/dashboard/red")) {
            setSwitchButton('redTeam');
        }
    }, [pathName])

    const handleSwitch = () => {
        if (switchButton === 'blueTeam') {
            router.push('/dashboard/red');
            setSwitchButton('blueTeam');
        } else {
            router.push('/dashboard/blue');
            setSwitchButton('redTeam');
        }
    }


    return (
        <div onClick={handleSwitch}
             className={`${switchButton === "loading"
                 ? "bg-gray-400" : switchButton === "redTeam" ? "bg-red-1" : "bg-blue-1"} transition-all duration-300 cursor-pointer rounded-full text-white  overflow-hidden w-[110px]  h-7  items-center justify-center`}>
            <div
                className={`${switchButton === "blueTeam" ? "justify-end" : "justify-start"} flex  items-center h-full relative`}>

                <span className={`${switchButton === "loading" ? "bg-gray-400" : switchButton === "blueTeam" ? " left-1" : "right-1"}
                  bg-black w-6 h-6 rounded-full after:content-[''] absolute `}></span>
                <p className="text-sm px-3 ">{switchButton === "blueTeam" ? "BLUE TEAM" : "RED TEAM"}</p>

            </div>
        </div>
    );
}

export default Switch;