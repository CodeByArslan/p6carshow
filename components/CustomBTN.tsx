'use client';
import { CustomBTNProps } from '@/types';
import React from 'react'

const CustomBTN = ({title,containerStyles,handleClick}:CustomBTNProps) => {
  return (
    <button
    disabled={false}
    type={"button"}
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