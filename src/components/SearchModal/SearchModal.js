import React, { useState, useEffect } from "react";
import { Exit, Search } from "../Svg/Svg";

import "../SearchModal/SearchModal.scss";

export default function SearchModal(props) {
    const [searchRes, setResult] = useState();

    function changeModalState() {
        props.changeState();
    }

    useEffect(() => {
        if (props.isOpen) {
            document.body.style.overflow = "hidden";
            document.querySelector(".navigation").classList.add("navigation--hidden");
        }
        else {
            document.body.style.overflow = "auto";
            document.querySelector(".navigation").classList.remove("navigation--hidden");
        }
    });

    function handlerChange(e) {
        const inputValue = e.target.value;

        let url = `http://www.omdbapi.com/?apikey=d3ff230f&s=${inputValue}`;

        getMovies(url);
    }

    function getMovies(url) {
        fetch(url)
            .then(
                response => {
                    if (response.ok) {
                        return response.json();
                    }
                    else throw new Error("HTTP status " + response.status + " " + response.statusText);
                },
                reject => {
                    throw new Error(reject);
                })
            .then(result => {
                getPosts(result.Search);
            }).catch(e => {
                if (e.message === 'TypeError: Failed to fetch') {
                    alert("Something's gone wrong");
                }
            });
    }

    function getPosts(data) {
        const finalData = data.filter(movie => movie.Poster !== "N/A");

        setResult(
            <>
                <div className="search__count">Результатів знайдено {finalData.length}</div>
                <div className="posts">
                    {finalData.map((movie, index) => (
                        <div className="post" key={index} >
                            <img src={movie.Poster} alt="img" className="img-poster" />
                            <span className="post__title">{movie.Title}</span>
                        </div>
                    ))}
                </div>

            </>
        );
    }

    return (
        <section className={"search" + (props.isOpen ? " search--open" : "")}>
            <div className="search__container">
                <button className="search__exit" onClick={changeModalState}>
                    <Exit className={"exit-svg"} />
                </button>
                <div className="search__input">
                    <Search className={"header__svg"} />
                    <input className="input input--search" onChange={handlerChange} />
                </div>
                <div className="search__output">
                    {searchRes}
                </div>
            </div>
        </section>
    );
}