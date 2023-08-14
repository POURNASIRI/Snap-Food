"use client";

import React, { useCallback } from 'react'
import Image from "next/image";
import Orders from './Orders'
import { useState } from 'react';



export default function OrderDiv() {

  const [modal, setModal] = useState(false);

  const closeModalHandler = useCallback((e) => {

    const targetClass = e.target.className;
    if (targetClass.includes('CLOSE')) {
      setModal(false);
      document.body.style.overflow = 'visible';
    }
  }, [])


  const openModalHandler = useCallback((e) => {

    setModal(true)
    e.stopPropagation()
    document.body.style.overflow = 'hidden';
  }, [])


  return (
    <>

      <div onClick={openModalHandler} className="  relative cursor-pointer flex max-h-spacing-6 mr-spacing-2 rounded-lgg ">
        <Image
          className="ml-spacing-1 "
          src={"/images/images-home/order.svg"}
          width={20}
          height={20}
          alt="order"
        />

        <p className="hidden md:inline-block  md:ml-spacing-1   md:font-vxb  md:leading-lineHeight-body md:text-surface-overlay  md:text-start  md:text-vm  md:tracking-tighter  md:cursor-pointer md:pl-2 ">
          سفارش ها
        </p>
      </div>

      {modal && <div onClick={closeModalHandler} className='CLOSE  fixed inset-spacing-0 bg-black-alphaMedium flex items-center justify-center w-full h-screen z-50'>
          <Orders />
      </div>
      }

    </>




  )
}
