import React, { Component } from 'react';

export default class Products extends Component {
    constructor() {
        super();
        this.mutualFunds = [
            'US Equity',
            'Global / International Equity',
            'Fixed Income',
            'Tax Advantaged Fixed Income',
            'Equity Sector',
            'Multi Asset',
            'Specialty / Alternative',
            'Money Market'
        ];
        this.otherInvestmentOptions = [
            'Separately Managed Accounts',
            'Variable Insurance Portfolios',
            'Closed End Funds',
            'Institutional Trust',
            '529 College Planning'
        ];
        this.productResources = [
            'Factsheets',
            'Lipper & Morningstar Ratings',
            'Competitor Profiles',
            'Coverage Maps',
            'Global Product Blog'
        ];
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
                            {this.mutualFunds.map(this.renderProducts)}
                        </div>
                        <div className="col s12 m4 l4">
                            <div>
                                <h5 className="product-title">
                                    Other Investment Options
                                </h5>
                            </div>
                            {this.otherInvestmentOptions.map(
                                this.renderProducts
                            )}
                        </div>
                        <div className="col s12 m4 l4">
                            <div>
                                <h5 className="product-title">
                                    Product Resources
                                </h5>
                            </div>
                            {this.productResources.map(this.renderProducts)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
