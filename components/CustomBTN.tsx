'use client';
import { CustomBTNProps } from '@/types';
import React from 'react'

const CustomBTN = ({title,containerStyles,btnType,handleClick}:CustomBTNProps) => {
  return (
    <button
    disabled={false}
    type={btnType||"button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className='flex-1'>
            {title}
        </span>

    </button>
  )
}

export default CustomBTN