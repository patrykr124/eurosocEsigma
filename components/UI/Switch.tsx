'use client';
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";


function Switch() {
    const [switchButton, setSwitchButton] = useState('loading');

    const pathName = usePathname();
    const router = useRouter();



    useEffect(() => {
       if (pathName && pathName.includes("/dashboard/blue/services")) {
           setSwitchButton('blueServices')
       } else if(pathName && pathName.includes("/dashboard/red/services")) {
           setSwitchButton('redServices');
       } else if (pathName && pathName.includes("/dashboard/blue")) {
           setSwitchButton('blueTeam')
       } else if (pathName && pathName.includes("/dashboard/red")) {
           setSwitchButton('redTeam');
       }
        return () => (
            setSwitchButton('loading')
        )
    }, [pathName])

    const handleSwitch = () => {
        if (pathName && pathName.includes('/services')) {

            if (switchButton === 'blueServices') {
                router.push('/dashboard/red/services');
                setSwitchButton('redServices');

            } else if (switchButton === 'redServices') {
                router.push('/dashboard/blue/services');
                setSwitchButton('blueServices');
            }

        } else {
            if (switchButton === 'blueTeam') {
                router.push('/dashboard/red');
                setSwitchButton('redTeam');
            } else {
                router.push('/dashboard/blue');
                setSwitchButton('blueTeam');
            }
        }
    }

    return (
        <div onClick={handleSwitch}
             className={`${switchButton === "loading"
                 ? "bg-gray-400" : switchButton === "redTeam" || switchButton === "redServices" ? "bg-red-1" : "bg-blue-1"} transition-all duration-300 cursor-pointer rounded-full text-white  overflow-hidden w-[110px]  h-7  items-center justify-center`}>
            <div
                className={`${switchButton === "blueTeam" || switchButton === "blueServices" ? "justify-end" : "justify-start"} flex  items-center h-full relative px-0.5`}>
                <span
                    className={`${switchButton === "loading" ? "bg-gray-400" : switchButton === "blueTeam" || switchButton === "blueServices" ? " left-1" : "right-1"}
                  bg-black w-6 h-6 rounded-full after:content-[''] absolute `}></span>
                <p className="text-sm px-3 ">{switchButton === "blueTeam" || switchButton === "blueServices" ? "BLUE TEAM" : "RED TEAM"}</p>
            </div>
        </div>
    );
}

export default Switch;