
import React from 'react'


import { SlCalender } from "react-icons/sl";
import { FaListUl } from "react-icons/fa";
import { CgToolbox } from "react-icons/cg";



export const SecondFeature = () => {
  return (
    <section className='mb-28 p-10 sm:mb-0 scroll-mt-[100rem]'>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10" >
        <div>
          <div className="flex items-center justify-center mr-[100px] mb-10" >

            <FaListUl
              size={100}
            />

          </div>
          <h3
            className="text-xl max-w-[45rem] !leading-[1.5]"
          >
            <span >
              Feature 1
            </span>
          </h3>
        </div>
        <div >
          <div className="flex items-center justify-center mr-[100px] mb-10" >
            <SlCalender
              size={100}
            />
          </div>

          <h3 className="text-xl max-w-[45rem] !leading-[1.5]">
            <span >
              Feature 2
            </span>
          </h3>

        </div>
        <div>
          <div className="flex items-center justify-center mr-[100px] mb-10">
            <CgToolbox
              size={100}
            />
          </div>
          <h3 className="text-xl max-w-[45rem] !leading-[1.5]">
            <span >
              Feature 3
            </span>
          </h3>
        </div>
      </div>
    </section>
  )
}
