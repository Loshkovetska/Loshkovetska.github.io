import React from "react";
import { Link } from "react-router-dom";
import "../MovieList/MovieList.scss";
import { movieData as movies } from "../../mockData/movieData";
import { HalfStar, Star } from "../Svg/Svg";

export default function MovieList(props) {

    function filterData(date, month) {
        return movies.filter((movie) => {
            let flag = false;
            movie.datesShow.forEach(item => {
                let [dateShow, monthShow] = item;
                if (dateShow === date && monthShow === month) { flag = true; return; }
            });
            return flag;
        });
    }

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

    const getTags = (tags) => {
        return (
            (tags.length > 1)
                ? tags.map((tag, index) => (<span className="tags__item" key={index}>{tag}</span>))
                : <span className="tags__item">{tags}</span>
        );
    };

    const getPreviews = (previews) => {
        return (
            (previews.length > 1)
                ? [...previews].map(({ href, time, tooltip: { price, hall } }, index) => (
                    <div key={index} className="preview" >
                        <Link href={href} className="preview__link">{time}</Link>
                        <div className="preview__tooltip">
                            <span className="preview__price">{price}</span>
                            <span className="preview__hall">{hall}</span>
                        </div>
                    </div>))
                : (<div className="preview">
                    <Link href={previews[0].href} className="preview__link">{previews[0].time}</Link>
                    <div className="preview__tooltip">
                        <span className="preview__price">{previews[0].tooltip.price}</span>
                        <span className="preview__hall">{previews[0].tooltip.hall}</span>
                    </div>
                </div>)
        );
    };


    function showList() {
        const [date, month] = props.dateForList.split(",");
        const filteredData = filterData(+date, +month);

        return (
            filteredData.map(movie => {
                return (
                    <div className="movie" key={movie.id}>
                        <Link style={{
                            background: `linear-gradient(180deg, rgba(126, 125, 125, 0.3) 0%, rgba(112, 111, 111, 0.36875) 11.46%, rgba(0, 0, 0, 0.9) 100%),url(${movie.src})`,
                            backgroundSize: "cover"
                        }} className="movie__poster poster" >
                            <div className="poster__tags tags">
                                {getTags(movie.tags)}
                            </div>
                            <div className="poster-content">
                                <div className="poster__title">{movie.title}</div>
                                <div className="poster__genre"><span className="genre-title">Жанр: </span>{movie.genre}</div>
                                <div className="poster__rating">{getStars(movie.rating)}</div>
                            </div>

                        </Link>
                        <div className="poster__previews previews">
                            {getPreviews(movie.previews)}
                        </div>
                    </div>
                );
            })
        );
    }
    const [date, month] = props.dateForList.split(",");
    return (
        <>
            <div className="movie-title">В прокаті з {date} серпня</div>
            <section className="movie-list">
                {showList()}
            </section>
        </>
    );
}