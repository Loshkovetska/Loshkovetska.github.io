import React from "react";

import MoviesDay from "../MoviesDay/MoviesDay";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./MainPage.scss";
import Slider from "../Slider/Slider";

export default function MainPage() {
    return (
        <>
            <Header />
            <main className="main">
                <MoviesDay />
                <Slider isPresale={true} />
                <Contact />
            </main>
            <Footer />
        </>
    );
}