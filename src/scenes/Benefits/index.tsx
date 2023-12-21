import Htext from "@/shared/Htext";
import { SelectedPage, BenefitType } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h6 w-6" />,
        title: "State of the Art Facilities",
        description :  "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",

    }, 
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    }, 
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    }
];


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>
            {/* Header */}
            <div className="md: my-5 md:w-3/5">
                <Htext>MORE THAN JUST GYM.</Htext>
                <p className="my-5 text-sm"> 
                We provide world class fitness equipment, trainers and classes to
                get you to your ultimate fitness goals with ease. We provide true
                care into each and every member.
                </p>
            </div>

            {/* Benefits */}
            <div className="md:flex item-center justify-between gap-8 mt-5"></div>
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
    </section>
  )
}

export default Benefits;