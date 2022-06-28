import React, {useState} from 'react'
import Slider from "react-slick";
import NewsCards from './NewsCards';

function News() {
    const [toggleSlider, settoggleSlider] = useState(false)

    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        cssEase: "linear",
        speed: 3000
      };

      const handleMouseOver=()=>{
        settoggleSlider(true)
      }
      const handleMouseOut=()=>{
        settoggleSlider(false)
      }

    return (
        <>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="container px-0 mx-0 border-4 border-blue-800 w-full  h-[26.2rem] hover:border-black" >
                {
                    !toggleSlider &&
                    <div className="hidden md:flex  mx-3 md:p-1 my-3 h-96 flex-col overflow-hidden">
                    <Slider {...settings}>
                        <NewsCards color="indigo" padding="[1.15rem]"/>
                        <NewsCards color="yellow" padding="[1.15rem]"/>
                        <NewsCards color="red" padding="[1.15rem]"/>
                        <NewsCards color="green" padding="[1.15rem]"/>
                        <NewsCards color="sky" padding="[1.15rem]"/>
                    </Slider>
                    </div>
                }
                {
                    toggleSlider && 
                    <div className="hidden md:flex  mx-3 md:p-1 md:mt-4 h-96 flex-col overflow-auto scrollbar">
                        <NewsCards color="indigo" padding="5"/>
                        <NewsCards color="yellow" padding="5"/>
                        <NewsCards color="red" padding="5"/>
                        <NewsCards color="green" padding="5"/>
                        <NewsCards color="sky" padding="5"/>
                    </div>
                }
                <div className="md:hidden  mx-3 my-3 h-96 flex-col mt-5 overflow-auto scrollbar">
                        <NewsCards color="indigo" padding="5"/>
                        <NewsCards color="yellow" padding="5"/>
                        <NewsCards color="red" padding="5"/>
                        <NewsCards color="green" padding="5"/>
                        <NewsCards color="sky" padding="5"/>
                    </div>
                
            </div>
            
        </>
    )
}

export default News