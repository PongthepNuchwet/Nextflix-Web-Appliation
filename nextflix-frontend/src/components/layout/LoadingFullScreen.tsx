import React from 'react'
import Image from "next/image";

export default function LoadingFullScreen() {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-black bg-opacity-50 z-40 flex justify-center items-center">
            <Image
                src="/vector/netflix-logo.svg"
                className="animate-bounce"
                alt="logo"
                width={139}
                height={38}
            />
        </div>
    )
}
