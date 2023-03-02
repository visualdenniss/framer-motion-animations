import a from "../assets/images/a.jpg";
import c from "../assets/images/c.jpg";
import d from "../assets/images/d.jpg";
import b from "../assets/images/b.jpg";
import e from "../assets/images/e.jpg";
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from "react";
import './Layout.css'

const Layout = () => {
    const [value, setValue] = useState({ id: "", img: "" });
    return (
        <main className='layout'>
            <div className="flex justify-center items-center w-[1200px] h-auto py-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-[1200px] flex-none">
                    {cards.map(
                        (
                            {
                                id,
                                category,
                                title,
                                description,
                                pointOfInterest,
                                bgcolor,
                                status,
                                img
                            },
                            index
                        ) => {
                            return (
                                <motion.div
                                    key={id}
                                    layoutId={`cardCtn${id}`}
                                    className={`sm:gridLayout relative flex h-[400px] w-full rounded-3xl overflow-hidden`}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <motion.div
                                        onClick={() => setValue({ id, img, category, description })}
                                        layoutId={`img${id}`}
                                        className="flex flex-none"
                                    >
                                        {" "}
                                        {/* flex-none has to be apply in order to disable shrink and auto sizing */}
                                        <motion.img
                                            layout
                                            className="flex-none"
                                            src={img}
                                            width="400"
                                            height="400"
                                            alt="br"
                                        />
                                    </motion.div>
                                </motion.div>
                            );
                        }
                    )}
                </div>

                <AnimatePresence>
                    {value.id && (
                        <motion.div
                            style={{ cursor: 'pointer' }}
                            layout
                            layoutId={`cardCtn${value.id}`}
                            className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[400px] h-[400px] bg-slate-300 rounded-3xl overflow-hidden"
                        >
                            <div onClick={() => setValue({ id: "", img: "" })}>
                                <motion.div
                                    className="absolute top-0 left-0  h-[400px] w-[400px]"
                                    layoutId={`img${value.id}`}
                                    layout
                                >
                                    {" "}
                                    {/* heigh and width have to be the same on both components */}
                                    <motion.img
                                        layout
                                        className="flex-none"
                                        src={value.img}
                                        width="400"
                                        height="400"
                                        alt={"img"}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    )
}

export default Layout

const cards = [
    {
        id: "c",
        category: "Pizza",
        title: "5 Food Apps Delivering the Best of Your City",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, magni omnis maxime, explicabo vitae, perferendis praesentium doloremque cupiditate a illum perspiciatis exercitationem facere optio natus odio quasi eos molestiae vel.",
        pointOfInterest: 80,
        bgcolor: "#814A0E",
        img: a
    },
    {
        id: "f",
        category: "How to",
        title: "Arrange Your Apple Devices for the Gram",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, magni omnis maxime, explicabo vitae, perferendis praesentium doloremque cupiditate a illum perspiciatis exercitationem facere optio natus odio quasi eos molestiae vel.",
        pointOfInterest: 120,
        bgcolor: "#959684",
        img: b
    },
    {
        id: "a",
        category: "Pedal Power",
        title: "Map Apps for the Superior Mode of Transport",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, magni omnis maxime, explicabo vitae, perferendis praesentium doloremque cupiditate a illum perspiciatis exercitationem facere optio natus odio quasi eos molestiae vel.",
        pointOfInterest: 260,
        bgcolor: "#5DBCD2",
        img: c
    },
    {
        id: "g",
        category: "Holidays",
        title: "Our Pick of Apps to Help You Escape From Apps",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, magni omnis maxime, explicabo vitae, perferendis praesentium doloremque cupiditate a illum perspiciatis exercitationem facere optio natus odio quasi eos molestiae vel.",
        pointOfInterest: 200,
        bgcolor: "#8F986D",
        img: d
    },
    {
        id: "d",
        category: "Photography",
        title: "The Latest Ultra-Specific Photography Editing Apps",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, magni omnis maxime, explicabo vitae, perferendis praesentium doloremque cupiditate a illum perspiciatis exercitationem facere optio natus odio quasi eos molestiae vel.",
        pointOfInterest: 150,
        bgcolor: "#FA6779",
        img: e
    },

];
