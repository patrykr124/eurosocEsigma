import React from 'react'

interface Props {
    title: string,
    desc: string,
    author: string,
}

function ReviewCart({title,desc,author} : Props) {
    return (
        <div className='bg-gray-3 from-tertiary-background to-white rounded-2xl p-4 shadow-light mx-4 '>
            <div className="space-y-3">
                <h4 className='p-bold-20'>{title}</h4>
                <p className="p-medium-14 whitespace-pre-wrap">{desc}</p>
                <p className="p-bold-16">{author}</p>
            </div>
        </div>
    )
}

export default ReviewCart