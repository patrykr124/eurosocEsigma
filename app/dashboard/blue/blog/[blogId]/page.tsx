import HeaderBlog from "@/components/UI/blue/blog/theme/HeaderBlog";
import AboutBlog from "@/components/UI/blue/blog/theme/AboutBlog";
import {BlogData} from "@/components/UI/blue/blog/BlogData";

interface Props {
    params: { blogId: string }
}

function Page({params}: Props) {

    const BlogDataParams = BlogData.find(item => item.id.toString() === params.blogId);

    if (!BlogDataParams) {
        return <p>Post not found</p>;
    }


    return (
        <div>
            <HeaderBlog content={BlogDataParams} headerImg="/assets/img/services/bg.png" position="center"/>
            <AboutBlog content={BlogDataParams}/>
        </div>
    );
}

export default Page;