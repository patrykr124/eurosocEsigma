import { InfoIcon } from 'lucide-react'
import React from 'react'

function Info() {
    return (
        <div className='common-padding-huge' style={{ backgroundImage: 'url("/assets/video/glitch.gif")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <div className="wrapper flex gap-12">
                <div className="box flex flex-col gap-6">
                    <div className="icon bg-secondary-blue w-20 h-20 rounded-full justify-center items-center flex">
                        <InfoIcon size={40} color='white' />
                    </div>
                    <div className="text-white flex flex-col gap-4">
                        <p className='p-bold-24 '>
                            24/7 Support
                        </p>
                        <p>Wykrywanie anomalii i analiza maszynowa / ludzka 24/7/365</p>
                    </div>
                </div>
                <div className="box flex flex-col gap-6">
                    <div className="icon bg-secondary-blue w-20 h-20 rounded-full justify-center items-center flex">
                        <InfoIcon size={40} color='white' />
                    </div>
                    <div className="text-white flex flex-col gap-4">
                        <p className='p-bold-24 '>
                            24/7 Support
                        </p>
                        <p>Wykrywanie anomalii i analiza maszynowa / ludzka 24/7/365</p>
                    </div>
                </div>
                <div className="box flex flex-col gap-6">
                    <div className="icon bg-secondary-blue w-20 h-20 rounded-full justify-center items-center flex">
                        <InfoIcon size={40} color='white' />
                    </div>
                    <div className="text-white flex flex-col gap-4">
                        <p className='p-bold-24 '>
                            24/7 Support
                        </p>
                        <p>Wykrywanie anomalii i analiza maszynowa / ludzka 24/7/365</p>
                    </div>
                </div>
                <div className="box flex flex-col gap-6">
                    <div className="icon bg-secondary-blue w-20 h-20 rounded-full justify-center items-center flex">
                        <InfoIcon size={40} color='white' />
                    </div>
                    <div className="text-white flex flex-col gap-4">
                        <p className='p-bold-24 '>
                            24/7 Support
                        </p>
                        <p>Wykrywanie anomalii i analiza maszynowa / ludzka 24/7/365</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info