"use client"

import React from 'react'
import { motion } from 'framer-motion'

export const Header = () => {
  return (
    <header>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.2 }}
        className="flex justify-center md:justify-start items-center text-2xl font-bold px-10"
      >
        <p className='text-center md:text-left'>Template</p>
      </motion.div>
    </header>
  )
}


