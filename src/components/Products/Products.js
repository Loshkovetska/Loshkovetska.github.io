import React, { useState } from "react";
import goods from "../../mockData/goods";
import "./Products.scss";
import Select from "../../common/DefaultSelect/DefaultSelect";

export function Product(props) {
    const good = props.good;

    const [countProduct, setCount] = useState(0);
    const [sizeProduct, setSize] = useState("S");

    function getSelectedValue(value) {
        setSize(value);
    }

    function addProduct(e) {
        let count = countProduct;
        setCount(++count);
        let [productInfo] = goods.filter(good => good.id == e.currentTarget.dataset.id);
        productInfo.size = sizeProduct;
        productInfo.count = count;
        props.getProduct(productInfo);
    }

    function removeProduct(e) {
        let count = countProduct;
        setCount(countProduct > 0 ? --count : 0);

        if (count !== 0) {
            let [productInfo] = goods.filter(good => good.id == e.currentTarget.dataset.id);
            productInfo.size = sizeProduct;
            productInfo.count = count;
            props.getProduct(productInfo);
        }
    }

    return (
        <div className="good">
            <div className="good__image">
                <img src={good.img} alt="img-food" className="img-good" />
            </div>
            <div className="good__info good-info">
                <div className="good-info__title">{good.title}</div>
                <div className="good-info__price">{good.price} грн</div>
            </div>
            <div className="good__bottom">
                <div className="good__size-select"><Select selectedVal={getSelectedValue} /></div>
                <div className="good__count">
                    <button className="good__button" onClick={removeProduct} data-id={good.id}>-</button>
                    <span className="good__count-value">{countProduct}</span>
                    <button className="good__button" onClick={addProduct} data-id={good.id}>+</button>
                </div>
            </div>
        </div >
    );
}

const products = new Set();
export default function Products(props) {
    let size = "";
    const [productsFilter, setFilterProducts] = useState(goods);


    function getProduct(product) {
        products.add(product);
        props.getProducts(products);
    }

    function getListGoods() {
        return (
            productsFilter.map((good, index) => (
                <Product good={good} key={index} getProduct={getProduct} />
            ))
        );
    }

    function filterData(param) {
        if (!param) {
            setFilterProducts(goods);
            return;
        }

        let productsList = goods.filter(good => good.kind === param);
        setFilterProducts(productsList);
    }



    return (
        <section className="cinema-menu">
            <div className="cinema-menu__title">Кіноменю:</div>
            <ul className="cinema-menu__list-filters filters">
                <li className="filters__item">
                    <a className="filters__link" href="#" onClick={() => filterData()}>Все</a>
                </li>
                <li className="filters__item">
                    <a className="filters__link" href="#" onClick={() => filterData("попкорн")}>Попкорн</a>
                </li>
                <li className="filters__item">
                    <a className="filters__link" href="#" onClick={() => filterData("напої")}>Напої</a>
                </li>
            </ul>
            <div className="cinema-menu__list-goods">
                {getListGoods()}
            </div>
        </section>
    );
}

