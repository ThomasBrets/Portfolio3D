import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import Earth from "./canvas/Earth";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


// ? email.js

// template_o3ef40a   // template
// service_1xm8s14    // service
// _zFUdxfea1_VMyin1  // key



const Contact = () => {
  const formRef = useRef()  
  const [loading, setloading] = useState(false);

  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setform({ ...form, [name]: value}) //El [name] puede tomar cualquier valor de "form"("name", "email", "message")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true)

    emailjs.send(
      "service_1xm8s14", //Servuce
      "template_o3ef40a", //Templates
      {
        from_name: form.name,
        to_name: "Thomas", 
        from_email: form.email,
        to_email: "thomasbrets1999@gmail.com",
        message: form.message
    },
    "_zFUdxfea1_VMyin1" //key
    )
    .then(() => {
      setloading(false)
      alert("Thank you. I will get back to you as soon as possible.")

      setform({
        name: "",
        email: "",
        message: "",
      })
    }).catch((err) => {
      setloading(false)
      console.log(err);

      alert("Something went wrong")
    })
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap 8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What`s your name?"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="mt-4 flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="What`s your email?"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="mt-4 flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              placeholder="What do you want to say?"
              value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="mt-6 bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-lg shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Earth/>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
