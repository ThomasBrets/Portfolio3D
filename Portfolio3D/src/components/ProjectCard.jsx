import React from "react";
import { motion, spring } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary rounded-2xl p-5 w-full sm:w-[345px]"
      >
        
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <ul className="list-disc mx-4">
            {description.map((description, index) => (
            <li key={index} >
              <p className="text-secondary mt-2 leading-[30px] tracking-wider">
                {description}
              </p>
            </li>
            ))
            }
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[18px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
