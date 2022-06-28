import React from 'react'

export default function NewsCards(props) {
  return (
    <>
                        <div class={`mb-3 py-2 text-sm text-black bg-${props.color}-100 rounded-lg cursor-pointer mr-0.5 md:mr-2`}  role="alert">
                            <div className={` mx-2 md:mx-3 pl-2 border-l-4 border-${props.color}-500 md:pb-${props.padding} `} >
                                <h1 className='text-lg font-bold'>NITJ Campus</h1>
                                <span class="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>
                        </div>

    </>
  )
}
