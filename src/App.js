import React, {useEffect, useState} from 'react';
import Nav from "./components/Nav/Nav";
import SideNav from "./components/SideNav/SideNav";
import Main from "./components/Main/Main";
import Skill from "./components/Skill/Skill";
import Footer from "./components/Footer/Footer";
import Separator from "./components/Separator/Separator";
import {useDispatch} from 'react-redux';
import {windowResize, windowScroll} from './store/reducers/app';

import './App.scss';

function App() {
    const dispatch = useDispatch();
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            dispatch(windowResize());
        };
        const onScroll = () => {
            dispatch(windowScroll());
        };
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", onScroll);
        handleResize();
        onScroll();
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", onScroll);
        }
    }, [dispatch]);

    const openNav = () => {
        setShowNavbar(true);
        document.body.classList.add('lock-scroll');
        console.log(showNavbar);
    }

    const closeNav = () => {
        setShowNavbar(false);
        document.body.classList.remove('lock-scroll');
        console.log(showNavbar);
    }

  return (
    <div className="App">
        <Nav openNav={openNav}/>
        {
            showNavbar ? (
                <SideNav closeNav={closeNav}/>
            ) : ''
        }
        <Main/>
        <Separator/>
        <Skill/>
        <Footer/>
    </div>
  );
}

export default App;
