import React, { useEffect, useState } from "react";
import { Exit, NextStep } from "../Svg/Svg";
import "./StoreModal.scss";
import { seatsVariants } from "../../mockData/seats";

export default class StoreModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isResized: false };
        this.fullDate = this.props.dateTime[0];
        this.time = props.dateTime[1];
    }

    componentDidUpdate() {
        if (this.state.isResized) {
            document.querySelector(".navigation").classList.add("navigation--hidden");
        }
        else {
            document.querySelector(".navigation").classList.remove("navigation--hidden");
        }
    }

    resizeModal() {
        this.setState({ isResized: this.state.isResized ? false : true });
    }

    getTypeOfSeat(type) {
        if (!type) return;
        const [seat] = seatsVariants.filter(seat => seat.title === type);
        return seat.icon;
    }

    getPriceOfSeat(type) {
        if (!type) return;
        const [seat] = seatsVariants.filter(seat => seat.title === type);
        return seat.price;
    }

    getTotalTicketPrice(tickets) {
        let total = 0;

        tickets.forEach(ticket => {
            total += this.getPriceOfSeat(ticket.type);
        });

        return total;
    }

    getPriceBySize(size) {
        return (size === "M") ? 30 : (size === "L") ? 40 : 0;
    }

    getTotalProductsPrice(products) {
        let total = 0;

        [...products].forEach(product => {
            total += (product.price + this.getPriceBySize(product.size)) * product.count;
        });

        return total;
    }

    getTotalCount(tickets, products) {
        return this.getTotalTicketPrice(tickets) + this.getTotalProductsPrice(products);
    }

    changeTab() {
        let tab = this.props.currentTab;
        this.props.openTab(tab + 1);
    }

    deleteTicket(e) {
        const id = e.currentTarget.dataset.idrow;
        const tickets = this.props.tickets;
        tickets.splice(id, 1);
        this.props.updateTickets(tickets);
    }

    deleteProduct(e) {
        const id = e.currentTarget.dataset.idrow;
        const products = this.props.products;
        products.delete([...this.props.products][id]);

        this.props.updateProducts(products);
    }

    getTicketsList(tickets) {
        return tickets.map((ticket, index) => (
            <tr className="tickets-table__row" key={index}>
                <td className="tickets-table__col">{this.getTypeOfSeat(ticket.type)}</td>
                <td className="tickets-table__col">{ticket.row}</td>
                <td className="tickets-table__col">{ticket.seat}</td>
                <td className="tickets-table__col">{this.fullDate}</td>
                <td className="tickets-table__col">{this.time}</td>
                <td className="tickets-table__col">{this.getPriceOfSeat(ticket.type)}</td>
                <td className="tickets-table__col">
                    <button className="tickets-table__button" data-idrow={index} onClick={this.deleteTicket.bind(this)}>
                        <Exit className="table-delete" />
                    </button>
                </td>
            </tr>
        ));
    }

    getProductsList(products) {
        return [...products].map((product, index) => (
            <tr className="market-table__row" key={index}>
                <td className="market-table__col"><img src={product.img} alt="img" className="market-img" /> </td>
                <td className="market-table__col">{product.title}</td>
                <td className="market-table__col">{product.count}</td>
                <td className="market-table__col">{product.size}</td>
                <td className="market-table__col">{product.price}</td>
                <td className="market-table__col">
                    <button className="market-table__button" data-idrow={index} onClick={this.deleteProduct.bind(this)}>
                        <Exit className="table-delete" />
                    </button>
                </td>
            </tr>
        ));
    }
    render() {


        return (

            <section className={"pop-up-store" + (this.props.show ? " pop-up-store--show" : "")
                + (this.state.isResized ? " pop-up-store--resize" : "") + (this.props.currentTab === 3 ? " pop-up-store--open" : "")}>
                <div className={"pop-up-store__content" + (this.state.isResized ? " pop-up-store__content--show" : "")}>
                    <button className="pop-up-store__button" onClick={this.resizeModal.bind(this)}>
                        <Exit className="modal-exit" />
                    </button>
                    <div className={"pop-up-store__title"}>Ваше замовлення</div>
                    <section className="pop-up-store__tickets tickets-sect">
                        <div className="tickets-sect__top">
                            <div className="tickets-sect__title">Квитки</div>
                            <div className="tickets-sect__price">{this.props.tickets.length}шт, {this.getTotalTicketPrice(this.props.tickets)}грн</div>
                        </div>
                        <table className="tickets-sect__table tickets-table">
                            <thead className="tickets-table__thead">
                                <tr className="tickets-table__thead-row">
                                    <th className="tickets-table__thead-col">Тип</th>
                                    <th className="tickets-table__thead-col">Ряд</th>
                                    <th className="tickets-table__thead-col">Місце</th>
                                    <th className="tickets-table__thead-col">Дата</th>
                                    <th className="tickets-table__thead-col">Час</th>
                                    <th className="tickets-table__thead-col">Вартість</th>
                                    <th className="tickets-table__thead-col"></th>
                                </tr>
                            </thead>
                            <tbody className="tickets-table__rows">
                                {this.getTicketsList(this.props.tickets)}
                            </tbody>
                        </table>
                    </section>
                    <section className="pop-up-store__tickets market-sect">
                        <div className="market-sect__top">
                            <div className="market-sect__title">Кіномаркет</div>
                            <div className="market-sect__price">{this.props.products.size || 0}шт, {this.getTotalProductsPrice(this.props.products)}грн</div>
                        </div>
                        <table className="market-sect__table market-table">
                            <thead className="market-table__thead">
                                <tr className="tickets-table__thead-row">
                                    <th className="market-table__thead-col">Зображення</th>
                                    <th className="market-table__thead-col">Назва</th>
                                    <th className="market-table__thead-col">Кількість</th>
                                    <th className="market-table__thead-col">Обєм</th>
                                    <th className="market-table__thead-col">Вартість</th>
                                    <th className="market-table__thead-col"></th>
                                </tr>
                            </thead>
                            <tbody className="market-table__rows">
                                {this.getProductsList(this.props.products)}
                            </tbody>
                        </table>
                    </section>
                </div>
                <div className="pop-up-store__bottom">
                    <button className={"pop-up-store__resize-button" +
                        (!this.state.isResized) ? " pop-up-store__resize-button--show" : ""} onClick={this.resizeModal.bind(this)}>
                        <NextStep class="pop-arrow-up" />
                    </button>
                    <div className="pop-up-store__general-price">Всього: {this.getTotalCount(this.props.tickets, this.props.products)} грн</div>
                    <div className={"pop-up-store__count" + (!this.state.isResized ? " pop-up-store__count--show" : "")}>Квитки: {this.props.tickets.length}x</div>
                    <div className={"pop-up-store__count" + (!this.state.isResized ? " pop-up-store__count--show" : "")}>Кіномаркет: {[...this.props.products].length}x</div>
                    <button className="button-next" type="submit" onClick={this.changeTab.bind(this)}>
                        <span className="button-text">Продовжити</span>
                        <NextStep />
                    </button>
                </div>
            </section>
        );
    }
}