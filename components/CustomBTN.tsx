'use client';
import { CustomBTNProps } from '@/types';
import Image from 'next/image';
import React from 'react'

const CustomBTN = ({title,containerStyles,btnType,handleClick,textStyles,rightIcon}:CustomBTNProps) => {
  return (
    <button
    disabled={false}
    type={btnType||"button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`custom-btn ${textStyles}`}>
            {title}
        </span>
        {rightIcon &&(
          <div className='relative w-6 h-6'>
               <Image
               src={rightIcon}
               alt='right icon'
               fill
               className='object-contain'/>
          </div>
        )}

    </button>
  )
}

export default CustomBTN