import React, { useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { Trailer, Star, HalfStar, Share } from "../Svg/Svg";
import { HeaderTop } from "../Header/Header";
import Footer from "../Footer/Footer";
import ListDates from "../ListDates/ListDates";
import { movieData } from "../../mockData/movieData";
import Comments from "../Comments/Comments";

import "../Details/Details.scss";


export default function Details() {
    const history = useHistory();
    const { idMovie } = useParams();
    const [movie] = movieData.filter(item => item.id === +idMovie);
    let movieDate, movieTime;

    function getDate(data) {
        movieDate = data;
    }

    function getMovieTime(e) {
        if (!movieDate) {
            alert("Оберіть спочатку дату сеансу, який Ви хочете відвідати!");
            return;
        }

        movieTime = e.target.dataset.time;

        history.push(`/store/${idMovie}&${movieDate}&${movieTime}`);
    }

    const getTags = (tags) => {
        return (
            (tags.length > 1)
                ? tags.map((tag, index) => (<span className="tags__item" key={index}>{tag}</span>))
                : <span className="tags__item">{tags}</span>
        );
    };

    const getPreviews = (previews) => {
        return (
            [...previews].map(({ time, tooltip: { price, hall } }, index) => (
                <div key={index} className="previews__item preview" >
                    <button className="preview__link" onClick={getMovieTime} data-time={time}>{time}</button>
                    <div className="preview__tooltip">
                        <span className="preview__price">{price}</span>
                        <span className="preview__hall">{hall}</span>
                    </div>
                </div>))
        );
    };

    const getStars = (rating) => {

        const stars = new Array(5);
        const intValue = Math.floor(rating);

        if (intValue === 5) stars.fill(<Star className="movie-item-svg" />);
        else {
            stars.fill(<Star className="movie-item-svg" />, 0, intValue);
            stars.fill(<HalfStar className="movie-item-svg" />, intValue, Math.ceil(rating));
        }

        return stars.map((star, index) => (<span className="star" key={index}>{star}</span>));
    };

    function getMovieDetails() {
        return (
            <>
                <div className="details__poster">
                    <img src={movie.src} alt="poster" className="poster-image" />
                    <div className="details__links">
                        <Link href={movie.urlTrailer} className="get-more__item" target="__blank">
                            <Trailer className={"get-more__svg"} />
                            <span className="get-more__title">Трейлер</span>
                        </Link>
                        <Share />
                    </div>
                </div>
                <div className="details__content details-content">
                    <div className="details-content__title">{movie.title}</div>
                    <div className="details-content__rating">{getStars(movie.rating)}</div>
                    <div className="details-content__tags tags">{getTags(movie.tags)}</div>
                    <div className="details-content__columns">
                        <div className="details-content__row">
                            <div className="details-content__col">Рік:</div>
                            <div className="details-content__col">{movie.year}</div>
                        </div>
                        <div className="details-content__row">
                            <div className="details-content__col">Країна:</div>
                            <div className="details-content__col">{movie.country}</div>
                        </div>
                        <div className="details-content__row">
                            <div className="details-content__col">Жанр:</div>
                            <div className="details-content__col">{movie.genre}</div>
                        </div>
                        <div className="details-content__row">
                            <div className="details-content__col">Тривалість:</div>
                            <div className="details-content__col">{movie.duration}</div>
                        </div>
                        <div className="details-content__row">
                            <div className="details-content__col">Режисер:</div>
                            <div className="details-content__col">{movie.director}</div>
                        </div>
                        <div className="details-content__row">
                            <div className="details-content__col">Актори:</div>
                            <div className="details-content__col">{movie.actors}</div>
                        </div>
                        <div className="details-content__row">
                            <div className="details-content__col">Нагороди:</div>
                            <div className="details-content__col">{movie.awards}</div>
                        </div>
                        <div className="details-content__row">
                            <div className="details-content__col">Опис:</div>
                            <div className="details-content__col">{movie.description}</div>
                        </div>
                    </div>
                </div>
            </>

        );
    }

    return (
        <>
            <header className="header header--details">
                <div className="header__container">
                    <HeaderTop />
                </div>
            </header>
            <main className="main main--details">
                <div className="main__container">
                    <section className="details">
                        {getMovieDetails()}
                    </section>
                    <ListDates dates={movie.datesShow} formRoute={getDate} />
                    <section className="previews">
                        <div className="previews__title">Оберіть час</div>
                        <div className="previews__list">{getPreviews(movie.previews)}</div>
                    </section>
                    <Comments />
                </div>
            </main>
            <Footer />
        </>
    );
}