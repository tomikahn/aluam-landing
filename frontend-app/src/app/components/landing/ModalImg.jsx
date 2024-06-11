"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const ModalImg = ({imagen}) => {
    return (
        <div className="w-full h-[390px] rounded-[6px] object-cover">
            <img src={imagen} alt="" className='w-full h-[390px] rounded-[6px] object-cover'/>
        </div>
    )
}

export default ModalImg