import React from 'react'
import Monitoring1 from '../../../../public/assets/img/monitoringImg1.png'
import Image from 'next/image'
import EncryptButton from '../../EncryptButton'
import Parciple from "@/components/UI/blue/section/Onas/Parciple";
import ParcipleService from "@/components/UI/services/serviceSite/ParcipleService";

interface props {
    desc: React.ReactNode,
    titleAboutService: string,
    urlImage: string | undefined,
    size: number | undefined,
    classH2: string,
    BUTTON: React.ReactNode,
}

export default function AboutServices({desc, titleAboutService, urlImage, size,classH2,BUTTON}: props) {
    return (
        <section className='common-padding' style={{
            backgroundImage: `url("/assets/img/backgroundLeft.png")`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="wrapper">
                <div className="flex lg:flex-row flex-col ">
                    <div className="left  flex-1 flex flex-col">
                        <h2 className={classH2}>O USŁUDZE</h2>
                        <h2 className='h2-medium-42'>{titleAboutService}</h2>
                        <p>{desc}</p>
                        {BUTTON}
                    </div>
                    <div className="right flex-1 flex justify-center items-center -mb-10 -mt-10">

                        <ParcipleService url={urlImage} size={size}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
