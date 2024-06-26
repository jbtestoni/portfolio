"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Software Development",
        description:
            "I design, code, and maintain applications and systems, ensuring functionality, security and performance, while solving technical problems.",
        href: "",
    },
    {
        num: "02",
        title: "Data Engineering",
        description:
            "I design and maintain data pipelines, ensuring efficient data flow, integration and storage, while supporting analytics and machine learning.",
        href: "",
    },
];

const Services = () => {
    return (
        <section className="min-h-[80px] flex flex-col justify-center py-12 xl-py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                <div className="w-full flex justify-between items-center">
                                    <div
                                        className="text-5xl font-extrabold text-outline text-transparent 
                                        group-hover:text-outline-hover transition-all duration-500"
                                    >
                                        {service.num}
                                    </div>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-accent transition-all duration-500">
                                    {service.title}
                                </h2>
                                <p className="text-white/60">
                                    {service.description}
                                </p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
