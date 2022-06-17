import React from 'react'

function BigCard() {
    return (
        <>
            <div style={{margin:"0 auto"}} class="md:w-96  w-12/12  bg-white border-x-1 border-white ">
                <div >
                    <img class="rounded-t-2xl h-[32rem] md:w-96 w-full bg-slate-500 relative " src="https://source.unsplash.com/random/900×700/?code" alt="" />
                </div>
                <div class="p-5 bg-[#2166a7] rounded-b-2xl text-center flex align-middle justify-center">
                    <div class='h-20 md:w-96 w-12/12'>
                        <a href='#' class="mb-3 text-3xl font-bold text-white ">UNDERGRADUATE ADMISSIONS</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BigCard