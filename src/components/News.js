import React from 'react'
import Slider from "react-slick";

function News() {

    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        pauseOnHover: true,
        autoplay: true,
        speed: 500
      };
    return (
        <>
            <div className="container px-0 mx-0 border-4 border-blue-800 w-full  h-[26.2rem] hover:border-black" >
                <div className="hidden md:flex  mx-3 my-3 h-96 flex-col ">
                    <Slider {...settings}>
                        <div class=" mb-3 py-2 text-sm text-black bg-blue-100 rounded-lg cursor-pointer"  role="alert">
                            <div className=' mx-3 pl-2 border-l-4 border-blue-500 md:pb-5 ' >
                                <h1 className='text-lg font-bold'>NITJ Campus</h1>
                                <span class="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>
                        </div>
                        <div class=" mb-3 py-2 text-sm text-black bg-yellow-100 rounded-lg cursor-pointer"  role="alert">
                            <div className=' mx-3 pl-2 border-l-4 border-yellow-500 md:pb-5' >
                                <h1 className='text-lg font-bold'>NITJ Campus</h1>
                                <span class="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>
                        </div>

                        <div class=" mb-3 py-2 text-sm text-black bg-red-100 rounded-lg cursor-pointer" role="alert">
                            <div className=' mx-3 pl-2 border-l-4 border-red-500 md:pb-5' >
                                <h1 className='text-lg font-bold'>NITJ Campus</h1>
                                <span class="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>
                        </div>

                        <div class=" mb-3 py-2 text-sm text-black bg-green-100 rounded-lg cursor-pointer" role="alert">
                            <div className=' mx-3 pl-2 border-l-4 border-green-500 md:pb-5' >
                                <h1 className='text-lg font-bold'>NITJ Campus</h1>
                                <span class="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>
                        </div>

                        <div class=" mb-3 py-2 text-sm text-black bg-blue-100 rounded-lg cursor-pointer" role="alert">
                            <div className=' mx-3 pl-2 border-l-4 border-blue-500 md:pb-5' >
                                <h1 className='text-lg font-bold'>NITJ Campus</h1>
                                <span class="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className="md:hidden flex  mx-3 my-3 h-96 flex-col scrollbar overflow-auto">
                        <div class=" mb-3 py-2 text-sm text-black bg-blue-100 rounded-lg cursor-pointer"  role="alert">
                            <div className=' mx-3 pl-2 border-l-4 border-blue-500 md:pb-5 ' >
                                <h1 className='text-lg font-bold'>NITJ Campus</h1>
                                <span class="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>
                        </div>
                        <div class=" mb-3 py-2 text-sm text-black bg-yellow-100 rounded-lg cursor-pointer"  role="alert">
                            <div className=' mx-3 pl-2 border-l-4 border-yellow-500 md:pb-5' >
                                <h1 className='text-lg font-bold'>NITJ Campus</h1>
                                <span class="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>
                        </div>

                        <div class=" mb-3 py-2 text-sm text-black bg-red-100 rounded-lg cursor-pointer" role="alert">
                            <div className=' mx-3 pl-2 border-l-4 border-red-500 md:pb-5' >
                                <h1 className='text-lg font-bold'>NITJ Campus</h1>
                                <span class="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>
                        </div>

                        <div class=" mb-3 py-2 text-sm text-black bg-green-100 rounded-lg cursor-pointer" role="alert">
                            <div className=' mx-3 pl-2 border-l-4 border-green-500 md:pb-5' >
                                <h1 className='text-lg font-bold'>NITJ Campus</h1>
                                <span class="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>
                        </div>

                        <div class=" mb-3 py-2 text-sm text-black bg-blue-100 rounded-lg cursor-pointer" role="alert">
                            <div className=' mx-3 pl-2 border-l-4 border-blue-500 md:pb-5' >
                                <h1 className='text-lg font-bold'>NITJ Campus</h1>
                                <span class="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>
                        </div>
                </div>

            </div>
            
        </>
    )
}

export default News
