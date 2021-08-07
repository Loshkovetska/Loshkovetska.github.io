import React from "react";
import Slider from "react-slick";
import "../Slider/Slider.scss";
import { Link } from "react-router-dom";

export default function MovieSlider(props) {
    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        useTransform: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1076,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    function showDetails(idMovie) {
        props.getAboutMovie(idMovie);
    }

    function getSlides() {
        return props.filterData.map(({ src, title, id }) => (
            <Link to="/" className="slide" key={id} onClick={() => showDetails(id)}>
                <div className="slide__id">{(id < 10 ? "0" + id : id)} </div>
                <div style={{
                    background: `linear-gradient(180deg, rgba(126, 125, 125, 0.3) 0%, rgba(112, 111, 111, 0.36875) 11.46%, rgba(0, 0, 0, 0.9) 100%),url(${src})`
                }} className="slide__image slide-image">
                    <span className="slide__title"> {title} </span>
                </div>
            </Link>
        ));
    }

    return (
        <Slider {...settings}>
            {getSlides()}
        </Slider>
    );
}

