import BlogBox from "@/components/UI/blue/blog/BlogBox";
import BlogOtherSmallBox from "@/components/UI/blue/blog/BlogOtherSmallBox";
import {BlogData} from "@/components/UI/blue/blog/BlogData";


const BlogDataItemLast = BlogData.length > 0 ? BlogData[BlogData.length - 1] : undefined;
const BlogDataItemAll = BlogData;

function Page() {
    return (
        <div className="common-padding-huge bg-gray-2">
            <div className="wrapper">
                <div className="flex flex-col gap-20">
                    <div className="acctually_post">
                        {BlogDataItemLast && <BlogBox params={BlogDataItemLast.id.toString()} BlogDataItemLast={BlogDataItemLast}/>}
                    </div>
                    <div className="other_posts grid grid-cols-2 gap-6 ">
                        {
                            BlogDataItemAll.map((item, index) => (
                                <BlogOtherSmallBox item={item} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;