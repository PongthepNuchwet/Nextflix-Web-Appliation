import React from "react";

type Props = {
    message: string;
};

export default function ErrorMessage({ message }: Props) {
    return (
        <div className="flex items-center justify-center h-screen bg-red-100 text-red-700 p-6 rounded-md">
            <p className="text-lg font-semibold">{message}</p>
        </div>
    );
}
