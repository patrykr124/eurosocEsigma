import React from "react";

interface Propos {
    headerImg: string;
    position: string;
    title: string;
    title2: string;
}

function HeaderBlog({headerImg,position,title,title2} : Propos) {
    return (
        <header style={{
            backgroundImage: `url('${headerImg}')`,
            backgroundPosition: `${position}`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
        }} className="sectionPadding flex flex-col justify-center items-center">
            <div className="wrapper">
                <h1 className='h1-bold text-gray-3 text-center'>{title}</h1>
                <h2 className='h4-medium text-gray-3 text-center'>{title2}</h2>
            </div>
        </header>
    );
}

export default HeaderBlog;