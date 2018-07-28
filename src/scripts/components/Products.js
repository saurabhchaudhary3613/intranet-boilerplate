import React, { Component } from 'react';
import API from './api';
//import { fetchProducts } from '../actions/action';

export default class Products extends Component {
    constructor() {
        super();
        this.state = {
            mutualFunds: [],
            otherInvestmentOptions: [],
            productResources: []
        };
    }

    componentDidMount() {
        API.get()
            .then(res => {
                const { products } = res.data;
                this.setState({
                    mutualFunds: products.mutualFunds,
                    otherInvestmentOptions: products.otherInvestmentOptions,
                    productResources: products.productResources
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderProducts(data) {
        return (
            <div key={data}>
                <div className="product-container body-container">
                    <div data-testid="productName" className="product-name">
                        {data}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="container body-container">
                    <div className="row">
                        <div className="col s12 m4 l4">
                            <div>
                                <h5 className="product-title">Mutual Funds</h5>
                            </div>
                            {this.state.mutualFunds.map(this.renderProducts)}
                        </div>
                        <div className="col s12 m4 l4">
                            <div>
                                <h5 className="product-title">
                                    Other Investment Options
                                </h5>
                            </div>
                            {this.state.otherInvestmentOptions.map(
                                this.renderProducts
                            )}
                        </div>
                        <div className="col s12 m4 l4">
                            <div>
                                <h5 className="product-title">
                                    Product Resources
                                </h5>
                            </div>
                            {this.state.productResources.map(
                                this.renderProducts
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
