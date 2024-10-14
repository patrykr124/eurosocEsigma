import React from 'react'
import Monitoring1 from '../../../../public/assets/img/monitoringImg1.png'
import Image from 'next/image'
import EncryptButton from '../../EncryptButton'

export default function AboutServices() {
    return (
        <section className='common-padding' style={{ backgroundImage: `url("/assets/img/background.png")`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="wrapper">
                <div className="flex">
                    <div className="left flex-1 flex flex-col">
                        <h2 className='titleFrame'>O USŁUDZĘ</h2>
                        <h2 className='h2-medium-42'>Identify and understand your cyber security weaknesses.</h2>
                        <p>Cyber vulnerability assessments and vulnerability scanning services are designed to identify all possible routes of attack. By identifying the attack surface of your external and internal IT estate, we can gain an understanding of security weaknesses in your environment.

                            At In.security, we use automated vulnerability scanning to isolate and quantify potential vulnerabilities as well as measure their severity and likelihood of exploitation. To ensure your organisation is equipped against attack, our vulnerability assessments are the fastest and most cost-effective way to gain the best understanding and employ comprehensive preparation.</p>
                        <EncryptButton textData="Zapisz się" className='w-fit my-4' />
                    </div>
                    <div className="right flex-1 flex justify-center items-center">
                        <Image src={Monitoring1} alt='monitoring' />
                    </div>
                </div>
            </div>
        </section>
    )
}
