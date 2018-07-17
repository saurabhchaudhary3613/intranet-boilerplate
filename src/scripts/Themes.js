import React, { Component } from 'react';

export default class Themes extends Component {
    constructor() {
        super();
        this.enterpriseThemes = [
            'Active Management',
            'Client Alignment',
            'Retirement',
            'Sustainable Investing',
            'Fixed Income'
        ];
        this.clientThemes = [
            'Capital Markets',
            'Client Insights',
            'Quant/Multi-Asset',
            'Fundamental Equity'
        ];
        this.thoughtLeadership = [
            'White Papers',
            'Investment Insights',
            'Market Commentaries',
            'Investment Solutions',
            'Video Library',
            'Learning Center'
        ];
        this.Campaigns = [
            'Prepare for the Bear',
            "Barron's Recognition",
            'CRM Pilot'
        ];
    }

    renderThemes(data) {
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
            <div className="container">
                <div className="row">
                    <div className="col s12 m3 l3">
                        <div>
                            <h5 className="product-title">Enterprise Themes</h5>
                        </div>
                        {this.enterpriseThemes.map(this.renderThemes)}
                    </div>
                    <div className="col s12 m3 l3">
                        <div>
                            <h5 className="product-title">Client Themes</h5>
                        </div>
                        {this.clientThemes.map(this.renderThemes)}
                    </div>
                    <div className="col s12 m3 l3">
                        <div>
                            <h5 className="product-title">
                                Thought Leadership
                            </h5>
                        </div>
                        {this.thoughtLeadership.map(this.renderThemes)}
                    </div>
                    <div className="col s12 m3 l3">
                        <div>
                            <h5 className="product-title">Campaigns</h5>
                        </div>
                        {this.Campaigns.map(this.renderThemes)}
                    </div>
                </div>
            </div>
        );
    }
}
