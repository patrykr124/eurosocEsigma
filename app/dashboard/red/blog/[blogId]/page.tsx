import HeaderBlog from "@/components/UI/red/blog/theme/HeaderBlog";
import AboutBlog from "@/components/UI/red/blog/theme/AboutBlog";
import React from "react";
import {BlogDataRed} from "@/components/UI/red/blog/BlogDataRed";

interface Props {
    params: { blogId: string }
}

function Page({params}: Props) {
    const BlogDataParams = BlogDataRed.find(item => item.id.toString() === params.blogId);

    if (!BlogDataParams) {
        return <p>Post not found</p>;
    }
    return (
        <div>
            <HeaderBlog content={BlogDataParams} headerImg="/assets/img/services/auditServices.png" position="center"/>
            <AboutBlog content={BlogDataParams}/>
        </div>
    );
}

export default Page;