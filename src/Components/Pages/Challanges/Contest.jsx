import { motion } from "framer-motion";
import { TbBulb } from "react-icons/tb";
import LiveChallangesCard from "./LiveChallangesCard";

function Contest() {
  let liveChallenges = true;
  //todo: fetch live challanges from API
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ duration: 1, type: "tween" }}
    >
      <div className="my-4 relative text-center text-3xl font-medium">
        <div className="w-[42%] left-0 absolute top-5 border-b border-white h-[1px]"></div>
        <div className="w-[42%] right-0 absolute top-5 border-b border-white h-[1px]"></div>
        <div>
          <span>
            <TbBulb className="inline" />
          </span>
          <span> Live Challanges </span>
        </div>
      </div>
      <div className="flex justify-center items-center mx-1">
        {liveChallenges && <LiveChallangesCard />}
      </div>
    </motion.div>
  );
}

export default Contest;
