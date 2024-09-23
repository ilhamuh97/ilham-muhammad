import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import "./SideNav.scss";

const SideNav = ({ closeNav }) => {
    const navLinks = [
        {
            href: "#main",
            text: "Home",
        },
        {
            href: "#journey",
            text: "Journey",
        },
        {
            href: "#project",
            text: "Project",
        },
    ];
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="sidenav">
                <div className="links">
                    {navLinks.map((nLink, i) => (
                        <motion.a
                            key={nLink.href}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.1 + i / 10,
                            }}
                            className="link"
                            href={nLink.href}
                            onClick={() => closeNav()}>
                            {nLink.text}
                        </motion.a>
                    ))}
                    <AiOutlineClose
                        className="close"
                        onClick={() => closeNav()}
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SideNav;
