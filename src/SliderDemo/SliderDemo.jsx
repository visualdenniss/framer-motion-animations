import React, { useState } from 'react'
import './SliderDemo.css'
import { motion, AnimatePresence } from "framer-motion";
import { images } from './imagesData';
// import { wrap } from "popmotion";

const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const SliderDemo = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and 
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    // const imageIndex = wrap(0, images.length, page);
    
    const swipeConfidenceThreshold = 10000;
    
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };
    
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
        handleImgIndex(newDirection)
    };
    
    const [imgIndex,setImgIndex] = useState(0)
    const handleImgIndex = (dir) => {
        if(dir === 1) {
            if(imgIndex === images.length - 1) {
                setImgIndex(0)
            } else {
                setImgIndex(imgIndex + 1)
            }
        } else {
            if(imgIndex === 0) {
                setImgIndex(images.length - 1)
            } else {
                setImgIndex(imgIndex - 1)
            }
        }
    }
  
    return (
        <div className='slider-demo'>
            <div className="slider-container">
            <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                        className='slider-img'
                        key={page}
                        src={images[imgIndex]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                            }
                        }}
                        />
            </AnimatePresence>
            <div className="next" onClick={() => paginate(1)}>
                {"‣"}
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
                {"‣"}
            </div>
            </div>
        </div>
    )
}

export default SliderDemo
