import React from 'react'
import './Basic.css'
import { motion } from "framer-motion";

const Basic = () => {
    return (
        <main className='basic'>
            <motion.div
                className="basic-container"
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            />
        </main>
    )
}

export default Basic
