import HeaderBlog from "@/components/UI/red/blog/theme/HeaderBlog";
import AboutBlog from "@/components/UI/red/blog/theme/AboutBlog";


function Page() {
    return (
        <div>
            <HeaderBlog headerImg="/assets/img/red/services/bez.png" position="center"
                        title="Atak hackerski a odpowiedzialność firmy" title2=""/>
            <AboutBlog/>
        </div>
    );
}

export default Page;