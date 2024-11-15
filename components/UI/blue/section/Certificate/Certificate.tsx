import Image from 'next/image'
import React from 'react'


function Certificate() {
    return (
        <div className='common-padding flex flex-col items-center justify-center bg-gray-2 pb-12'>
            <h2 className="titleFrame">CERTYFIKATY</h2>
            <div className="wrapper flex flex-col gap-12">
                <div className="text flex flex-col  justify-center items-center">
                    <h2 className='h2-medium-42'>Nasze certyfikaty</h2>
                    <p className='max-w-2xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                        provident autem! Culpa pariatur dolorem ad officia aut modi minus quae.</p>
                </div>
                <div className="certificates flex md:gap-12 justify-center flex-wrap">
                    <Image src='/assets/img/sigma.png' alt='certificate' width={200} height={200}/>
                    <Image src='/assets/img/nask.png' alt='certificate' width={200} height={200}/>
                    <Image src='/assets/img/exatel.png' alt='certificate' width={200} height={200}/>
                    <Image src='/assets/img/3s.png' alt='certificate' width={200} height={200}/>
                </div>
            </div>

        </div>
    )
}

export default Certificate