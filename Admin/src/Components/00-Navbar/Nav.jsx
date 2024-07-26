import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaUserCircle, FaExchangeAlt } from "react-icons/fa";
import { MdDashboard, MdSettings } from "react-icons/md";
import { ImExit } from "react-icons/im";

import { NavLink } from "react-router-dom";

import "./nav.css";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "/employee",
    name: "Employee",
    icon: <FaUserCircle />,
  },
  {
    path: "/manage",
    name: "Manage Access",
    icon: <FaExchangeAlt />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <MdSettings />,
  },
  {
    path: "/logout",
    name: "Logout",
    icon: <ImExit />,
  },
];

export default function Nav({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div>
      <div className="main_container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "60px",
            transition: {
              duration: 0.2,
              type: "spring",
              damping: 10,
            },
          }}
          className="sidebar"
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  className="logo"
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  Admin Panel
                </motion.h1>
              )}
            </AnimatePresence>
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route) => (
              <NavLink
                to={route.path}
                key={route.name}
                className="link"
                activeClassName="active"
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="link_text"
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </section>
        </motion.div>
        <main style={{ width: isOpen ? "85vw" : "95vw" }}>{children}</main>
      </div>
    </div>
  );
}
