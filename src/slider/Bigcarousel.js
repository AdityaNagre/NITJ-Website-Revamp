import React from 'react'
import BigCard from '../components/BigCard';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react"
function Bigcarousel() {
    const slRef = useRef(null);
    const [slide, setslide] = useState(3)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slide,
        slidesToScroll: 1,
    };
    useEffect(() => {
        if (window.innerWidth < 1100) {
            setslide(1)
        }

    }, [window.innerWidth])
    return (
        <>
            <div className='w-12/12 px-0 flex-col justify-center mx-0 my-20 md:px-16 md:py-2' >
                <h1 className='text-center text-2xl md:text-4xl text-orange-500 font-bold uppercase mb-10'>A campus that transform every individual</h1>
                <Slider ref={slRef} {...settings} >
                    <div style={{ width: "90%" }} className='text-center' >
                        <BigCard />
                    </div>
                    <div style={{ width: "90%" }} className='text-center' >
                        <BigCard />
                    </div>
                    <div style={{ width: "90%" }} className='text-center' >
                        <BigCard />
                    </div>
                </Slider>
            </div>

        </>
    )
}

export default Bigcarousel