import f2 from "../assets/images/f2-logo.png";
import autof2 from "../assets/images/f222-transformed.png";
import f1 from "../assets/images/f1-logo.png";
import autof1 from "../assets/images/f1-transformed.png";
import { motion } from "framer-motion";

function Autos() {
return (
    <div className="relative w-full h-screen overflow-hidden">
        <motion.div
            initial={{ x: 0 }}
            animate={{ x: -1600 }}
            transition={{ duration: 0.4, ease: "easeIn", delay: 1.5 }}
            className="absolute top-0 left-0 w-full h-full"
        >
            <img
            src={f2}
            alt="Logo Formula f2"
            className="w-99 h-100 opacity-85 top-12 absolute z-10 right-5"
            />
            <img
            src={autof2}
            alt="Auto f2"
            className="absolute top-32 sm:top-40 md:top-60 z-10 "
            />
        </motion.div>

        <motion.div
            initial={{ x: 1600 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, ease: "easeIn", delay: 1.6 }}
            className="absolute top-0 left-0 w-full h-full"
        >
            <img
            src={f1}
            alt="Logo Formula f1"
            className="w-100 h-100 opacity-85 absolute z-10 top-10 right-0"
            />
            <img
            src={autof1}
            alt="Auto f1"
            className="absolute top-32 sm:top-40 md:top-60 z-20"
            />
        </motion.div>
    </div>
);
}

export default Autos;
