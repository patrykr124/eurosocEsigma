import BlogBox from "@/components/UI/red/blog/BlogBox";
import BlogOtherSmallBox from "@/components/UI/red/blog/BlogOtherSmallBox";


function Page() {
    return (
        <div className="common-padding-huge bg-gray-2">
            <div className="wrapper">
                <div className="flex flex-col gap-20">
                    <div className="acctually_post">
                        <BlogBox/>
                    </div>
                    <div className="other_posts grid grid-cols-2  gap-6 ">
                        <BlogOtherSmallBox/>
                        <BlogOtherSmallBox/>
                        <BlogOtherSmallBox/>
                        <BlogOtherSmallBox/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;