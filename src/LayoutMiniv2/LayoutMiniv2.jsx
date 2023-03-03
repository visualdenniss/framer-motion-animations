import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LayoutMini = () => {
  const [selectedId, setSelectedId] = useState("");

  const style = {
      display: 'grid',
      placeItems: 'center'
  }

  const circleStyle = {
      width: "20px",
      height: "20px",
      backgroundColor: "#a0f",
      borderRadius: "50%",
  }

  const modalCircleStyle = {
      width: "100px",
      height: "100px",
      backgroundColor: "#a0f",
      borderRadius: "50%"
  }

  return (
    <motion.div className="layout-mini">
      <motion.div className="layout-mini-container">
        <motion.ul className="layout-mini-gallery">
          {[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }].map((item) => (
            <motion.li
              className="layout-mini-item"
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              style={style}
            >
              <motion.div
                layoutId={`${item.id}circle`}
                style={circleStyle}
              ></motion.div>
            </motion.li>
          ))}
        </motion.ul>

        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div className="layout-mini-modal-container">
                <motion.div className="layout-mini-modal" layoutId={selectedId}
                style={style}>
                  <motion.div
                    layoutId={`${selectedId}circle`}
                    style={modalCircleStyle}
                  ></motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="layout-mini-modal-backdrop"
            ></motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default LayoutMini;
