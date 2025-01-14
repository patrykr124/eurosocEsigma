import HeaderBlog from "@/components/UI/blue/blog/theme/HeaderBlog";
import AboutBlog from "@/components/UI/blue/blog/theme/AboutBlog";
import React from "react";
import {BlogData} from "@/components/UI/blue/blog/BlogData";
import { useLocale } from "next-intl";
import { BlogData_EN } from "@/components/UI/blue/blog/BlogData_EN";


interface Props {
    params: { blogId: string }
}

function Page({params}: Props) {
    const locale = useLocale();

    const data = locale === "pl" ? BlogData  : BlogData_EN

    const BlogDataParams = data.find((item) => item.id.toString() === params.blogId);

    if (!BlogDataParams) {
        return <p>Post not found</p>;
    }


    return (
        <div>
            <HeaderBlog content={BlogDataParams} position="center" headerImg={""}/>
            <AboutBlog content={BlogDataParams}/>
        </div>
    );
}

export default Page;