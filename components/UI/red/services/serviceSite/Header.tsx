import React from 'react'


interface Props {
    title?: string | undefined ,
    title2?: string | undefined,
    headerImg?: string | undefined,
    position?: string | undefined,
}

export default function Header({title, title2,headerImg, position}: Props) {
    return (
        <header style={{
            backgroundImage: `url('${headerImg}')`,
            backgroundPosition: `${position}`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
        }}  className="sectionPadding flex flex-col justify-center items-center">
            <div className="wrapper">
                <h1 className='h1-bold text-gray-3 text-center'>{title}</h1>
                <h2 className='h4-medium text-gray-3 text-center'>{title2}</h2>
            </div>
        </header>
    )
}
