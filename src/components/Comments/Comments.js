import React, { useState } from "react";
import comments from "../../mockData/comments";
import "./Comments.scss";
import { users } from "../../mockData/users";
import { Heart } from "../Svg/Svg";



export default function Comments() {
    const [comment, setComment] = useState();
    const [countComments, setCount] = useState(comments.length);
    const [likes, setLikes] = useState(0);
    const [user, setUser] = useState();

    function onChangeHadler(e) {
        setComment(e.target.value);
    }

    function addComment() {
        const [userStorage] = users.filter(user => user.email.includes(localStorage.getItem("user")));

        if (!userStorage) {
            alert("Залишити коментар можливо лише після авторизації!");
            return;
        }

        comments.push(
            {
                author: userStorage.name,
                text: comment,
                countLikes: 0,
                date: new Date().toLocaleDateString('ru-RU')
            }
        );

        setCount(comments.length);
    }

    function putLike(e) {
        const [userStorage] = users.filter(user => user.email.includes(localStorage.getItem("user")));
        if (!userStorage) {
            alert("Оцінити коментар можливо лише після авторизації!");
            return;
        }


        let ind = +e.currentTarget.dataset.id;

        if (user === userStorage.email && +comments[ind].countLikes > 0) {
            comments[ind].countLikes = +comments[ind].countLikes - 1;
            setUser("");
        }
        else {
            comments[ind].countLikes = +comments[ind].countLikes + 1;
            setUser(userStorage.email);
        }

        setLikes(comments[ind].countLikes);

    }

    function getComment(author, date, text, countLikes, index) {
        return (
            <div className="comment" key={index}>
                <div className="comment__top">
                    <div className="comment__author">{author}</div>
                    <div className="comment__date">{date}</div>
                </div>
                <p className="comment__text">{text}</p>
                <div className="comment__bottom">
                    <button onClick={putLike} className="button button--like" data-id={index}>
                        <Heart className="heart-svg" />
                    </button>
                    <span className="comment__likes">{countLikes}</span>
                </div>
            </div>
        );
    }


    return (
        <div className="comments">
            <div className="comments__container">
                <div className="comments__count">Коментарі ({countComments})</div>
                <div className="comments__input">
                    <textarea required className="input input--comment" onChange={onChangeHadler}
                        placeholder="Напишіть свої враження від  перегляду фільму" />
                    <button className="button button--comment" onClick={addComment}>Відправити</button>
                </div>
                <div className="comments__output">
                    <div className="comments__old">
                        {
                            comments.map((comment, index) => getComment(comment.author, comment.date, comment.text, comment.countLikes, index))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}
