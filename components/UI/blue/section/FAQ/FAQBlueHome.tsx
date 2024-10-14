import FAQ from '@/components/UI/FAQ'
import React from 'react'
import { ContentFAQData } from './Content'

export default function FAQBlueHome() {
    return (
        <div style={{ backgroundImage: `url("/assets/img/background.png")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "0% 30%" }} className="common-padding">
            <div className="wrapper space-y-10">
                <div className="title flex flex-col">
                    <h2 className="titleFrame">FAQ</h2>
                    <h2 className="h2-medium-42">Pytania i odpowiedzi</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laboriosam aut illo ducimus natus dicta in deleniti excepturi fugiat omnis.</p>
                </div>
                <FAQ data={ContentFAQData} />
            </div>
        </div>
    )
}
