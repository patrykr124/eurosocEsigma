import React from "react";
import {BlogPost} from "@/types/type";

interface Propos {
    headerImg: string;
    position: string;
    content: BlogPost | string | undefined | any;

}

function HeaderBlog({position,content, headerImg} : Propos) {
    return (
        <header style={{
            backgroundImage: `url('${content?.imgHeader || `${headerImg}`} ')`,
            backgroundPosition: `${position}`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
        }} className="sectionPadding flex flex-col justify-center items-center">
            <div className="wrapper">
                <h1 className='h1-bold text-gray-3 text-center'>{content?.title || `${content}`}</h1>
            </div>
        </header>
    );
}

export default HeaderBlog;