"use client";
import { useState, useRef, FormEvent } from "react";


const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailSection = useRef<HTMLInputElement>(null);
  const messageSection = useRef<HTMLInputElement>(null);
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="w-full max-w-105">
      <form onSubmit={submitHandler} className=" flex flex-col text-white">
        <p className="mt-6 mb-1">Name*</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={`outline-none rounded-md bg-[#A8A8A8] py-3 px-4 text-[#1A1A1A] ${submitted && !name ? "ring-1 ring-red-500" : ""
            }`}
        />
        {submitted && !name && (
          <p className="text-red-400">The First Name is required</p>
        )}
        <p className="mt-6 mb-1">Last name</p>
        <input
          type="text"
          placeholder="Your last name"
          className="outline-none bg-[#A8A8A8] rounded-md py-3 px-4 text-[#1A1A1A]"
        />
        <p className="mt-6 mb-1">Email*</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className={`outline-none bg-[#A8A8A8] py-3 px-4 rounded-md text-[#1A1A1A] ${submitted && !email ? "ring-1 ring-red-500" : ""
            }`}
        />
        {submitted && !email && (
          <p className="text-red-400">The Email is required</p>
        )}
        <p className="mt-6 mb-1">Message*</p>
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="outline-none bg-[#A8A8A8] py-3 px-4 min-h-27.5 rounded-md text-[#1A1A1A]"
        />
        {submitted && !message && (
          <p className="text-red-400">The Message is required</p>
        )}
        <button
          type="submit"
          className="py-3 px-8 text-white rounded-md bg-black cursor-pointer block w-full lg:w-max hover:bg-[#0F0F0F] ease-in-out duration-300 mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
