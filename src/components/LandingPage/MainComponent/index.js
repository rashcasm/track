import React from "react";
import Button from "../../Common/Button";
import "./styles.css";
import { motion } from "framer-motion";

function MainComponent() {
  return (
    <div className="main-flex">
      <div className="info-landing">
        <motion.h1>
          Track Crypto In Real Time!
        </motion.h1>
        <motion.div>
          <a href="/dashboard">
            <Button text={"Dashboard"} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default MainComponent;
