import React from "react";

type Props = {
    message?: string;
};

export default function NoData({ message = "No data available" }: Props) {
    return (
        <div className="flex flex-col items-center justify-center h-[50vh] text-center text-white">
            <p className="text-2xl font-semibold">{message}</p>
        </div>
    );
}