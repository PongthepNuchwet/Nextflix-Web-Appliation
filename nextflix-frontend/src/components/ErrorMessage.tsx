import React from "react";
import { BiSolidError } from "react-icons/bi";

type Props = {
    message: string;
    fullScreen?: boolean;
};

export default function ErrorMessage({ message, fullScreen }: Props) {
    return (
        <div className={`flex flex-col gap-5 items-center justify-center ${fullScreen ? 'h-screen' : ''}  text-red-700 p-6 rounded-md`}>
            <BiSolidError size={50} />
            <p className="text-lg font-semibold">{message}</p>
        </div>
    );
}
