"use client";

import { Factory } from "lucide-react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Hello! I'm Dimas, a recent Public Relations graduate with a specialization in communications, currently embarking on an exciting career shift into the world of programming. My journey into tech began with a deep-seated interest in technology and a passion for creating innovative solutions through code. I decided to transition into programming because of my growing interest and passion for technology, the numerous career opportunities in the tech industry, and my desire to solve problems creatively. Additionally, the flexibility and potential for positive impact in tech are highly appealing. My experience in public relations has equipped me with valuable skills like effective communication and project management, which I believe are highly transferable to programming.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dimas Samiaji",
    },
    {
      fieldName: "Phone",
      fieldValue: "0811-167-0079",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian",
    },
    {
      fieldName: "Email",
      fieldValue: "dimassamji@gmail.com",
    },
  ],
};

// Experience data

const experience = {
  title: "My experience",
  description: "Lorem ipsum dolor sit amet",
  items: [
    {
      company: "Tech Solution",
      position: "Full Stack Developer",
      duration: "2022-present",
    },
    {
      company: "Tech Solution",
      position: "Full Stack Developer",
      duration: "2022-present",
    },
    {
      company: "Tech Solution",
      position: "Full Stack Developer",
      duration: "2022-present",
    },
    {
      company: "Tech Solution",
      position: "Full Stack Developer",
      duration: "2022-present",
    },
  ],
};

// education data

const education = {
  title: "My education",
  description: "Lorem ipsum dolor sit amet",
  items: [
    {
      institution: "Purwadhika Digital School",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Al-Azhar University of Indonesia",
      degree: "Bachelor Degree",
      duration: "2016 - 2019",
    },
    {
      institution: "State University of Jakarta",
      degree: "Diploma",
      duration: "2012 - 2016",
    },
  ],
};

// skills data
const skills = {
  title: "My skill",
  description: "Lorem ipsum dolor sit amet",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
export default Resume;
