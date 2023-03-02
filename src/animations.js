// **** BASICS EXAMPLES **** //  

export const basic = { 
    initial:{ scale: 0 },
    animate:{ rotate: 180, scale: 1 },
    transition:{
        type: "spring",
        stiffness: 260,
        damping: 20
    }
}

// KeyFrames 

export const basicKeyFrames = {
    animate: {
        scale: [1, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        transition: {
            duration: 2, 
        }
    }
  }

// GesturesBasic 

export const basicGestures= {
    whileHover:{ scale: 1.1 },
    whileTap:{ scale: 0.9 }
}

// BasicDrag 

export const basicDrag = {
    
    dragConstraints:{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }
}