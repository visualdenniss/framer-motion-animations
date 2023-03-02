import React, {useState} from 'react'
import './LayoutMini.css'
import {motion, AnimatePresence} from 'framer-motion'


const LayoutMini = () => {

    const [selectedId, setSelectedId] = useState("")

    // const closeModal = (e) => {
    //     console.log(e.target === e.currentTarget);
    // }

    return (
        <motion.div className='layout-mini'>
            <motion.div className="layout-mini-container">
                <motion.ul className='layout-mini-gallery'>
                    {[{id:1},{id:2},{id:3},{id:4}].map((item)=>(
                        <motion.li className="layout-mini-item" layoutId={item.id}
                        onClick={()=> setSelectedId(item.id)}>
                            <motion.div className="layout-mini-text-placeholder" layoutId={`${item.id}text`}>
                                <motion.div layoutId={`${item.id}text1`}></motion.div>
                                <motion.div layoutId={`${item.id}text2`}></motion.div>
                                <motion.div layoutId={`${item.id}text3`}></motion.div>
                            </motion.div>
                            <motion.div layoutId={`${item.id}addition`} className="layout-mini-additionals">
                                <motion.div layoutId={`${item.id}addition1`}></motion.div>
                                <motion.div layoutId={`${item.id}addition2`}></motion.div>
                                <motion.div layoutId={`${item.id}addition3`}></motion.div>
                            </motion.div>
                            <motion.div className="layout-mini-modal-close">
                            </motion.div>
                        </motion.li>
                    ))}
                </motion.ul>

                <AnimatePresence>
                {selectedId && (<>
                    <motion.div className='layout-mini-modal-container'>
                            <motion.div className="layout-mini-modal" layoutId={selectedId} >
                            <motion.div className="layout-mini-text-placeholder" layoutId={`${selectedId}text`}>
                                <motion.div layoutId={`${selectedId}text1`}></motion.div>
                                <motion.div layoutId={`${selectedId}text2`}></motion.div>
                                <motion.div layoutId={`${selectedId}text3`}></motion.div>
                            </motion.div>
                            <motion.div layoutId={`${selectedId}addition`} className="layout-mini-additionals">
                                <motion.div  layoutId={`${selectedId}addition1`}></motion.div>
                                <motion.div  layoutId={`${selectedId}addition2`}></motion.div>
                                <motion.div  layoutId={`${selectedId}addition3`}></motion.div>
                            </motion.div>
                            <motion.div className="layout-mini-modal-close">
                            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><motion.path d="M15 5L5 15M5 5l5.03 5.03L15 15" fill="transparent" stroke-width="2" stroke="currentColor" stroke-linecap="round"></motion.path></motion.svg>
                            </motion.div>
                            </motion.div>
                    </motion.div>
                </>
                )}
                 </AnimatePresence>
                <AnimatePresence>
                    {selectedId && (
                    <motion.div onClick={()=> setSelectedId(null)} initial={{opacity:0}} animate={{opacity: .8}} exit={{opacity:0}} className='layout-mini-modal-backdrop'>
                    </motion.div>
                    )}
                    </AnimatePresence>
            </motion.div>
        </motion.div>
    )
}

export default LayoutMini
