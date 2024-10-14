import React from 'react'

export default function Slider() {
    return (
        <section className='common-padding bg-black'>
            <div className="wrapper">
                <div className="flex flex-col gap-12">
                    <div className="flex justify-center items-center">
                        <h1 className='h2-medium-42 text-white'>Korzyści</h1>
                    </div>
                    <div className="flex gap-10  " >
                        <div className="bg-white min-w-[550px] h-[400px] rounded-xl"></div>
                        <div className="bg-white min-w-[550px] h-[400px] rounded-xl"></div>
                        <div className="bg-white min-w-[550px] h-[400px] rounded-xl"></div>
                        <div className="bg-white min-w-[550px] h-[400px] rounded-xl"></div>
                    </div>
                </div>

            </div>
        </section>
    )
}
