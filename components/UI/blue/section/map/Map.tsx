'use client'

function Map() {



    return (
        <div className=''>
            <div className="flex flex-col justify-center items-center w-full overflow-hidden ">
                <iframe id="cyberthreat-map" src="https://threatmap.checkpoint.com/"
                        className="w-screen -mt-4 h-dvh pointer-events-none border-0 "></iframe>
            </div>
        </div>
    )
}

export default Map