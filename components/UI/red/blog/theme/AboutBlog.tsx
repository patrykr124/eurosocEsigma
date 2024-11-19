import Image from "next/image";
import Avatar from "@/components/UI/red/blog/theme/Avatar";

function AboutBlog() {
    return (
        <div className="common-padding bg-gray-3">
            <div className="wrapper ">
                <div className=" flex flex-row gap-10 ">
                    <div className="left flex flex-[3] flex-col gap-12">

                        <div className="flex-col flex gap-4">
                            <h1 className="p-medium-28-semibold ">Dlaczego?</h1>
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque, consequatur corporis
                                dolorum ea incidunt ipsa modi natus neque nobis nulla odio odit quae quidem quo
                                reiciendis
                                repellat saepe ullam velit voluptatum? Ab delectus error est explicabo facilis harum
                                illum
                                ipsa ipsam libero, magni necessitatibus nobis officiis praesentium quibusdam saepe sed
                                sint
                                tempore ullam, velit voluptates! A commodi, fugiat iste magnam natus obcaecati possimus
                                praesentium. Architecto atque, debitis dolore dolorum fugit nemo nesciunt nisi nulla
                                odit
                                omnis quasi quod tempore voluptatum. At blanditiis deleniti dignissimos error eum illo
                                nihil, omnis porro possimus, quas ratione repellendus reprehenderit sequi sint
                                temporibus
                                ullam?</p>
                        </div>
                        <div className="relative w-full h-[450px] overflow-hidden rounded-xl">
                            <Image fill className="object-cover" src="/assets/img/concept.jpg" alt="blog" />
                        </div>
                        <div className="flex-col flex gap-4">
                            <h1 className="p-medium-28-semibold">Jak to naprawić?</h1>
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam atque beatae consequatur distinctio dolor ex, exercitationem, explicabo modi nobis praesentium provident quaerat quibusdam quidem quisquam sed similique totam veritatis. Accusamus blanditiis corporis deleniti dicta ea esse eveniet excepturi facere harum illum impedit ipsum labore magnam minus mollitia perspiciatis placeat, porro quia recusandae reiciendis rem, sequi suscipit tempore ut vel velit veniam? Beatae consequatur cupiditate deleniti dolore dolorem doloribus excepturi fugiat illum, inventore neque. A assumenda at deleniti dicta dolores earum, eius error fugit illo ipsa labore laborum magni maiores modi non nostrum odio officia rerum similique suscipit veritatis vero voluptas voluptates? Alias aspernatur at corporis cupiditate ea inventore ipsum iste maxime pariatur quae, quo quos sequi unde veniam vero?</p>
                        </div>
                        <hr className="w-full border-gray-2"/>
                        <Avatar/>
                    </div>

                    <div className="right flex-1 flex flex-col gap-12">
                        <div className="box bg-gray-2 rounded-xl overflow-hidden">
                            <div className="w-full h-[180px] relative">
                                <Image fill src="/assets/img/hacker.jpg" alt="recentBlog"/>
                            </div>
                            <div className="flex flex-col gap-2 p-4">
                                <h4 className="p-semibold-18 ">Ochrona a kary finansowe</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, omnis?</p>
                            </div>
                        </div>
                        <div className="box bg-gray-2 rounded-xl overflow-hidden">
                            <div className="w-full h-[180px] relative ">
                                <Image fill src="/assets/img/hacker.jpg" alt="recentBlog"/>
                            </div>
                            <div className="flex flex-col gap-2 p-4">
                                <h4 className="p-semibold-18 ">Ochrona a kary finansowe</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, omnis?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutBlog;