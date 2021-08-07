import React from "react";
import { withRouter } from "react-router";
import "./Store.scss";
import StoreModal from "../StoreModal/StoreModal";
import { movieData } from "../../mockData/movieData";
import { HeaderTop } from "../Header/Header";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import MapSeats from "../MapSeats/MapSeats";
import Payment from "../Payment/Payment";


class Store extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
            isShown: true,
            numTab: 1,
            products: []
        };

        const params = this.props.match.params.params.split("&");
        [this.idMovie, this.fullDate, this.time] = params;
        [this.date, this.month] = this.fullDate.split(",");
        [this.movie] = movieData.filter(item => item.id === +this.idMovie);
    }
    getTags(tags) {
        return (
            (tags.length > 1)
                ? tags.map((tag, index) => (<span className="tags__item" key={index}>{tag}</span>))
                : <span className="tags__item">{tags}</span>
        );
    }

    getTickets(tickets) {
        this.setState({ tickets: tickets });
    }

    updateTickets(tickets) {
        this.setState({ tickets: tickets });
    }

    updateProducts(products) {
        this.setState({ products: products });
    }

    getProducts(products) {
        this.setState({ products: products });
    }

    tabHandler(num) {
        this.setState({ numTab: num });
    }


    getDate() {
        const monthNames = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
        return `${this.date} ${monthNames[this.month - 1]}`;
    }
    render() {
        return (
            <>
                <header className="header header--details">
                    <div className="header__container">
                        <HeaderTop page={"store"} tabHandler={this.tabHandler.bind(this)} storeTab={this.state.numTab} />
                    </div>
                </header>
                <main className="main main--store">
                    <div className="main__container">
                        <section className="main__details details details--store">
                            <div className="details__poster">
                                <img src={this.movie.src} alt="poster" className="poster-image" />
                            </div>
                            <div className="details__content details-content">
                                <div className="details-content__title">{this.movie.title}</div>
                                <div className="details-content__tags tags">{this.getTags(this.movie.tags)}</div>
                                <div className="details-content__columns">
                                    <div className="details-content__row">
                                        <div className="details-content__col">Дата:</div>
                                        <div className="details-content__col">{this.getDate()}</div>
                                    </div>
                                    <div className="details-content__row">
                                        <div className="details-content__col">Час:</div>
                                        <div className="details-content__col">{this.time}</div>
                                    </div>
                                    <div className="details-content__row">
                                        <div className="details-content__col">Опис:</div>
                                        <div className="details-content__col">{this.movie.description}</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <StoreModal
                            show={this.state.isShown}
                            tickets={this.state.tickets}
                            dateTime={[this.getDate(), this.time]}
                            updateTickets={this.updateTickets.bind(this)}
                            updateProducts={this.updateProducts.bind(this)}
                            products={this.state.products}
                            openTab={this.tabHandler.bind(this)}
                            currentTab={this.state.numTab} />

                        <section className="main__tabs-content tabs-content">
                            {
                                this.state.numTab === 1 ? <MapSeats getTickets={this.getTickets.bind(this)} />
                                    : this.state.numTab === 2 ? <Products getProducts={this.getProducts.bind(this)} />
                                        : <Payment tickets={this.state.tickets} products={this.state.products} />
                            }

                        </section>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

}

export default withRouter(Store);