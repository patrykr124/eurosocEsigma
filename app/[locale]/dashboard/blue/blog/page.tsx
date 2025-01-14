import BlogBox from "@/components/UI/blue/blog/BlogBox";
import { BlogData } from "@/components/UI/blue/blog/BlogData";
import BlogOtherSmallBox from "@/components/UI/blue/blog/BlogOtherSmallBox";
import HeaderBlog from "@/components/UI/blue/blog/theme/HeaderBlog";


const BlogDataItemLast = BlogData.length > 0 ? BlogData[BlogData.length - 1] : undefined;
const BlogDataItemAll = BlogData;

function Page() {

    return (
        <>
            <HeaderBlog content={"Blog"} position="center" headerImg={"/assets/img/blueblog/headerRansomware.jpg"} />
            <div className="common-padding bg-gray-2">
                <div className="wrapper">
                    <div className="flex flex-col gap-6 md:gap-20">
                        <div className="acctually_post ">
                            {BlogDataItemLast && <BlogBox params={BlogDataItemLast.id.toString()} BlogDataItemLast={BlogDataItemLast} />}
                        </div>
                        <div className="other_posts grid md:grid-cols-2 gap-6 ">
                            {
                                BlogDataItemAll.map((item, index) => (
                                    <BlogOtherSmallBox item={item} key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;