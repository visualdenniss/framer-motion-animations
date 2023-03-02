import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
import  LoremIpsum  from './LoremIpsum';

const UseScrollBasic = () => {

    const styles = {
        code: {
          fontFamily: 'input-mono, monospace',
          fontWeight: 400,
          fontStyle: 'normal',
        },
        article: {
          maxWidth: '500px',
          padding: '20px',
          margin: '0 auto',
        },
        progressBar: {
          backgroundColor: 'red',
          height: '10px',
          position: 'fixed',
          top: 0, 
          left: 0,
          right: 0,
          transformOrigin: '0%',
        },
      };
    

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
    return (
        <div>
          <motion.div style={{...styles.progressBar, scaleX}} />
          <h1 style={{textAlign:'center'}}>
              <code style={styles.code}>useScroll</code> with spring smoothing
          </h1>
          <article style={styles.article}>
            <LoremIpsum />
          </article>
        </div>
    )
}

export default UseScrollBasic
