import { IoChevronDownCircleOutline } from "react-icons/io5";
import { motion } from 'framer-motion'
import { useState } from "react";

export const Dropdown = ({ dropped_elements, dropped_down, styling }: {
    dropped_elements: React.ReactNode | React.ReactNode[],
    dropped_down: boolean,
    styling: string
}) => {

    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    }

    return (
        <div className={`${styling}`}>
            <div className="flex flex-col items-end w-full">
            <motion.button
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                }}
                >
                <IoChevronDownCircleOutline onClick={toggleVisibility} className={`w-10 h-10 text-green transition-all ${isVisible ? "rotate-0" : "rotate-180"}`}></IoChevronDownCircleOutline>
            </motion.button>
            </div>
            <div className={`w-full  ${isVisible ? "opacity-100 h-auto" : "opacity-0 h-0"}`}>
                {dropped_elements}
            </div>
        </div>
    )

}