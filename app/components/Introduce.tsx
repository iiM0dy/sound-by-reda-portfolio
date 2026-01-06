import Image from "next/image";
import Link from "next/link";
import React from "react";

const Introduce = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-25">
      <div className="relative w-50 h-50">
        <Image
          fill
          alt=""
          className="rounded-full ring-2 ring-white"
          src="/images/pfp.jpeg"
        />
      </div>
      <h1 className="text-4xl text-white font-bold mt-5">Mohamed Reda</h1>
      <p className="text-[#A8A8A8] mt-2 text-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 max-w-300">
        I am a sound-focused professional specializing in production sound
        mixing and audio post-production for film, television, and digital
        content. From on-set recording to final mix, I treat sound as a
        storytelling tool, shaping emotion, rhythm, and realism with precision
        and clarity. I work closely with directors, producers, and editors to
        ensure every detail serves the narrative. My goal is clean, expressive,
        cinematic sound that translates seamlessly across platforms and
        cultures.
      </p>
      <div className="flex flex-col gap-3 w-full sm:flex-row lg:w-1/2 items-center justify-center mt-4">
        <Link href="https://wa.me/201025811491" className="bg-white ring-2 text-center ring-white text-[#0f0f0f] font-bold px-4 py-3 rounded-2xl mt-4 cursor-pointer hover:bg-[#acacac] hover:ring-[#acacac] transition md:w-40 w-full">
          Get in touch
        </Link>
        <Link href="" className="bg-transparent ring-2 ring-white text-white text-center font-bold px-4 py-3 rounded-2xl mt-4 cursor-pointer hover:bg-white hover:text-[#0F0F0F] transition md:w-40 w-full">
          Open CV
        </Link>
      </div>
    </div>
  );
};

export default Introduce;
