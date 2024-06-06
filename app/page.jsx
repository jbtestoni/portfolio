import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-aut h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <h3 className="h3">
                            Software{" "}
                            <span className="text-accent">Developer</span> &
                            <br /> Data{" "}
                            <span className="text-accent">Engineer</span>
                        </h3>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            I'm a developer with experience in JavaScript and
                            Python. Also I've expertise in frameworks like
                            React, Node.js and TypeScript.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2"
                            >
                                <span>Download Resume</span>
                                <FiDownload className="text-xl" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex 
									justify-center items-center text-accent text-base hover:bg-accent 
									hover:text-primary hover:transition-all duration-50"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>

            <div className="xl:block hidden">
                <Stats />
            </div>
        </section>
    );
};

export default Home;
