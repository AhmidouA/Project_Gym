import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";

import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import {ClassType} from  "@/shared/types";
import Class from "./Class"


const classes: Array<ClassType> = [
    {
      name: "Weight Training Classes",
      description:
      "Experience the power of strength and resilience in our Weight Training Classes. Designed for both beginners and fitness enthusiasts, these classes focus on building muscle, enhancing endurance, and sculpting your body. Unleash your potential and transform your physique with our expert guidance.",
      image: image1,
    },
    {
      name: "Yoga Classes",
      image: image2,
    },
    {
      name: "Ab Core Classes",
      description:
      "Define your core strength and achieve a sculpted midsection with our Ab Core Classes. These sessions are crafted to target your abdominal muscles, improve stability, and foster overall core strength. Elevate your fitness journey with dynamic workouts that help you attain a strong and toned core.",
      image: image3,
    },
    {
      name: "Adventure Classes",
      description:
      "Embark on a fitness journey like never before with our Adventure Classes. From adrenaline-pumping activities to unique challenges, these sessions bring excitement to your workouts. Discover a new level of fitness as you engage in adventurous exercises that keep you motivated and energized.",
      image: image4,
    },
    {
      name: "Fitness Classes",
      image: image5,
    },
    {
      name: "Training Classes",
      description:
      "Experience a transformative fitness journey with our Training Classes. Led by seasoned trainers, these sessions provide personalized guidance to help you achieve your fitness goals. Whether you're a beginner or an advanced enthusiast, our Training Classes cater to all levels, ensuring a well-rounded and effective workout regimen.",
      image: image6,
    },
  ];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
          <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
          >
            <motion.div
              className="mx-auto w-5/6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="md:w-3/5">
                <Htext>OUR CLASSES</Htext>
                <p className="py-5">
                Embark on a fitness journey with our diverse classes, each crafted to enhance your well-being. 
                From weight training to yoga, our offerings cater to various interests and fitness levels. 
                Join us and discover the perfect class to elevate your fitness experience
                </p>
              </div>
            </motion.div>   
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class  
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>   
          </motion.div>
        </section>
      );
    };

export default OurClasses;