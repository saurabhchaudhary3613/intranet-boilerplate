import React, { Component } from 'react';

export default class Teams extends Component {
    constructor() {
        super();
        this.sales = [
            'Wholesaler Coverage',
            'Harte Hanks',
            'Pricing Request Form'
        ];
        this.keyAccountAndFirm = [
            'Platform Info',
            'Field Info',
            'Policies & Procedures',
            'Marketing Resources',
            'Institutional Services'
        ];
        this.isg = [
            'Investment Solutions Overview',
            'Overview Brochure',
            'Team Organization',
            'Client & Industry Research',
            'Capital Markets & Macro',
            'Retail Client Projects',
            'Slide Library',
            'LTCME'
        ];
    }

    renderTeams(data) {
        console.log(data);
        return (
            <div key={data}>
                <div className="product-container">
                    <div className="product-name">{data}</div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="container body-container">
                <div className="row">
                    <div className="col s12 m4 l4">
                        <div>
                            <h5 className="product-title">Sales</h5>
                        </div>
                        {this.sales.map(this.renderTeams)}
                    </div>
                    <div className="col s12 m4 l4">
                        <div>
                            <h5 className="product-title">
                                Key Accounts & Firms
                            </h5>
                        </div>
                        {this.keyAccountAndFirm.map(this.renderTeams)}
                    </div>
                    <div className="col s12 m4 l4">
                        <div>
                            <h5 className="product-title">ISG</h5>
                        </div>
                        {this.isg.map(this.renderTeams)}
                    </div>
                </div>
            </div>
        );
    }
}
