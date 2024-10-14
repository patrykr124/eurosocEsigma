import AboutServices from '@/components/UI/services/monitoring/AboutServices'
import Header from '@/components/UI/services/monitoring/Header'
import Slider from '@/components/UI/services/monitoring/Slider'
import React from 'react'

export default function page() {
    return (
        <div>
            <Header />
            <AboutServices />
            <Slider />
        </div>
    )
}
