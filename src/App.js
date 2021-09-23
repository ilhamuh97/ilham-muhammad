import './App.css';
import React, {useEffect} from 'react';
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import {useDispatch} from 'react-redux';
import {windowResize} from './store/reducers/app';

function App() {
    const dispatch = useDispatch();

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

  return (
    <div className="App">
        <div id="main" className="main-page">
            <Nav/>
            <Hero/>
        </div>
    </div>
  );
}

export default App;
