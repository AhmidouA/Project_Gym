import Htext from "@/shared/Htext";
import { SelectedPage, BenefitType } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h6 w-6" />,
        title: "State of the Art Facilities",
        description : 
        "Explore cutting-edge facilities designed to push the boundaries of innovation. State-of-the-art technologies that transform your experience and redefine the future of comfort and performance."

    }, 
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Discover a myriad of diverse classes, offering options tailored to all levels and preferences. A comprehensive selection designed to meet your needs and enhance your fitness journey."
    }, 
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Receive expert guidance and benefit from professional coaching from our team of seasoned trainers. An exceptional learning experience to guide you towards achieving your fitness goals."






    }
];

const container = {
    hidden: {},
    visible : {
        transition: {staggerChildren: 0.2}
    }
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>
            {/* Header */}
            <motion.div 
            className="md: my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -100},
                visible: {opacity: 1, x: 0},
            }}
            >
                <Htext>MORE THAN JUST GYM.</Htext>
                <p className="my-5 text-sm"> 
                We provide world class fitness equipment, trainers and classes to
                get you to your ultimate fitness goals with ease. We provide true
                care into each and every member.
                </p>
            </motion.div>

            {/* Benefits */}
            <motion.div className="md:flex item-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
            >
            {benefits.map((benefit: BenefitType) => (
                <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
                />
            ))}
            </motion.div>
            {/* Graphic & Description */}
            <div className="mt-16 item-center justify-between gap-20 md:mt-28 md=flex">
                {/* Graphic */}
                <img className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
                />

                {/* Description */}
                <div>
                    {/* Title */}
                    <div className="relative">
                        <div className="before:absolute:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                            }}
                            >
                                <Htext>MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className="text-primary-500">FIT</span>
                                </Htext>
                            </motion.div>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="my-5">
                        Discover state-of-the-art facilities designed to push the boundaries of innovation. 
                        Our cutting-edge technologies redefine your fitness experience, shaping the future of comfort 
                        and performance. Explore a diverse range of classes, catering to all levels and preferences. 
                        Our comprehensive selection is tailored to meet your needs and elevate your fitness journey. 
                        Receive expert guidance and professional coaching from our team of seasoned trainers, 
                        ensuring an exceptional learning experience to help you achieve your fitness goals
                        </p>
                            <p className="mb-5">
                            Experience innovation in fitness with advanced facilities and diverse class options. 
                            Elevate your fitness journey with expert guidance from our seasoned trainers
                            </p>
                    </div>

                    {/* Button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits;