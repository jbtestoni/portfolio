"use client";

import { FaReact, FaPython, FaJs, FaNodeJs, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

import { motion } from "framer-motion";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../../components/ui/tooltip";

import { ScrollArea } from "../../components/ui/scroll-area";

const about = {
    title: "About me",
    description:
        "Software developer and data engineer. Proficient in various technologies. Passionate about the NFL, MLB and NBA.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Beatriz Norbiato",
        },
        {
            fieldName: "Experience",
            fieldValue: "9+ Years",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Brazilian",
        },
        {
            fieldName: "Languages",
            fieldValue: "Portuguese, English and Spanish",
        },
    ],
};

const experience = {
    title: "My experience",
    items: [
        {
            company: "Appnovation",
            position: "Senior Software Developer",
            duration: "December 2022 - Present",
        },
        {
            company: "SaveLivez",
            position: "ML Software Developer and Data Engineer",
            duration: "July 2022 - October 2022",
        },
        {
            company: "Amdocs",
            position: "MD Software Developer",
            duration: "May 2021 - June 2022",
        },
        {
            company: "kreathor.dev",
            position: "ML Software Developer and Data Engineer",
            duration: "February 2020 - April 2021",
        },
        {
            company: "Véspera Tech.",
            position: "JR Software Developer",
            duration: "March 2019 - February 2020",
        },
        {
            company: "Hospital das Clínicas",
            position: "Data Scientist",
            duration: "June 2016 - March 2019",
        },
    ],
};

const education = {
    title: "My education",
    items: [
        {
            institution: "University of Michigan",
            degree: "Master's. Applied Data Science",
            duration: "2024 - In progress",
        },
        {
            institution: "University of São Paulo",
            degree: "Bachelor's. Biomedical Informatics",
            duration: "2014 - 2019",
        },
    ],
};

const skills = {
    title: "My skills",
    skillList: [
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiTypescript />,
            name: "typescript",
        },
        {
            icon: <FaPython />,
            name: "python",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <FaAws />,
            name: "aws",
        },
    ],
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn",
                },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
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

                    <div className="min-h-[70px] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[210px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider
                                                    delayDuration={100}
                                                >
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">
                                                    {item.fieldName}
                                                </span>
                                                <span className="text-white">
                                                    {item.fieldValue}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
