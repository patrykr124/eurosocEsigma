import BlogBox from "@/components/UI/red/blog/BlogBox";
import BlogOtherSmallBox from "@/components/UI/red/blog/BlogOtherSmallBox";
import {BlogDataRed} from "@/components/UI/red/blog/BlogDataRed";

const BlogDataItemLast = BlogDataRed.length > 0 ? BlogDataRed[BlogDataRed.length - 1] : undefined;
const BlogDataItemAll = BlogDataRed;

function Page() {
    return (
        <div className="common-padding-huge bg-gray-2">
            <div className="wrapper">
                <div className="flex flex-col gap-20">
                    <div className="acctually_post">
                        {BlogDataItemLast &&
                            <BlogBox params={BlogDataItemLast.id.toString()} BlogDataItemLast={BlogDataItemLast}/>}
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