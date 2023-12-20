import React from 'react'
import Image from 'next/image'
import { SectionHeading } from './section-heading'

import { PiNumberCircleOneLight } from "react-icons/pi"
import { PiNumberCircleTwoLight } from "react-icons/pi"
import { PiNumberCircleThreeLight } from "react-icons/pi"

export const FirstFeature = () => {
  return (
    <section className='mb-28 p-10 sm:mb-0 scroll-mt-[100rem]'>
      <SectionHeading>Title Here</SectionHeading>
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
      >

        <div className="flex items-center justify-center mb-">
          IMAGE HERE
        </div>

        <div>
          <h3
            className="flex items-center text-xl text-left !leading-[1.5] mb-5 gap-4"
          >
            <PiNumberCircleOneLight
              size={70}
            />
            <span>Selling point</span>
          </h3>

          <h3
            className="flex items-center text-xl text-left !leading-[1.5] mb-5 gap-4"
          >
            <PiNumberCircleTwoLight
              size={70}
            />
            <span>Selling point</span>
          </h3>

          <h3
            className="flex items-center text-xl text-left !leading-[1.5] mb-5 gap-4"
          >
            <PiNumberCircleThreeLight
              size={70}
            />
            <span >
              Selling point
            </span>
          </h3>
        </div>
      </div>
    </section>
  )
}

