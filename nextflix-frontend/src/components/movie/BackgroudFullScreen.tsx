import React from 'react'
import Image from "next/image";

type Prop = {
    imagePath?: string;
    title: string;
}

export default function BackgroudFullScreen({ imagePath, title }: Prop) {
    return (
        <div className="relative w-screen md:h-screen h-[70vh]">
            {imagePath ? (
                <Image
                    src={imagePath}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    priority
                />
            ) : (
                <div className="w-full h-full bg-gray-900" />
            )}
            <div className="inset-0 absolute bg-gradient-to-t md:bg-gradient-to-r from-black to-transparent"></div>
        </div>
    )
}
