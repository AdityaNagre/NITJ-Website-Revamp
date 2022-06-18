import React from 'react'

function SmallCard() {
    return (
        <>
            <div style={{margin:"0 auto"}} className=" md:w-96 w-12/12 flex justify-center flex-col align-middle   bg-white rounded-b-xl border-x-1 border-white">
                <img className="rounded-none h-[16.7rem] w-12/12 md:w-11/12 bg-slate-500 relative " src="https://source.unsplash.com/random/900×700/?business" alt="" />
                <div className='h-12 w-12   transition  bg-[#2166a7]  hover:bg-[#2166a7f3] duration-300 absolute top-0 opacity-75 text-black'>15 June</div>
                <div className="p-3   transition  bg-[#2166a7]  hover:bg-[#2166a7f3] duration-300 w-12/12 md:w-11/12 rounded-b-xl">
                    <p className="mb-3 font-normal text-left text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum eum in, minus laudantium autem.</p>
                    <a href="#" className="flex items-center hover:underline py-2 px-3 text-lg font-normal text-center text-white ">
                        Read more
                        <svg className="ml-1 -mr-1 w-4 h-4 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    
                </div>
            </div>
        </>
    )
}

export default SmallCard
