import React from 'react'

interface Props {
    title?: string | undefined ,
    title2?: string | undefined,
}

export default function Header({title, title2}: Props) {
    return (
        <header style={{
            backgroundImage: "url('/assets/img/allservices.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
        }} className="sectionPadding flex flex-col justify-center items-center">
            <div className="wrapper">
                <h1 className='h1-bold text-white text-center'>{title}</h1>
                <h2 className='h4-medium text-white text-center'>{title2}</h2>
            </div>
        </header>
    )
}
