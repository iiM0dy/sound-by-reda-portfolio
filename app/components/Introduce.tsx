import Image from "next/image";
import Link from "next/link";
import React from "react";

const Introduce = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <div className="relative w-60 h-60">
                <Image
                    fill
                    alt=""
                    className="rounded-full"
                    src="/logo.png"
                />
            </div>
            <div>

            </div>
            <div className="flex border-x-4 px-3  border-white items-center h-10">
                <h1 className="text-4xl text-white font-bold ">Production Sound Mixer</h1>
            </div>
            <div className="flex border-x-4 px-3 mt-7 border-white items-center h-10">
                <h1 className="text-4xl text-white font-bold">Audio Post Services</h1>
            </div>

        </div>
    );
};

export default Introduce;
