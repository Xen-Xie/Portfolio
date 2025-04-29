import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Link } from "react-router";

function AContact() {
  return (
    <div>
      <div className="text-center mt-10 font-inter">
        <p className="text-xl font-poppins">Want to collaborate or chat?</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Link to="/contact">
            <Button variant="solid" className="bg-primary mt-5 text-ground">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default AContact;
