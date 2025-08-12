"use client";
import PaperClip from "../_icons/PaperClip";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Insta from "../_icons/Insta";
import WhatsApp from "../_icons/WhatsApp";
import LinkedIn from "../_icons/LinkedIn";
import Resume from "../_icons/Resume";
import Link from "next/link";

const Footer = () => {
  const form = useRef(); // Create a ref for the form element

  // State for submission status
  const [status, setStatus] = useState(""); // 'loading', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current, // Pass the form element
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };

  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [6000, 6500], [1, 0]);

  if (!isClient) return null;

  return (
    <>
      <div className="flex flex-col justify-center relative">
        <motion.div
          style={{ opacity }}
          className="lg:sticky top-0 text-[2.4rem]  text-gray-700 font-raleway w-full h-[90vh] flex text-left items-center pl-10"
        >
          <div className="lg:flex">
            ready to manifest your
            <pre className="pl-2 bg-gradient-to-br font-raleway from-blue-500 to-red-500 bg-clip-text text-transparent">
              ideas?
            </pre>
          </div>
        </motion.div>

        <div className="lg:sticky top-0 text-[clamp(1rem,12vw,2.2rem)]  text-gray-700 text-left font-raleway w-full h-[90vh] flex flex-col justify-center  md:pl-10 lg:pr-210">
          <p className="text-left">
            Let's collaborate! Drop me a message, and let's create something
            exceptional
            <span className="pl-2 bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent">
              together!
            </span>
          </p>
          <div className="flex items-center justify-start gap-5 pt-10">
            <Resume className="size-8" />
            <Link  href="https://www.linkedin.com/in/akash-mamenholy-275b37353" title="LinkedIn"><LinkedIn className="size-8 z-10"  /></Link>
            <Insta className="size-8" title="Instagram" />
            <WhatsApp className="size-[26px]" title="WhatsApp" />
          </div>
        </div>

        <div className="lg:sticky top-0 min-h-[100vh] flex items-center justify-center font-raleway gap-5 pt-40  ">
          <h2 className=" text-[2.5rem] text-gray-700 text-center w-1/3"></h2>

          <div id="contact" className="flex flex-col justify-center h-[100vh] ">
            <div className="text-[clamp(2rem,12vw,6rem)] font-bold text-gray-700 flex items-center gap-2 md:gap-4 xl:gap-6 ">
              <h2>Let's</h2>
              <h2 className="bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent">
                Connect
              </h2>
              <PaperClip className="size-[clamp(3rem,12vw,6rem)] " />
            </div>

            <form
              ref={form} // Attach the ref to the form
              onSubmit={sendEmail}
              className="pt-20 gap-10 flex flex-col text-[1.1rem]"
            >
              <div className="flex flex-col gap-5">
                <p>YOUR NAME:</p>
                <input
                  type="text"
                  name="name" // The 'name' attribute must match the variable in your EmailJS template
                  placeholder="eg: Tony Montana"
                  required
                  className="border-b-1 border-blue-500/40 w-full bg-transparent focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-5">
                <p>YOUR EMAIL:</p>
                <input
                  type="email"
                  name="email" // 'name' attribute must match
                  placeholder="eg: tony@gmail.com"
                  required
                  className="border-b-1 border-blue-500/40 w-full bg-transparent focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-5">
                <p>YOUR MESSAGE:</p>
                <textarea
                  name="message" // 'name' attribute must match
                  placeholder="eg: hello!"
                  required
                  className="border-b-1 max-h-100 border-blue-500/40 w-full bg-transparent focus:outline-none"
                />
              </div>
              <div className="w-full flex justify-end items-center gap-4">
                {status === "success" && (
                  <p className="text-green-500">Message sent!</p>
                )}
                {status === "error" && (
                  <p className="text-red-500">Failed to send.</p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{
                    scale: 0.8,
                    color: "white",
                    backgroundColor: "oklch(62.3% 0.214 259.815)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-right px-6 py-3 cursor-pointer bg-blue-500/10 font-raleway backdrop-blur-[15px] rounded-[2.1rem] border-1 border-blue-500/20 text-gray-700 shadow-[0px_0px_10px_-1px_#1e47ff30] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Leave a message"}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <p className="font-raleway">© 2023 My Portfolio. All rights reserved.</p> */}
    </>
  );
};

export default Footer;
{
  /* <form
              
              className="pt-20 gap-10 flex flex-col text-[1.1rem] "
            >
              <div className="flex flex-col gap-5 ">
                <p>YOUR NAME:</p>
                <input
                  type="text"
                  placeholder="eg: Tony Montana"
                  className="border-b-1 border-blue-500/40 w-full bg-transparent focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-5 ">
                <p>YOUR EMAIL:</p>
                <input
                  type="text"
                  placeholder="eg: tony@gmail.com"
                  className="border-b-1 border-blue-500/40 w-full bg-transparent focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-5 ">
                <p>YOUR MESSAGE:</p>
                <textarea
                  placeholder="eg: hello!"
                  className="border-b-1 max-h-100 border-blue-500/40 w-full bg-transparent focus:outline-none"
                />
              </div>
              <div className="w-full flex justify-end">
                <motion.button
                whileHover={{scale:1.05, color: "", backgroundColor: ""}}
                  whileTap={{
                    scale: 0.8,
                    color: "white",
                    backgroundColor: "oklch(62.3% 0.214 259.815)",
                  }}
                  transition={{duration: 0.3}}
                  className=" text-right px-6 py-3
                    cursor-none bg-blue-500/10 font-raleway backdrop-blur-[15px]  rounded-[2.1rem] border-1 border-blue-500/20 text-gray-700  shadow-[0px_0px_10px_-1px_#1e47ff30]"
                >
                  Leave a message
                </motion.button>
              </div>
            </form> */
}
