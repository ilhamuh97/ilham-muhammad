import './App.css';
import React, {useEffect, useState} from 'react';
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import SideNav from "./components/SideNav/SideNav";
import Profile from "./components/Profile/Profile";
import {useDispatch} from 'react-redux';
import {windowResize} from './store/reducers/app';

function App() {
    const dispatch = useDispatch();
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            dispatch(windowResize());
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [dispatch]);

    const openNav = () => {
        setShowNavbar(true);
        document.body.classList.toggle('lock-scroll');
        console.log(showNavbar);
    }

    const closeNav = () => {
        setShowNavbar(false);
        document.body.classList.toggle('lock-scroll');
        console.log(showNavbar);
    }

  return (
    <div className="App">
        <div id="main" className="main-page">
            <Nav openNav={openNav}/>
            <Hero/>
        </div>
        {
            showNavbar ? (
                <SideNav closeNav={closeNav}/>
            ) : null
        }
        <Profile/>
    </div>
  );
}

export default App;
