import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { nullFunc } from "../../../../utils";
import "./OfferCreateBox.css";

export class OfferCreateBox extends Component {
	static defaultProps = {
		createNewOffer: nullFunc,
	};

	componentDidMount() {
		this.props.reset();
	}

	render() {
		const { createNewOffer } = this.props;
		return (
			<>
				<h1 className="layout__title offer-title">Заказ размещён</h1>
				<p className="offer-redirect-box__subtitle">
					Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
				</p>
				<div className="offer-form__button">
					<Button type="submit" color="primary" variant="outlined" onClick={createNewOffer}>
						Сделать новый заказ
					</Button>
				</div>
			</>
		);
	}
}
