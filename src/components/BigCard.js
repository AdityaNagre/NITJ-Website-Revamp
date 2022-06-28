import React from 'react'

function BigCard() {
    return (
        <>
            <div style={{margin:"0 auto"}} className="md:w-96  w-12/12  bg-white border-x-1 border-white ">
                <div >
                    <img className="rounded-t-2xl h-[32rem] md:w-96 w-full bg-slate-500 relative " src="https://source.unsplash.com/random/900×700/?code" alt="" />
                </div>
                <div className="p-5  transition  bg-[#2166a7]  hover:bg-[#2166a7f3] duration-300 rounded-b-2xl text-center flex align-middle justify-center">
                    <div className='h-20 md:w-96 w-12/12'>
                        <a href='#' className="mb-3 text-3xl font-bold text-white ">UNDERGRADUATE ADMISSIONS</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BigCard
