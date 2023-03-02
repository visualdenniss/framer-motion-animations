import React from 'react'
import './Basic.css'
import { motion } from "framer-motion";
import { basic, basicKeyFrames, basicGestures, basicDrag } from '../animations';

const Basic = () => {
    return (
        <main className='basic'>
            <motion.div {...basic} className="basic-container"/>
            <motion.div {...basicKeyFrames} className="basic-container"/>
            <motion.div {...basicGestures} className="basic-container"/>
            <motion.div drag {...basicDrag} className="basic-container"/>
        </main>
    )
}

export default Basic
