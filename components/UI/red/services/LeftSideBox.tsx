function LeftSideBox() {
    return (
        <div className="sticky top-[30%] shadow-light  bg-gray-3 w-full h-[450px] rounded-xl p-4 ">
            <div className="flex gap-4 flex-col text-black">
                <div className="search">
                    <input type="text" placeholder="Szukaj"
                           className="w-full h-12 px-4 rounded-xl bg-gray-100 border-none focus:outline-none"/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4 ">
                        <input type="checkbox" id="ochrona" name="ochrona" className=""/>
                        <label htmlFor="ochrona" className="text-gray-1">Ochrona w czasie rzeczywistym</label>
                    </div>
                    <div className="flex gap-4 ">
                        <input type="checkbox" id="ochrona dla firm" name="ochrona dla firm" className=""/>
                        <label htmlFor="ochrona dla firm" className="text-gray-1">Ochrona dla firm</label>
                    </div>
                    <div className="flex gap-4 ">
                        <input type="checkbox" id="ochrona" name="ochrona" className=""/>
                        <label htmlFor="ochrona" className="text-gray-1">Ochrona w czasie rzeczywistym</label>
                    </div>
                    <div className="flex gap-4 ">
                        <input type="checkbox" id="ochrona" name="ochrona" className=""/>
                        <label htmlFor="ochrona" className="text-gray-1">Ochrona w czasie rzeczywistym</label>
                    </div>
                    <div className="flex gap-4 ">
                        <input type="checkbox" id="ochrona" name="ochrona" className=""/>
                        <label htmlFor="ochrona" className="text-gray-1">Ochrona w czasie rzeczywistym</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSideBox;
